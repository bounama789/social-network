# Use Alpine Linux as base image
# FROM alpine:latest
# Install build dependencies
# RUN apk update && apk add --no-cache build-base
# Use the official Golang image as a base
# FROM golang:1.20
FROM golang:1.18
# Install gcc and other necessary build tools
# RUN apk update && apk add --no-cache gcc
# RUN apt-get update && apt-get install -y gcc
# Set the working directory inside the container
WORKDIR /app
# Copy the Go modules file and download dependencies
# COPY go.mod go.sum ./
# RUN go mod download
# Copy the rest of the application source code
# COPY ./ .
COPY . .
# Set CGO_ENABLED to 1
# ENV CGO_ENABLED=1
# Build the Go application
RUN go build -o main .
# Expose port 8080 to the outside world
EXPOSE 8081
# Command to run the executable
CMD ["./main"]
