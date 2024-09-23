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

# Paths to the certificate and key files
BASE_CERT_DIR = f'/etc/letsencrypt/live/{domain}'
PROD_CERT_DIR = f'{BASE_CERT_DIR}/production'
STAGING_CERT_DIR = f'{BASE_CERT_DIR}/staging'
SELF_SIGNED_CERT_DIR = f'{BASE_CERT_DIR}/self-signed'
CERT_PATH = f'{PROD_CERT_DIR}/fullchain.pem'
KEY_PATH = f'{PROD_CERT_DIR}/privkey.pem'

def create_cert_dir_structure():
    os.makedirs(PROD_CERT_DIR, exist_ok=True)
    os.makedirs(STAGING_CERT_DIR, exist_ok=True)
    os.makedirs(SELF_SIGNED_CERT_DIR, exist_ok=True)

def generate_self_signed_cert():
    print("Generating self-signed certificate...")

    create_cert_dir_structure()
    
    subprocess.run([
        "openssl", "req", "-x509", "-nodes", "-days", "365", 
        "-newkey", "rsa:2048", 
        "-keyout", f'{SELF_SIGNED_CERT_DIR}/privkey.pem',
        "-out", f'{SELF_SIGNED_CERT_DIR}/fullchain.pem',
        "-subj", f"/CN={domain}"
    ], check=True)

def generate_real_cert(is_staging=False):
    print("Generating real certificate with Certbot...")
    
    create_cert_dir_structure()
    
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
        # Check if the certificates exist
        if not os.path.isfile(CERT_PATH) or not os.path.isfile(KEY_PATH):
            if mode == "development":
                generate_self_signed_cert()
            elif mode == "production":
                generate_real_cert()
            elif mode == "staging":
                generate_real_cert(is_staging=True)
            else:
                print("Invalid mode. Use 'production', 'staging' or 'development'.")
                sys.exit(1)
        else:
            try:
                # Renew the certificates
                subprocess.run(["certbot", "renew", "--webroot", "-w", "/var/www/certbot"], check=True)
            except subprocess.CalledProcessError as e:
                print(f"Error renewing certificates: {e}")
        
        time.sleep(5184000)  # Sleep for 60 days (60 * 24 * 60 * 60 seconds)

def signal_handler(sig, frame):
    print('Exiting...')
    sys.exit(0)

if __name__ == "__main__":
    signal.signal(signal.SIGTERM, signal_handler)
    renew_certificates()
