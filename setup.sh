#!/bin/bash
# setup.sh - Agent Blueprint Initializer

echo "🤖 Initializing Agentic Workspace..."

# Ensure we are in the root of the repo
ROOT_DIR=$(pwd)

echo ""
echo "Please enter your Gemini API Key for the autonomous agents:"
read -s GEMINI_KEY

echo ""
echo "Creating daemon/.env configuration..."
cat << EOF > "$ROOT_DIR/daemon/.env"
GEMINI_API_KEY=$GEMINI_KEY
PROJECT_ROOT=$ROOT_DIR
EOF

echo ""
echo "Generating daemon/daemon.config.json..."
cat << EOF > "$ROOT_DIR/daemon/daemon.config.json"
{
  "buildCommand": "npm run build",
  "testCommand": "npm test",
  "packageManager": "npm",
  "autoPush": true
}
EOF

# Install daemon dependencies
if command -v npm &> /dev/null; then
    echo ""
    echo "Installing daemon dependencies..."
    cd "$ROOT_DIR/daemon"
    npm init -y > /dev/null
    npm install dotenv > /dev/null
    cd "$ROOT_DIR"
fi

echo ""
echo "✅ Workspace Initialized!"
echo "To start the background watcher, run: cd daemon && node watcher.js"
