# Functional specification 
## Current situation
We have already explained it in the [requirement specification](Requirement%20specification.md#current-situation).
## Desired system 
The system is a web application with responsive design, meaning it will work on computers and phones too. On every page, there is a navigation bar. On the landing page, there is a slideshow with pictures of some products the site offers. It circles through the elements automatically, but the user can choose the displayed slide manually too. On the bottom of the landing page, there are the logos of the partner companies.  
On the about us page, the users can find a description of the company and information about the dental staff.  
The products page contains all of the products that are available for purchase. These can be sorted by categories. For each product, a short description and a picture are displayed.  
There is a page where the pictures of previous works can be found.  
On another page, users can find all of the contact information about the company. This page displays the email address, telephone, location, and a price request form. The location is displayed on a map. On the price request form, users can add their email address, and write a message for the manager, asking for a price list.  
Lastly, there is an admin page, where the manager can change the database. This can only be accessible for the manager.  
## Current business use cases model
As we can see, the dental technician laboratory only reach trought the doctor.
![Current business use cases model](https://github.com/afplabor2019/asd123/blob/master/DentalWebsiteProject/Images/func_spec_CurrentBusinessModell.png)
## Required business use cases model 
![Required business use cases model UML](https://github.com/afplabor2019/asd123/blob/master/DentalWebsiteProject/Images/funcSpecRequiredUML.png)
## Required functions list
We have already explained it in the [requirement specification](Requirement%20specification.md#required-functions-list).
## Use cases
We can distinguish two different users in terms of using this website,
because you need a person who maintains and manages the website, which is the job of a trusted person over
and above, the so-called normal user should be given opportunities to use the website.

For the sake of transparency, the website maintenance is called <b>Manager</b>, and the visitors to the Web site are called <b>User</b>.

Grouped by users:

<b>User:</b>

<ul>
  <li>The user has the option of requesting a price list which includes the fees for the different jobs.</li>
  <li>Also, the user is free to browse the content displayed on the website.</li>
</ul>

<b>Manager:</b>

<ul>
<li>Only the Manager has access to the database, which allows further operations.</li>
<li>The Manager can change or replace any of the products displayed on the website or even the provided information by the staff.</li>
<li>In addition, you have the exclusive right to change any previous work posted on the Website.</li>
<li>Sending price lists requested by users also extends the opportunities of the Manager.</li>
</ul>

## Wireframe
+ Wireframe of the full website:
![Fullwebsite](https://github.com/afplabor2019/asd123/blob/master/DentalWebsiteProject/Images/wireframeOftheWebsite.png)
## Scenario
There is a website with five pages and each one serves a different purpose.  
First, when users open the website, the home page is the landing page, where they can see what they can find and do on the website. Users can reach the page with the <b>Home</b> button too. There is the company's name, logo, some pictures, and supporters' logos.  
The second button in the navigation bar takes the users to the <b>About</b> page, which contains a short description of the company and a list of the colleagues which can change dynamically according to the database.  
The third one takes the users to the <b>Product</b> page, which contains all of the company's products sorted by categories. This page also can change dynamically according to the database.  
The fourth one takes the users to the <b>Our works</b> page, which contains the company's completed works with a short description and for each work a gallery of photos. This is also dynamic and gets data from the database.  
The fifth one takes the user to the <b>Contact</b> page, where they can ask for prices via email of the products and find information about the email addresses, telephone numbers, and the company location. Price request is a form on the contact page where users can type in their email address and choose which product they interested in. The server sends an email to the user given address and also to the manager's email that a price request has been made.  
There is a <b>database</b>, where the webpage can get data for products, previous works and colleagues from, and an <b>admin page</b> from which the database is accessible with the proper rights and any relevant data stored in it can be changed from this page in a user-friendly way. The database and the admin page remain hidden to the visitors.  

## Function - requirement compliance
|    Module                  |    ID     |    Name                         |    Description                                                                                                                                                                                                                                                                   |
|----------------------------|-----------|---------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|    Backend                 |    F1     |    Database                     |    We will store   the required data in a mongoDB database, it will be accessible through an API   and shown in the site.                                                                                                                                                        |
|    Backend                 |    F2     |    Admin page                   |    We will create a   page which is accessible with the proper authentication. Each data structure   stored in the database will be listed in a different tab from where the admin   will be able to add, delete, update them.                                                   |
|    Backend                 |    F3     |    Newsletter   formatter       |    In the admin   page we will create a tab where the admin can type in the content of the   newsletter, see a preview of the letter that will be sent and send it to the   subscribed email addresses.                                                                          |
|    Frontend GUI            |    F4     |    Home page                    |    We propose to   create the website as a single page site with all the following pages included   in it. The home section would contain the navbar and the showcase with the   company’s logo name and motto.                                                                  |
|    Frontend GUI            |    F5     |    About page                   |    Continuing the   concept proposed in F4 this page would follow the showcase as a section which   would contain the company’s description and the list of employees working   there.                                                                                           |
|    Frontend GUI            |    F6     |    Product page                 |    Considering the amount   of products this will be on a different page where all products will be   listed sorted by category.                                                                                                                                                 |
|    Frontend GUI            |    F7     |    Our works page               |    Continuing the   concept proposed in F4 this page would follow the about section and display   the images in a gallery which size can change accordingly to the database.                                                                                                     |
|    Frontend GUI            |    F8     |    Contact page                 |    Continuing the   concept proposed in F4 this page would be at the bottom of the page before   the footer and contain all contact requested.                                                                                                                                   |
|    Frontend   Functions    |    F9     |    Price request                |    We will implement   the newsletter form as a popup form witch always stays at the bottom right   corner of the viewport so it is always visible and accessible. It will   contain the requested fields and the server will process the data sent.                             |
|    Frontend   Functions    |    F10    |    Newsletter   Subscription    |    We will implement   the newsletter form as a popup form witch always stays at the bottom right   corner of the viewport so it is always visible and accessible. It will send   the given email address to the server which will add it to the list of subscribed   emails.    |
