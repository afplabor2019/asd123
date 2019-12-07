# Test Plan

<table>
  <tr>
    <td><b><p>Document ID</p></b></td>
    <td><b><p>R4V5R</p></b>
  </tr>
    <td><b><p>Qualification</p></b></td>
  <td><p>Approved</p></td>
  </tr>
  <tr>
    <td><b><p>Version number</p></b></td>
  <td><p>1.0.0</p></td>
  </tr>
  <tr>
    <td><b><p>Name of the project</p></b></td>
  <td><p>DentalWebsiteProject</p></td>
  </tr>
</table>

##Tests

### Unit test
Unit tests refer to testing isolated components, and we only focus on the unit that we are testing. In Angular, unit tests are written in the Jasmine framework, executed by test runner karma and runs in the browser. We run npm test from the package.json, then angular takes the configuration from the angular.json under the test object. The first file it invokes is the test.ts and takes the karma configuration from the karma.conf.js. In these files we can set up which browser we want to use, reporter configuration, which testing framework should be used, etc..  
We want to test our own values and check that our components are working correctly. The aim is to check for single components (unit test) or several modules / components (integration tests) that a single function / small workflow is working correctly as intended without side effects.

### Performance tests
These tests refer to how fast one transaction is. It focusses on the speed of one transaction.  
It is important to note, that  Angular applications are executed on the client's machine,so performance is going to very quite a bit depending on processor, RAM, etc. we might check how many concurrent users you application can handle without issues, what are the saturation point / first bottleneck, when response time starts increasing or errors start occurring. We consider combining client-side performance tests with conducting the anticipated load into our application as it can be the case that from client perspective rendering is very fast but server responds slowly causing bad user experience. We might use Selenium Grid to kick off many browser instances, if our devices can handle hardwere load.

### Smoke, Regression, UAT and e2e tests
They are written in jasmine framework, executed by protractor framework and runs in the browser as well as headless.  
After we run npm run e2e from the package.json, Angular takes the configuration from the angular.json under the e2e object. It has two properties protractorConfig, which is the configuration file and devServerTarget, which is the target that we run tests against. So we can have multiple configuration protractor files that execute different test suites. We will add configurations to the e2e object to run other test types, like smoke, uat, e2e, and regression, and we can run these tests with this flag ng e2e -c <configuration name>. 

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








