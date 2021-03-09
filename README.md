# Overlook Hotel

## Contributers
* [Steven Mancine](https://github.com/itsnameissteven)

## Table of Contents 

- [About the Project](#about-the-project)
- [Project Goals](#project-goals)
- [Feature](#features)
  - [User Login](#user-login)
  - [Dashboard](#dashboard)
  - [Search](#search)
  - [Cancelling Reservations](#cancelling-reservations)
- [Accessibility](#accessibility)
- [Responsive Design](#responsive-design)
- [Future Considerations](#future-considerations)
- [Technologies Used](#technologies-used)
- [Contact](#contact)

## About The Project
Overlook Hotel is a web app based on a fictional hotel. Users have to ability to view previously booked rooms, and book a room for a future date.   

## Project Goals 
1. Make network requests to API endpoints GET, POST and DELETE data.
2. Create an intuitive design that is easy to navigate.
3. Make the app completely accessible by keyboard.
4. Utilize SASS to implement DRY css.
5. Implement CSS animations.
5. Responsive design for cross screen compatibility.

## Features

### User Login
On page load the user must login. The username is overlook(any number between 1-50) eg. overlook12.
All users log in with password overlook2021.
The overlook API hold data for 50 users.
![login](https://user-images.githubusercontent.com/72312636/110545095-d8533880-80e9-11eb-9421-5315f84882db.gif)

### Dashboard
Upon logging in the user is able to see how many points they have earned and the amount of money they have spent on all bookings.  Users can also view a list of all bookings past and upcoming.
<img width="1439" alt="Screen Shot 2021-03-09 at 2 14 26 PM" src="https://user-images.githubusercontent.com/72312636/110545203-fd47ab80-80e9-11eb-83d8-8afb497a70d2.png">
![your bookings](https://user-images.githubusercontent.com/72312636/110545262-16505c80-80ea-11eb-95fe-3ba4d205df3d.gif)

### Search 
Users have the ability to search and book new hotel rooms utilizing the search bar. All that is needed to perform a search is a future date.  If the user would like to narrow search results they can filter by type, bed size, and amount of rooms.  
![search](https://user-images.githubusercontent.com/72312636/110545434-5283bd00-80ea-11eb-8bc4-f239d61d10cb.gif)

### Canceling Reservations
If a customer would like to cancel upcoming reservations they have the ability to in their 'bookings' section by clicking the 'cancel reservation' button.

## Accessibility
This is fully accessible with the use of a keyboard. Use the tab key to travel to each relevant section. The space bar must be used to check boxes in the search bar.

## Respsonsive Design 
Responsive design was considered for desktop, tablet and mobile view.

![mobile-view](https://user-images.githubusercontent.com/72312636/110545778-d5a51300-80ea-11eb-9f39-e52ba59ca025.gif)

## Future Considerations
* Allow the user to rebook a room from their past history.section. Click a button to see what days the room is available.
* Redesign the search bar for mobile.
* Replace the web API Date picker with a custom date picker for cross browser compatibility. 
* Allow for a manager to log in.
* Build a manager dashboard to display hotel stats and available rooms. 
* Allow managers to book a behalf of customers.

## Technologies Used

- [![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)](https://www.javascript.com/)

- ![HTML5](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)

- ![SASS](https://img.shields.io/badge/SASS%20-hotpink.svg?&style=for-the-badge&logo=SASS&logoColor=white)

- ![Webpack](https://img.shields.io/badge/webpack%20-%238DD6F9.svg?&style=for-the-badge&logo=webpack&logoColor=black)

- ![Mocha](https://img.shields.io/badge/-mocha-%238D6748?&style=for-the-badge&logo=mocha&logoColor=white)

- ![Mocha](https://img.shields.io/badge/node.js%20-%2343853D.svg?&style=for-the-badge&logo=node.js&logoColor=white)

## Contact


[<img src="https://img.shields.io/badge/LinkedIn-steven--mancine-informational?style=for-the-badge&labelColor=black&logo=linkedin&logoColor=0077b5&&color=0FBBD6"/>][linkedin3]
[<img src="https://img.shields.io/badge/Github-itsnameissteven-informational?style=for-the-badge&labelColor=black&logo=github&color=8B0BD5"/>][github3]
<!--Personal Definitions -->
[linkedin3]: https://www.linkedin.com/in/steven-mancine-13509521/
[github3]: https://github.com/itsnameissteven
