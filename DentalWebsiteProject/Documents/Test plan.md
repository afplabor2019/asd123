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
  <td><p>1.1.1</p></td>
  </tr>
</table>

## The purpose of the testing

* Testing is really required to point out the defects and errors that were made during the development phases.
* It’s essential since it makes sure that the customer finds the organization reliable and their satisfaction in the application is maintained.
* It is very important to ensure the quality of the product. quality product delivered to the customers helps in gaining their confidence.
* Testing is necessary in order to provide the facilities to the customers like the delivery of high quality product or software application which requires lower maintenance cost and hence results into more accurate, consistent and reliable results.
* Testing is required for an effective performance of software application or product.
* It’s important to ensure that the application should not result into any failures because it can be very expensive in the future or in the later stages of the development.

## Type of tests

### Unit test
Unit tests refer to testing isolated components, and we only focus on the unit that we are testing. In Angular, unit tests are written in the Jasmine framework, executed by test runner karma and runs in the browser. We run npm test from the package.json, then angular takes the configuration from the angular.json under the test object. The first file it invokes is the test.ts and takes the karma configuration from the karma.conf.js. In these files we can set up which browser we want to use, reporter configuration, which testing framework should be used, etc..  
We want to test our own values and check that our components are working correctly. The aim is to check for single components (unit test) or several modules / components (integration tests) that a single function / small workflow is working correctly as intended without side effects.

### Performance tests
These tests refer to how fast one transaction is. It focusses on the speed of one transaction.  
It is important to note, that  Angular applications are executed on the client's machine, so performance is going to very quite a bit depending on processor, RAM, etc.. We might check how many concurrent users our website can handle without issues, what are the saturation point / first bottleneck, when response time starts increasing or errors start occurring. We consider combining client-side performance tests with conducting the anticipated load into our application as it can be the case that from client perspective rendering is very fast, but server responds slowly causing bad user experience. We might use Selenium Grid to kick off many browser instances, if our devices can handle hardwere load.

### Smoke, Regression, UAT and e2e tests
They are written in jasmine framework, executed by protractor framework and runs in the browser as well as headless.  
After we run npm run e2e from the package.json, Angular takes the configuration from the angular.json under the e2e object. It has two properties protractorConfig, which is the configuration file and devServerTarget, which is the target that we run tests against. So we can have multiple configuration protractor files that execute different test suites. We will add configurations to the e2e object to run other test types, like smoke, uat, e2e, and regression, and we can run these tests with this flag ng e2e -c \<configuration name>. 

#### End-to-End (e2e) tests
In e2e tests, we emulate the real production environment and test the real scenarios. It’s almost similar to full integration tests except for the test data and it is tested with the real production environment.

#### Smoke Tests
Every application has some essential functions or components. These tests ensure that all the vital functions or parts of the application are working correctly before every production release. We can run the smoke tests with command ng e2e -c smoke.

#### Regression tests
These tests refer to the testing issues raised in the application over time. Whenever we get an issue, a unit test is created along with fixing that issue. We run these unit tests as regression tests before every prod release to avoid the same issue happen over and over.

#### User acceptance tests (UAT)
We usually get all the requirements from the end-user before building any application. These tests ensure that the application meets all the requirements from the end-user.

## Conclusion
Since we have several testing types, it’s crucial to configure the application in the right way and use all the latest features from angular. 








