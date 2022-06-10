# playwright
1. npm i 

2. npm init

3. npm i -D @playwright/test

4. npx playwright test



# XUnit Viewer Package

npm i --save-dev xunit-viewer



# Allure Report with Playwright

npm i -D allure-commandline

npm i -D experimental-allure-playwright


npx playwright test --reporter=line,experimental-allure-playwright

npx allure generate ./allure-results --clean

npx allure open ./allure-report

https://medium.com/geekculture/how-to-generate-html-report-in-playwright-f9ec9b82427a

https://elaichenkov.medium.com/allure-report-integration-with-playwright-8c1570c67dda

https://github.com/sskorol/ts-test-decorators
