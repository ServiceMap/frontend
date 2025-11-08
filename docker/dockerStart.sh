#!/bin/sh

# Generate config.js
for path in /app/dist/config.js /app/public/config.js; do
  cat <<-EOF > "$path"
window.env = {
  SENTRY_DSN: '$SENTRY_DSN',
  STRIPE_PUBLIC_KEY: '$STRIPE_PUBLIC_KEY',
  API_SERVER_URL: '$API_SERVER_URL',
  KEYCLOAK_URL: '$KEYCLOAK_URL',
  KEYCLOAK_CLIENT_ID: '$KEYCLOAK_CLIENT_ID',
  KEYCLOAK_DEFAULT_REALM: '$KEYCLOAK_DEFAULT_REALM',
};
EOF
done

## Start Nginx
#nginx -g "daemon off;"
