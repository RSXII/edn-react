# Use the official Go image as the base image
FROM golang:1.20

# Set the working directory
WORKDIR /app

# Copy the entire project into the container
COPY . .

# Enable Go modules
ENV GO111MODULE=on

# Set the GOPROXY environment variable (optional but recommended)
ENV GOPROXY=https://proxy.golang.org,direct

# Copy the dependencies file to the working directory
COPY go.mod go.sum ./

# Install project dependencies using go mod
RUN go mod download

# Build the Go application
RUN go build -o main

# Expose the port your Go application listens on (if any)
EXPOSE 8080

# Define the command to run your Go application
CMD ["./main"]