# Playwright for windows
## Install node.js & npm
node -v
npm -v
## Create Project Folder
mkdir playwright-ts-project
cd playwright-ts-project
npm init -y
## Install Playwright
npm install -D @playwright/test
## Install Browsers
npx playwright install
## Install Typescript & packages
npm install -D typescript ts-node @types/node
## Initialize playwright with Typescript
npx playwright test --init
## Create TestFolder
   write this code

## Run code
   npx playwright test --ui
