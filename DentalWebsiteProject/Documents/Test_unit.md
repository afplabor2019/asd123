# Unit test

We don't write unit test we are using the angular `ng test`. We modified the config file (karma.conf.js) to test in the browser we want to use. And we turn off the auto test restart when we modified the program, we would like to run the test manually.

After we are run the test we have a 12 failures.
6 "should create null injection" error 
![fail1](https://github.com/afplabor2019/asd123/blob/master/DentalWebsiteProject/Images/fail1.png)
and 6 "template parse error" 
![fail2](https://github.com/afplabor2019/asd123/blob/master/DentalWebsiteProject/Images/fail2.png)
before we added the admin page login component.

The solution for the should create null injection problems is import HttpClientModule to component's spec.ts file.
![solution1](https://github.com/afplabor2019/asd123/blob/master/DentalWebsiteProject/Images/solution1.png)

And the solution for the template parse errors are to import all components to the navbar.component.spec.ts.
![solution2](https://github.com/afplabor2019/asd123/blob/master/DentalWebsiteProject/Images/solution2.png)

After we add the login component we have an another problem.
The test requires a name and the password to sign in before it can continue the testing.
![solution3](https://github.com/afplabor2019/asd123/blob/master/DentalWebsiteProject/Images/solution3.png)

After running the test we again got the null injection error.
So we import the HttpClientModule.
![solution4](https://github.com/afplabor2019/asd123/blob/master/DentalWebsiteProject/Images/solution4.png)
