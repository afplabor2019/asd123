# Requirement specification
## Current situation

Currently, if the teacher would like to write a quiz, he needs to prepare. 

* He has to write the questions. 
* He needs to print these.
* After these, he needs to correct the tasks.

This takes a lot of time and it’s circumstantial. He would like to replace the system. We want to help with that. We know that such software already exists, but it's expensive and they don't even know what we would provide.

## Desired system
With the system in place, the school can reduce paper usage, and ease the
teachers' work. The user interface is intuitive and easy to use. The test
questions and the mode of evaluation can be chosen by the teacher. The
students get the test in a randomized order, reducing the risk of cheating.
### Reports from the test results
The system immediately evaluates and grades the test, and sends the result
in an email to the student. Furthermore, the teacher gets a notification
from the whole class's performance. Lastly, the headmaster gets a list of
all the failing grades in each month, helping him to identify the students
who struggle with their studies and need help.
## Required functions list
|    Module            |    ID     |    Name                   |    Version    |    Description                                                                                                                                                                                                                                                                            |
|----------------------|-----------|---------------------------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    Engine            |    F1     |    Quiz generator         |    0.1        |    From questions given to the   program, it must be able to generate a quiz with at least fifteen questions   and make it available for users to fill. For each user, the order of the   questions will be random. After a user completed it the program automatically   corrects it.    |
|    Engine            |    F2     |    Database connection    |    0.1        |    The program has to store data in a database   and get data from it.                                                                                                                                                                                                                    |
|    Authentication    |    F3     |    User types             |    0.2        |    At least two types of users have to be   differentiated with different rights. One is for students, the other for   teachers.                                                                                                                                                          |
|    Authentication    |    F4     |    Login                  |    0.2        |    Both students and teachers can log in with   their ID and a password that they can change once they logged in.                                                                                                                                                                         |
|    Authentication    |    F5     |    Adding questions       |    0.2        |    The teachers can define questions and create quiz   from those questions which the students can do.                                                                                                                                                                                    |
|    Quiz              |    F6     |    Categories             |    0.3        |    At least 3 categories for the   questions has to be available. (History, grammar, geography)                                                                                                                                                                                           |
|    Quiz              |    F7     |    Types                  |    0.3        |    Questions at least have 3 types.   One where students can choose one option, one where they can choose multiple   and one where they can answer with one word.                                                                                                                         |
|    Quiz              |    F8     |    Options                |    0.3        |    Teachers can choose how many   questions a test has. They can generate that test or choose which questions   should it contain. They can also set how many points can be given for a   question.                                                                                       |
|    Notification      |    F9     |    Exam results           |    0.4        |    Students are notified by their   results via email. Teachers receive an excel table with all the students’   results who have done their test.                                                                                                                                         |
|    Notification      |    F10    |    Monthly report         |    0.4        |    The headmaster receives every   month an email that contains a list of students whose results were   unsatisfactory.                                                                                                                                                                   |
