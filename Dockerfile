FROM oven/bun:1
WORKDIR /app

# Install dependencies
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy the rest of the application
COPY . .

# Expose the Vite dev server port
EXPOSE 3010

# Run the dev server and expose to 0.0.0.0 so it's accessible outside the container
CMD ["bun", "run", "dev", "--host"]
