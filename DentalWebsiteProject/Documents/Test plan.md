# Test Plan

<table>
  <tr>
    <td><b><p>Project Name</p></b></td>
    <td><p>DentalWebsiteProject</p></td>
  </tr>
  <tr>
    <td><b><p>Document ID</p></b></td>
    <td><p>R4V5R</p>
  </tr>
    <td><b><p>Qualification</p></b></td>
  <td><p>Planned</p></td>
  </tr>
  <tr>
    <td><b><p>Document Version</p></b></td>
  <td><p>2.0</p></td>
  </tr>
</table>

## Planned tests

### Unit test
Unit tests are written in the Jasmine framework, executed by test runner karma and runs in the browser automatically in Angular. We run npm test from the package.json, then angular takes the configuration from the angular.json under the test object. The first file it invokes is the test.ts and takes the karma configuration from the karma.conf.js. We want to test our own values and check that our components are working correctly as intended without side effects. If we have failed tests, we will try to fix them, until our all components will work, and their tests will be successful.

### Performance test
These tests focusses on the speed of one transaction. It is important to note, that the website will be running on external server, so performance is going to very quite a bit depending on the test server's specs. We might check how many concurrent users our website can handle without issues, when response time starts increasing or errors start occurring. We will use Selenium to test our program's perfomance.

### e2e test
This test uses Jasmine for its test syntax, executed by protractor framework and runs in the browser as well as headless.  
After we run npm run e2e from the package.json, Angular takes the configuration from the angular.json under the e2e object. It has two properties protractorConfig, which is the configuration file and devServerTarget, which is the target that we run tests against. 

#### User acceptance test (UAT)
We have to get all the requirements and informations from the customer before creating the website. These tests ensure that the website meets all the requirements, design and conception from the end-user. In this test the end-user will check the part of the website and try every functions. This test will be successful, when the customer is totally satisfied with the appearance and the functions of the website.  

## Conclusion
Because we have different testing types, it’s important to configure the application in the right way and use all the latest features from angular. We have to test the most crucial parts of the website, where the risk can be high. It is very important to ensure the quality of the product, because quality product delivered to the customers helps in gaining their confidence and the application should not result into any failures because it can be very expensive in the future or in the later stages of the development.