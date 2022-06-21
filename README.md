# JEST - UnitTest in Angular
 
Jest is a delightful JavaScript Testing Framework with a focus on simplicity.
https://www.youtube.com/watch?v=31or_m_xAA0

It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.3.

## Zero config
Jest aims to work out of the box, config free, on most JavaScript projects.

## Snapshots
Make tests which keep track of large objects with ease. Snapshots live either alongside your tests, or embedded inline.

## Isolated
Tests are parallelized by running them in their own processes to maximize performance.

## Great api
From it to expect - Jest has the entire toolkit in one place. Well documented, well maintained, well good.

## Fast and safe

By ensuring your tests have unique global state, Jest can reliably run tests in parallel. To make things quick, Jest runs previously failed tests first and re-organizes runs based on how long test files take.

## Code coverage

Generate code coverage by adding the flag --coverage. No additional setup needed. Jest can collect code coverage information from entire projects, including untested files.

## Easy mocking

Jest uses a custom resolver for imports in your tests, making it simple to mock any object outside of your test’s scope. You can use mocked imports with the rich Mock Functions API to spy on function calls with readable test syntax.

Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase. It allows you to write tests with an approachable, familiar and feature-rich API that gives you results quickly.

Jest is well-documented, requires little configuration and can be extended to match your requirements.

Jest makes testing delightful.

## Steps to configure Jest in angular project

Step 1: Uninstall all karma jasmine packages
sudo npm uninstall @types/jasmine jasmine-core karma karma-chrome-launcher karma-coverage karma-jasmine karma-jasmine-html-reporter
Step 2: Remove test object from angular.json
Step 3: Delete karma.conf.js file and test.ts file
Step 4: sudo npm i jest @types/jest jest-preset-angular
Step 5: Create setup.jest.ts file
Step 6: Update tsconfig.spec.json file
Step 7: Add jest configuration in package.json
Step 8: Add scripts in package.json to run JEST