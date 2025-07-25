#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: $0 <client-name>"
  exit 1
fi

CLIENT_DIR="clients/$1"
mkdir -p "$CLIENT_DIR"/{contracts,deliverables,design,meetings,strategy,website}
touch "$CLIENT_DIR/README.md"
echo "Created new client directory structure at $CLIENT_DIR"
