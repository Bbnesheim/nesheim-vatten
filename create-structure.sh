#!/bin/bash

mkdir -p nesheim-vatten/docs/brand-assets/logo
mkdir -p nesheim-vatten/docs/brand-assets/colors
mkdir -p nesheim-vatten/docs/brand-assets/templates
mkdir -p nesheim-vatten/docs/service-descriptions
mkdir -p nesheim-vatten/docs/case-studies
mkdir -p nesheim-vatten/docs/marketing-materials

mkdir -p nesheim-vatten/clients/client-01/contracts
mkdir -p nesheim-vatten/clients/client-01/meetings
mkdir -p nesheim-vatten/clients/client-01/strategy
mkdir -p nesheim-vatten/clients/client-01/design
mkdir -p nesheim-vatten/clients/client-01/website
mkdir -p nesheim-vatten/clients/client-01/deliverables

mkdir -p nesheim-vatten/templates

mkdir -p nesheim-vatten/admin/invoices
mkdir -p nesheim-vatten/admin/financials
mkdir -p nesheim-vatten/admin/legal

touch nesheim-vatten/docs/internal-guidelines.md
touch nesheim-vatten/clients/README.md
touch nesheim-vatten/README.md
touch nesheim-vatten/.gitignore

echo "Proposal Template" > nesheim-vatten/templates/proposal-template.md
echo "Invoice Template" > nesheim-vatten/templates/invoice-template.xlsx
echo "Presentation Template" > nesheim-vatten/templates/presentation-template.pptx
