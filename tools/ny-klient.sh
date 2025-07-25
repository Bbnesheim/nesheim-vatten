#!/usr/bin/env bash
#
# ny-klient.sh <klientnavn>
#
# Lager standard klientmappestruktur under clients/<klientnavn>/,
# oppretter (eller bytter til) en git-branch med samme navn,
# committer og pusher til origin.
#
# Eksempel:
#   ./ny-klient.sh baattilsyn
#
# Valgfrie flagg:
#   -f  Force ny branch (slett lokal branch hvis den finnes)
#   -n  Dry run (vis hva som ville blitt gjort)
#

set -euo pipefail

FORCE=0
DRYRUN=0

usage () {
  echo "Bruk: $0 [-f] [-n] <klientnavn>"
  exit 1
}

# --- parse args ---
while getopts ":fn" opt; do
  case "$opt" in
    f) FORCE=1 ;;
    n) DRYRUN=1 ;;
    *) usage ;;
  esac
done
shift $((OPTIND -1))

if [[ $# -ne 1 ]]; then
  usage
fi

CLIENT="$1"

# --- sanity: in git repo? ---
if ! REPO_ROOT=$(git rev-parse --show-toplevel 2>/dev/null); then
  echo "ERROR: Du står ikke i et Git-repo. Gå til prosjektroten først."
  exit 1
fi

cd "$REPO_ROOT"

CLIENT_DIR="clients/$CLIENT"
SUBDIRS=(website assets docs notes)

echo "➕ Klient: $CLIENT"
echo "📁 Mappe: $CLIENT_DIR"
echo "🌿 Branch: $CLIENT"

# --- create dirs ---
for d in "${SUBDIRS[@]}"; do
  CMD="mkdir -p \"$CLIENT_DIR/$d\""
  if [[ $DRYRUN -eq 1 ]]; then
    echo "[dryrun] $CMD"
  else
    eval "$CMD"
  fi
done

# legg inn en enkel README om den ikke finnes
README_PATH="$CLIENT_DIR/README.md"
if [[ ! -f "$README_PATH" ]]; then
  if [[ $DRYRUN -eq 1 ]]; then
    echo "[dryrun] echo '# $CLIENT' > \"$README_PATH\""
  else
    echo "# $CLIENT" > "$README_PATH"
    echo "" >> "$README_PATH"
    echo "Standard klientstruktur opprettet $(date '+%Y-%m-%d')." >> "$README_PATH"
  fi
fi

# --- branch handling ---
if git show-ref --verify --quiet "refs/heads/$CLIENT"; then
  if [[ $FORCE -eq 1 ]]; then
    echo "⚠️  Lokal branch '$CLIENT' finnes – sletter (force)."
    if [[ $DRYRUN -eq 1 ]]; then
      echo "[dryrun] git branch -D $CLIENT"
    else
      git branch -D "$CLIENT"
    fi
    # fall through to create new
  else
    echo "🔁 Bytter til eksisterende branch '$CLIENT'."
    if [[ $DRYRUN -eq 1 ]]; then
      echo "[dryrun] git checkout $CLIENT"
    else
      git checkout "$CLIENT"
    fi
    BRANCH_EXISTS_LOCALLY=1
  fi
fi

if [[ "${BRANCH_EXISTS_LOCALLY:-0}" -eq 0 ]]; then
  echo "🌱 Oppretter ny branch '$CLIENT'."
  if [[ $DRYRUN -eq 1 ]]; then
    echo "[dryrun] git checkout -b $CLIENT"
  else
    git checkout -b "$CLIENT"
  fi
fi

# --- stage + commit ---
echo "➕ Legger til $CLIENT_DIR i git."
if [[ $DRYRUN -eq 1 ]]; then
  echo "[dryrun] git add $CLIENT_DIR"
else
  git add "$CLIENT_DIR"
fi

COMMIT_MSG="Opprettet grunnstruktur for klient: $CLIENT"
if [[ $DRYRUN -eq 1 ]]; then
  echo "[dryrun] git commit -m \"$COMMIT_MSG\" || echo '[dryrun] Ingen endringer å committe'"
else
  if ! git commit -m "$COMMIT_MSG"; then
    echo "⚠️ Ingen nye endringer å committe (kan være identiske filer)."
  fi
fi

# --- push ---
echo "🚀 Pusher branch '$CLIENT' til origin."
if [[ $DRYRUN -eq 1 ]]; then
  echo "[dryrun] git push -u origin $CLIENT"
else
  git push -u origin "$CLIENT"
fi

echo "✅ Ferdig! Klient '$CLIENT' er opprettet og branch er pushet."
#!/bin/bash

if [ -z "$1" ]; then
  echo "Usage: $0 <client-name>"
  exit 1
fi

CLIENT_DIR="clients/$1"
mkdir -p "$CLIENT_DIR"/{contracts,deliverables,design,meetings,strategy,website}
touch "$CLIENT_DIR/README.md"
echo "Created new client directory structure at $CLIENT_DIR"