#!/bin/sh
set -e

echo "Running dockerStart.sh..."
chmod +x /app/docker/dockerStart.sh
./docker/dockerStart.sh

echo "Starting Vite preview server..."
npm run preview

#echo "Starting Vite dev mode..."
#npm run dev -- --host
