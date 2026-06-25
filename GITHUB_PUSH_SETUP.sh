#!/bin/bash

# 📦 Portfolio Push Setup Script
# This script prepares everything for pushing to GitHub

echo "🚀 Portfolio Push Setup"
echo "======================="
echo ""
echo "Your portfolio is ready with 2 new commits:"
git log --oneline -2
echo ""
echo "To push to GitHub, use one of these commands:"
echo ""
echo "1️⃣  With Personal Access Token (replace TOKEN):"
echo "   git push https://Mekarthiakhi:TOKEN@github.com/Mekarthiakhi/my-portfolio.git main"
echo ""
echo "2️⃣  With SSH (if configured):"
echo "   git remote set-url origin git@github.com:Mekarthiakhi/my-portfolio.git"
echo "   git push -u origin main"
echo ""
echo "3️⃣  With GitHub CLI:"
echo "   gh auth login"
echo "   git push origin main"
echo ""
echo "📋 Status:"
git remote -v
echo ""
echo "✅ All commits are ready. Just authenticate and push!"
