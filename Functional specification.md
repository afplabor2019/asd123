# Functional specification
## Current situation
We have already explained the requirement in the specification.
## Desired system
The system is a web application with responsive design, meaning it will work
on computers and phones too. The system is secure and it is accessible only
with correct identification. Personal information is always kept private.
After signing in the teachers can add, modify, or delete questions in the
database. The multiple-choice questions can have one or more correct answers.
The point value of the questions can be set too. The teachers can assemble
their required tests from these questions or generate a test randomly from
the database. In class, they can give access for the students to take the test in the given timeframe. The test results are sent as described in the
requirement specification under the [Reports form the test results](https://github.com/afplabor2019/asd123/blob/master/Requirement%20specification.md#reports-from-the-test-results) paragraph.
## Current business use cases model
![As we can see, the teacher has got a lot of work.](/Images/cd.jpg)
## Required business use cases model
As we can see, the teacher has less tasks, thanks to the system.
![Required business use cases model UML](/Images/funkSpecRequired.png)
## Required functions list
## Use cases
Students and teachers will obviously use the program for different things, just like the headmaster. 
Based on this, the appropriate use cases need to be learned by different users. 
There are different ways to access the program, because students must not access to the same systems as the teachers.

Grouped by users:

Teachers:

-Teachers can log in to the program with their private ID, then they can choose to write the questions by themselves or select them from the database.
-There are a lot of question types and a wide range of settings to accommodate every use case. For examples: multiple choice test questions, free text questions, fill in the blank questions. 
-They can view their students’ grades.

Students:

-Students have to log in to the program, then they have to click on the tests button, then the press start button.
-Test can only be opened at the specified time.
-The order of the questions will be random for everyone.
-They have the opportunity to view the grades from that subject immediately, they know if they passed the test.

Headmaster:

-Headmaster can view the grades for all students and the grades’ average for classes.
-Get warnings from all unsatisfactory grades at the beginning of each month.

## Wireframe
![Picture of the Tests menu](/Images/wireframeTests.png)
The Tests section is where students can find their tests. Access the Tests section through the main navigation. 
## Scenario
First of all, teachers have to log in to the program with their private ID, then create a test and then add questions directly into the Test. Questions are automatically added to the school's database, so they can be used in other Tests as well. Add questions to the school’s database, select questions from the school’s database, or set their test to automatically select questions at random from the school’s database each time it's started. Teachers can adjust the time and number of questions for the test.  
After the lesson has started, students have to log in to the program too, then they have to click on the tests button, then the press start button. The order of the questions will be random for everyone.  
After students finished the test, they have to save and send it. If they don't send it before their time runs out, their answers will automatically ignore and they will get zero points. They will receive emails about their results and they can watch it online too, and the teacher receives statements about all student's results. The graduation will be automatic.  
If some of the students get an unsatisfactory exam, the high school's headmaster will get a report of them.
## Function - requirement compliance
|    Module            |    ID     |    Requirement Name       |    Version    |    Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|----------------------|-----------|---------------------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    Engine            |    F1     |    Quiz generator         |    0.1        |    The program’s engine will be   able to handle 50 questions without any problem or error. The tests will be   available to students to fill and always in random order. After they done it   the program corrects it and shows the results.                                                                                                                                                                                                                                                                |
|    Engine            |    F2     |    Database connection    |    0.1        |    All data will be stored in a   database which will run on a remote server and only the administrator will be   able to change it directly.                                                                                                                                                                                                                                                                                                                                                                |
|    Authentication    |    F3     |    User types             |    0.2        |    The program will differentiate 3   user type. One will be for students with limited rights and only right to   change their password and email address. One for teachers with more rights   and access to the database from the GUI. The last one will be for the   administrator who will have all rights and access to all data in the   database. Also he will be able to add users to the program and change some of   their rights. (e.g.: which students marks will the teachers be able to see)    |
|    Authentication    |    F4     |    Login                  |    0.2        |    From the home page all user will   have the option to log in with an ID and password given to them by the   administrator. All user will have right to change their password after they   logged in but no right to change their name. The program will only have one administrator   at lunch and he will be able to add users.                                                                                                                                                                          |
|    Authentication    |    F5     |    Adding questions       |    0.2        |    Users with at least teacher rights will be able to   add questions to the database from the GUI. Teachers can use questions from   other teachers to generate tests but they won’t have rights to change them,   they can only change what they have added.   Students will be able to see and do all tests, which the teachers allowed   them to see and fill.                                                                                                                                           |
|    Quiz              |    F6     |    Categories             |    0.3        |    Question categories will be   stored in the database and the administrator will be able to add to it if the   teachers request it. By default it will be empty.                                                                                                                                                                                                                                                                                                                                           |
|    Quiz              |    F7     |    Types                  |    0.3        |    The requested types will be   implemented and the teachers can set it when they adding the question.                                                                                                                                                                                                                                                                                                                                                                                                      |
|    Quiz              |    F8     |    Options                |    0.3        |    The teachers will have a page   where they can add/edit questions and one where they can add/edit tests   (choose how many question it contains, who can see it and which questions   will it contains or choose it to be randomly generated)                                                                                                                                                                                                                                                             |
|    Notification      |    F9     |    Exam results           |    0.4        |    When students complete a test   they automatically receive an email which contains the result of the test   they completed. Teachers will have the option to send an excel table to their   email address with the result of a selected test.                                                                                                                                                                                                                                                             |
|    Notification      |    F10    |    Monthly report         |    0.4        |    The headmaster will   automatically receives an excel table with the list of unsatisfactory   students each month. (The administrator can send this manually in case of   system error)                                                                                                                                                                                                                                                                                                                   |
