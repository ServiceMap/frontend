FROM --platform=linux/arm64 node:20-alpine

# Create app directory
WORKDIR /usr/src/app

# Install dependencies separately to leverage Docker caching
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all source files
COPY . .

# Expose Vite dev server port
EXPOSE 5173

# Run in dev mode with hot reload
CMD ["npm", "run", "dev", "--", "--host"]
