import os
import time
import subprocess
import signal
import sys

if len(sys.argv) != 3:
    print("Usage: python certbot_entrypoint.py <domain> <mode>")
    print("Modes: production, development")
    sys.exit(1)

domain = sys.argv[1]
mode = sys.argv[2]

# Paths to the certificate and key files
CERT_DIR = f'/etc/letsencrypt/live/{domain}'
CERT_PATH = f'{CERT_DIR}/fullchain.pem'
KEY_PATH = f'{CERT_DIR}/privkey.pem'

def generate_self_signed_cert():
    print("Generating self-signed certificate...")

    os.makedirs(CERT_DIR, exist_ok=True)
    
    subprocess.run([
        "openssl", "req", "-x509", "-nodes", "-days", "365", 
        "-newkey", "rsa:2048", 
        "-keyout", KEY_PATH,
        "-out", CERT_PATH,
        "-subj", f"/CN={domain}"
    ], check=True)

def generate_real_cert():
    print("Generating real certificate with Certbot...")
    
    os.makedirs(CERT_DIR, exist_ok=True)
    
    subprocess.run([
        "certbot", "certonly", "--webroot", "-w", "/var/www/certbot", 
        "-d", domain, 
        "--non-interactive", "--agree-tos", "--email", "adil.yergaliyev@gmail.com"
    ], check=True)

def renew_certificates():
    while True:
        # Check if the certificates exist
        if not os.path.isfile(CERT_PATH) or not os.path.isfile(KEY_PATH):
            if mode == "development":
                generate_self_signed_cert()
            elif mode == "production":
                generate_real_cert()
            else:
                print("Invalid mode. Use 'production' or 'development'.")
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
