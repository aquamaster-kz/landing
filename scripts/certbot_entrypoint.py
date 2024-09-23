#!/usr/bin/env python3

import os
import time
import subprocess
import signal
import sys

if len(sys.argv) != 3:
    print("Usage: python certbot_entrypoint.py <domain> <mode>")
    print("Modes: production, staging, development")
    sys.exit(1)

domain = sys.argv[1]
mode = sys.argv[2]

CERT_DIR = f'/etc/letsencrypt/live/{domain}'

def remove_existing_certs():
    if os.path.exists(CERT_DIR):
        print("Removing existing certificates...")
        subprocess.run(["rm", "-rf", CERT_DIR], check=True)

def generate_self_signed_cert():
    print("Generating self-signed certificate...")
    os.makedirs(CERT_DIR, exist_ok=True)
    
    subprocess.run([
        "openssl", "req", "-x509", "-nodes", "-days", "365", 
        "-newkey", "rsa:2048", 
        "-keyout", f'{CERT_DIR}/privkey.pem',
        "-out", f'{CERT_DIR}/fullchain.pem',
        "-subj", f"/CN={domain}"
    ], check=True)

def generate_real_cert(is_staging=False):
    print("Generating real certificate with Certbot...")
    os.makedirs(CERT_DIR, exist_ok=True)
    
    certbot_cmd = [
        "certbot", "certonly", "--webroot", "-w", "/var/www/certbot", 
        "-d", domain, 
        "--non-interactive", "--agree-tos", "--email", "adil.yergaliyev@gmail.com"
    ]
    
    if is_staging:
        certbot_cmd += ["--staging"]

    subprocess.run(certbot_cmd, check=True)

def renew_certificates():
    while True:
        remove_existing_certs()

        if mode == "development":
            generate_self_signed_cert()
        elif mode == "production":
            generate_real_cert()
        elif mode == "staging":
            generate_real_cert(is_staging=True)
        else:
            print("Invalid mode. Use 'production', 'staging' or 'development'.")
            sys.exit(1)
        
        time.sleep(5184000)  # Sleep for 60 days (60 * 24 * 60 * 60 seconds)

def signal_handler(sig, frame):
    print('Exiting...')
    sys.exit(0)

if __name__ == "__main__":
    signal.signal(signal.SIGTERM, signal_handler)
    renew_certificates()
