#!/bin/bash

ROOT_DIR=$(git rev-parse --show-toplevel)

mkdir -p "$ROOT_DIR/docs/brand-assets/logo"
mkdir -p "$ROOT_DIR/docs/brand-assets/colors"
mkdir -p "$ROOT_DIR/docs/brand-assets/templates"
mkdir -p "$ROOT_DIR/docs/service-descriptions"
mkdir -p "$ROOT_DIR/docs/case-studies"
mkdir -p "$ROOT_DIR/docs/marketing-materials"

mkdir -p "$ROOT_DIR/clients/client-01/contracts"
mkdir -p "$ROOT_DIR/clients/client-01/meetings"
mkdir -p "$ROOT_DIR/clients/client-01/strategy"
mkdir -p "$ROOT_DIR/clients/client-01/design"
mkdir -p "$ROOT_DIR/clients/client-01/website"
mkdir -p "$ROOT_DIR/clients/client-01/deliverables"

mkdir -p "$ROOT_DIR/templates"

mkdir -p "$ROOT_DIR/admin/invoices"
mkdir -p "$ROOT_DIR/admin/financials"
mkdir -p "$ROOT_DIR/admin/legal"

touch "$ROOT_DIR/docs/internal-guidelines.md"
touch "$ROOT_DIR/clients/README.md"
touch "$ROOT_DIR/README.md"
touch "$ROOT_DIR/.gitignore"

echo "Proposal Template" > "$ROOT_DIR/templates/proposal-template.md"
echo "Invoice Template" > "$ROOT_DIR/templates/invoice-template.xlsx"
echo "Presentation Template" > "$ROOT_DIR/templates/presentation-template.pptx"
