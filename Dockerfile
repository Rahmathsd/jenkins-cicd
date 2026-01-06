# Use Node.js LTS
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy dependency files
COPY package.json package-lock.json* ./

# Install dependencies
RUN npm install

# Copy rest of the app
COPY . .

# Expose React dev server port
EXPOSE 3000

# Start React app
CMD ["npm", "start"]
