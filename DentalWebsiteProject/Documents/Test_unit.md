# Unit test

We don't write unit test we are using the angular "ng test". We modified the config file (karma.conf.js) to test in the browser we want to use. And we turn off the auto test restart when we modified the program, we would like to run the test manually.

After we are run the test we have a 12 failures.
6 "should create null injection" error 
[kép/fail1]
and 6 "template parse error" 
[kép/fail2]
before we added the admin page login component.

The solution for the should create null injection problems is import HttpClientModule to component's spec.ts file.
[kép/solution1]

And the solution for the template parse error import all components to the navbar.component.spec.ts.
[kép/solution2]

After we add the login component we have an another problem.
The test requires a name and the password to sign in before it can continue the testing.
[kép/solution3]

After that the test run we got again the null injection error.
So we import the HttpClientModule.
[kép/solution4]
