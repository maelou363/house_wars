# Welcome to House Wars

---

## Code Institute: Milestone Project 2

<p align="center">
    <img src="" alt="website mockup on different devices">
</p>

---
## Table of Contents: 

- [What does it do and what does it need to fulfill?](#what-does-it-do-and-what-does-it-need-to-fulfill)
- [User Experience](#user-experience)
  - [User Stories](#user-stories)
  - [Design](#design)
    - [1. Font](#1-font)
    - [2. Color Scheme](#2-color-scheme)
    - [3. Logo](#3-logo)
    - [4. Wireframing & Proposed/Implemented Functionality per Page](#4-wireframing--proposedimplemented-functionality-per-page)
- [Technology Used](#technology-used)
- [Database](#database)
- [Features](#features)
  - [Future Features](#future-features)
- [Testing](#testing)
  - [Found Bugs & Fixes](#found-bugs--fixes)
- [Deployment](#deployment)
- [Credits](#credits)
  - [Special Thanks & Acknowledgements](#special-thanks--acknowledgements)

---

## What does it do and what does it need to fulfill?

The goal of House Wars is to create a calculator that won't ask a bunch of unnecessary questions just to get an idea of how much you can borrow and what the required deposit would be. As I begin my house hunting the oppressive reality of the Dublin housing market has made me want to create this. Just one less thing to enter to check what our buying power is. There are plenty of calculators out there but they ask so many questions like your date of birth, how many children you have etc. etc. For house searches just wanting to get a rough idea on how much they could potentially borrow with their income and the deposit House Wars is created with this need in mind.

House wars is created with mobile first in mind. You'll be able to quickly enter in your income and get a result on how much you can borrow along with the potentially deposit you'll have to come up with which gives your total buying power.

It is a clean design that is streamlined and to the point. A one page calculator where you can enter your basic details to get that rough mortgage buying power saving the user time and giving them the information quickly.

This is my second of four Milestone Projects that are a part of the Full Stack Web Development Program at The Code Insitute. That requirements were to make a responsive application using HTML, CSS and Javascript.

[Click here to view the project live](https://maelou363.github.io/house_wars)

# User Experience:

## Main Objectives

* To create a seemless experience for the user. Created with mobile first in mind as majority of users will be 'on-the-go' when they are simply curious if they could afford a certain house or perhaps if their financial position changes. 
* Allow user to quickly be able to see results with just one click.
* To allow user to save results so they don't have to continually go back to remember what the results were.
* To create a design that is responsive on all devices and screen sizes but with mobile first thinking.


## User Stories:

_User:_
* As a user I want to be able to click once to see what my borrowing and buying power is.
* As a user I'd like to be able to save the results so I don't have to continue to go back and remember what the results were.
* As a user I would like to send the results to myself or a family member.



# Design

* I'm designing this with mobile first in mind. Which brings some things into play. So I when the user lands on the page they can access everything (no scrolling) to the income, expense, calculate and reset mobile in one spot. I want to design it to be visually clean and free from any impediences. 
* I want this to be a clean design. Visually appealing and the call to action obvious on what they need to do at each step.
* The design to be a smooth transition to the calculate and view results. With that in mind I implemented a few things like commas in the input and results so users can visually see what they are entering better, automatically entering 'O' for total debt/major expenses and making input fields numbers so when on mobile there is no need to for that extra click to make that change to the number keyboard.
* 

### 1. Font
- Headings - <a href="https://fonts.google.com/specimen/Oswald?preview.text_type=custom">Oswald</a>
- Body - <a href="https://fonts.google.com/specimen/Poppins?preview.text_type=custom">Poppins</a>

### 2. Color Scheme

Our color scheme was created to create a little bit of colour but muted colour scheme around the photos and portfolio work to really give the photos the opportunity to shine and showcase companies work.

- ![#3A3A44](https://placehold.it/15/7FB8C7/000000?text=+) `#3A3A44` - Primary color
- ![#C08E31](https://placehold.it/15/D5977D/000000?text=+) `#C08E31` - Secondary color
- ![#D6D9E1](https://placehold.it/15/F7DED3/000000?text=+) `#D6D9E1` - Supplementary color

### 3. Logo

<p align="center">
    <img src="assets/images/housing_logo.png" alt="logo of house wars calculator">
</p>

## 4. Wireframing & Proposed/Implemented Functionality per Page

Wireframes for this project were created using Affinity Design and Sketch for both mobile and desktop. Each element was structurally planned out before building the project to be sure all elements were accounted for and worked together.

<summary>Wireframes</summary>

<p align="center">
    <img src="assets/images/wireframes.jpg" alt="house wars wireframes">
</p>

[Back to Top](#table-of-contents)

# Technology Used

## Languages, Frameworks, Editors & Version Control:

* HTML/CSS ~ core languages used to build this site.
* Bootstrap Framework ~ Pure CSS Component Frontend framework for layout and overall fronend architecture.
* VSCode/Gitpod ~ preferred used editors/IDEs to develop the project.
* Git ~ installed on local machines or default built into Gitpod.
* Github ~ used to host the repository and version control the site, aswell as used for deployment of the project.

## Tools Used:

* [W3C Markup Validation Service](https://validator.w3.org/) - Used to check the validity and efficiency of the code base.
* [Font Awesome](https://fontawesome.com/) - For iconography not custom to the site.
* Sketch - Used to create the wireframes.
* [TinyPNG](tinypng.com) - Used to compress images used throughout the site without affecting image integrity/quality.
* [W3C Schools](https://www.w3schools.com/) - Used several times whislt building the project and used code snippet for the contact.html form section
* [CSSScript.com](https://www.cssscript.com/create-responsive-tabs-component-using-css-radio-input/) - Used for our dynamic tabs on index.html



# Features

[Back to Top](#table-of-contents)

#### Future Features:

* I'd like to create a future feature where once established how much you can borrow to bring up properties within that price range. 
* To create a feature that allows First Time Homebuyers to click so it calculates a 10% down deposit.


# Testing

* 
* 
* 


## Testing Responsiveness
Manually tested the live project using google developer tools to view the project on different screen sizes. 
Used multiple devices and feedback from family who went to the deployed site on their devices.


## Found Bugs & Fixes:
* When hitting the reset button it does not clear the results - only clears the inputs entered.
* Adding commas to the input fields created a problem with our calculations. We ended up having to remove the type="number" from the input field to work with our Jquery but then was concerned from a UI standpoint that they would have to click another time to access the proper number keyboard. Our work around was type="tel" that allowed the calculations to properly calculate but still worked with our function.
*  When not entering values in input field you will be alerted to add values. When this happens it resets the results section which would show previous calculations or a blank result section. Fixed bug by making sure it hides the result section upon this alert.
* In Share Results form after clicking to close and reset to recalculate the UI 'message sent' does not reset
* 

[Back to Top](#table-of-contents)

# Deployment

This website was developed in multiple editors, Gitpod and vsCode, and version controlling was utilised via local (git) and online (github) repository technologies.

Deploying this application was achieved through Github pages by:

* Selecting the Repository from my list in the Github Dashboard.
* Navigating to "Settings" and to the "Github Pages" section.
* From the "Source" section, click on the dropdown and select "main" branch from the associated list.
* Once "main" branch is selected, the page will auto-refresh and navigate the user to the top of the page with a visual ribbon display detailing, "Github pages source saved", indicating the success of the deployment.
* The link to the website can then be found under the "Github Pages" section, with a ribbon notification stating:
    "Your site is published at "https://<username>.github.io/<repo-name>/"


To clone the website:

Select the Repository from the Github Dashboard.
* Click on the "Clone or download" green button located above and to the right of the "Add file" button.
* Click on the "clipboard icon" to the right of the Git URL to copy the web URL of the Clone.
* Open your preferred editor/IDE and navigate to the terminal window.
* Type `git clone <paste-clone-url-here>` and press "Enter/Return" on your keyboard.
* This will create a clone of the project for you.


## Credits / Acknowledgements

# Content / Media
*

# Acknowledgements
Thank you to everyone who have helped with support, inspiration and guidance at different stages of the project. 



[Back to Top](#table-of-contents)# house_wars
