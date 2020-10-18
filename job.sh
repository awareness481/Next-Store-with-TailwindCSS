#!/bin/bash

set -euxo pipefail

npm install
npm run build
npm start

export CHROME_PATH=$(which google-chrome-stable)
export LHCI_BUILD_CONTEXT__EXTERNAL_BUILD_URL="$BUILD_URL"

npm install -g @lhci/cli@0.4.x
lhci autorun
