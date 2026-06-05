#!/bin/bash
# Run this script from your terminal to push the portfolio to GitHub.
# Usage: bash deploy-setup.sh

set -e

PROJECT_DIR="$HOME/Desktop/krutika-portfolio"
GITHUB_USER="kanagant"
REPO_NAME="portfolio"

cd "$PROJECT_DIR"

echo "→ Initializing git repository..."
git init -b main

echo "→ Staging files..."
git add -A

echo "→ Creating initial commit..."
git commit -m "$(cat <<'EOF'
Initial commit: personal portfolio site

Next.js 15 portfolio with ML, AI, and full-stack project showcase.
EOF
)"

echo ""
echo "✓ Git repository ready!"
echo ""
echo "Next steps:"
echo ""
echo "1. Create the GitHub repo:"
echo "   → Go to https://github.com/new"
echo "   → Repository name: portfolio"
echo "   → Set to Public"
echo "   → Do NOT add README, .gitignore, or license"
echo "   → Click 'Create repository'"
echo ""
echo "2. Push your code:"
echo "   git remote add origin https://github.com/${GITHUB_USER}/${REPO_NAME}.git"
echo "   git push -u origin main"
echo ""
echo "3. Deploy on Vercel:"
echo "   → Go to https://vercel.com and sign in with GitHub"
echo "   → Click 'Add New' → 'Project'"
echo "   → Import the 'portfolio' repository"
echo "   → Click 'Deploy'"
echo ""
echo "4. After deploy, update SITE_CONFIG.url in src/data/portfolio.ts"
echo "   with your live Vercel URL (e.g. https://portfolio.vercel.app)"
