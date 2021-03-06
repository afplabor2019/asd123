# System plan

## Project plan:
### Project roles and their responsibilities
#### Project Manager
* Who the project manager is:  
   * The project manager plays a primary role in the project, and responsible for planning, organizing, managing, controlling and communicating on all phases of a project. The goal is to complete the project successfully.
* What the project manager does:  
   * The manager’s job is to ensure that the project proceeds within the specified time frame and under the established budget, while achieving its objectives. The project manager makes sure that projects are given sufficient resources, while managing relationships with contributors and stakeholders, and develops the Project Plan with the team and manages the team's performance of project tasks.
   * Responsible for communication, including status reporting, risk management, escalation of issues that cannot be resolved in the team.
   * Responsible for ongoing status reporting, including project health and tracking the financials of the project.
   * Responsible for overall management of the customer relationships and for closing the project in a controlled manner, and obtaining customer sign-off for the project closure document to formally close the project.

#### Project Team Member
* Who the project team is:  
   * A project team includes a diverse combination of people and skills who have the responsibility of performing the project tasks assigned to them, in order to meet the project goals. Project team members are the individuals who actively work on one or more phases of the project. Team member roles can vary according to each project.
* What the project team does:  
   * Assist the project manager in planning work packages, creating schedules and cost estimates.
   * Responsible for completing assigned work on the project during the execute phase. This may include design, build, testing against requirements, operational assessment and implementation activities.
   * Identify risks and opportunities throughout the project, and may help in formulating the appropriate responses to these.
   * Actively participate in project team meetings and promptly communicate issues to the project manager.

#### Project Stakeholders
* Who the project stakeholder is:  
   * Any individual whose interests may be affected as a result of project execution or project completion. 
* What the project stakeholder does:  
   * Provides information, as needed, to insure that the project stays on track and meets the intended goals and deliverables.

### Shedule:
[![Shedule](https://github.com/afplabor2019/asd123/blob/master/DentalWebsiteProject/Images/Shedule.png)](https://github.com/afplabor2019/asd123/blob/master/DentalWebsiteProject/Documents/Schedule.xlsx)

## Business process model:
There are two type of business actors in our system: the user, and the manager. The user can request a price list and read the informations on the website. The manager can send the requested price list to the user and change the database on the admin page. With this change, the manager can customise the displayed information on the website, so it has up to date, accurate data all the time.
![Required business use cases model UML](https://github.com/afplabor2019/asd123/blob/master/DentalWebsiteProject/Images/funcSpecRequiredUML.png)

# Requirements:
For a minimal viable product we have to implement all the functions on the requried functions list, whitch can be seen here: [Required business use cases model UML](https://github.com/afplabor2019/asd123/blob/master/DentalWebsiteProject/Documents/Requirement%20specification.md#required-functions-list)

## Functional plan:
 * ### System actors and use cases:
We distinguish between User and Manager in the system.
These roles detailed description and options for each role
can be found in the functional specification, which is also 
available at the [functional specification](Functional%20specification.md#Use-cases).
 * ### Wireframes:
In the functional specification, we have already discussed the [Wireframes](https://github.com/afplabor2019/asd123/blob/master/DentalWebsiteProject/Documents/Functional%20specification.md#wireframes) of the websites' look, so you can check them there.

## Physical environment:
We are going to be buy domain and web-hosting from nethely.hu.
They provide the fastest SSD storage and we only need to do is implement our application into theirs servers.

## Architectural plan:
We plan to implement this website as a 3-layered application consisting of the following:
*	Database: A mongoDB database that stores data for the web page. It is only accessible throught the API.
*	Rest API: Allows access to the data stored in the database. It implements the CRUD operation to all tables. It protects most method with a token system.
* Client:
   * User: Website where the user can view information about the company. It gets data from the API.
   * Admin: Website for the admin to access and change all data stored in the database. It is also done throught the API.
## Database plan:
![Database logical plan](https://github.com/afplabor2019/asd123/blob/master/DentalWebsiteProject/Images/Logical.png)
















