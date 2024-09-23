import os
import stat

# Path to the default.conf file
conf_file_path = '/etc/nginx/conf.d/custom.conf'

# Check if the file exists
if os.path.exists(conf_file_path):
    # Set permissions: owner can read/write, group and others can read
    os.chmod(conf_file_path, stat.S_IRUSR | stat.S_IWUSR | stat.S_IRGRP | stat.S_IROTH)
else:
    print(f"Error: {conf_file_path} does not exist.")

# Execute the main Nginx command
os.execlp('nginx', 'nginx', '-g', 'daemon off;')
