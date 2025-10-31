#!/bin/sh

# Generate config.js
cat <<-EOF > /public/config.js
window.env = {
  SENTRY_DSN: '$SENTRY_DSN',
  API_SERVER_URL: '$API_SERVER_URL',
  KEYCLOAK_URL: '$KEYCLOAK_URL',
};
EOF

# Start Nginx
nginx -g "daemon off;"
