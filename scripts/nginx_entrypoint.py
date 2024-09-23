import os
import stat

# Change permissions for the default.conf file
conf_file_path = '/etc/nginx/conf.d/default.conf'

# Set the permissions to read and write for the owner, and read for group and others
os.chmod(conf_file_path, stat.S_IRUSR | stat.S_IWUSR | stat.S_IRGRP | stat.S_IROTH)

# Execute the main command
os.execlp('nginx', 'nginx', '-g', 'daemon off;')
