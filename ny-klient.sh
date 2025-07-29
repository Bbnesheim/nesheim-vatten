#!/bin/bash

# Sjekk om klientnavn er gitt
if [ -z "$1" ]; then
  echo "Bruk: ./ny-klient.sh <klientnavn>"
  exit 1
fi

CLIENT_NAME=$1
ROOT_DIR="$(pwd)"
CLIENT_PATH="$ROOT_DIR/clients/$CLIENT_NAME"

echo "🔧 Oppretter klientstruktur for: $CLIENT_NAME"

# 1. Opprett mappestruktur
mkdir -p "$CLIENT_PATH"/{website,assets,docs,notes}

# 2. Opprett ny branch
git checkout -b "$CLIENT_NAME"

# 3. Legg til filene i git
git add "$CLIENT_PATH"

# 4. Commit
git commit -m "Opprettet grunnstruktur for klient: $CLIENT_NAME"

# 5. Push til GitHub (valgfritt)
read -p "Push branch to origin? [y/N] " answer && [ "$answer" = "y" ] && git push origin "$CLIENT_NAME"

echo "✅ Ferdig! Ny branch '$CLIENT_NAME' er pushet med klientstruktur."

