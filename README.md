# Fantasy Super League

Fantasy Super League is our BNTA capstone project. It is a web app that casts you in the role of a Fantasy manager. You are given the task to pick a squad of real-life players who score points for your team based on their performances in their own (real) matches.

You score points by: number of goals scored, assists, clean sheets, appearances.
You lose points for: red/yellow cards.

Our application uses Java, Spring Boot and PostgreSQL for the server-side. For the client-side, this application uses HTML, CSS, Bootstrap, JavaScript and React. To fetch the real-world player data, we used the following API: https://rapidapi.com/api-sports/api/api-football/.

Slide deck: https://docs.google.com/presentation/d/18ryvr4EKlLPjj51dbxLDvrx-BNp_73CH1JSWY_l8hTc/edit?usp=sharing

## Table of Contents:
- MVP
- Planning
- Server-side
- Client-side
- How to use
- Future improvements 
- Credits

## MVP

- Users can create an account where an overall leaderboard is kept.  

- Users can build a team of 11 players in 4-4-2 formation. 

- The players have to match the formation (i.e. goalkeeper in the goalkeeper position).

- No more than three player from any one league in a fantasy team.

- No more than one player from any one team.

- View players' total points.

- View the leaderboard.

- Player stats will be updated periodically from an online Football API: https://rapidapi.com/api-sports/api/api-football

- There is an admin portal where an admin can GET data from the Football API and post it to our backend. Our backend will then handle the logic of calculating the player’s points for that week and update our database.

- Password Authentication.


Extensions:

- Assign players a value and give a set budget (or assign players stars and limit the amount of 5 starred players per team).

- Allow users to select 5 substitutes for their team.

- Allow users to make transfers on a weekly basis (stretch-stretch as probably difficult to implement).

- Allow for multiple different leagues a user can join.

- Users can have a captain/vice-captain.

- Assign players points for player rating above 8.0.

- Spring Security and OAuth.

## Planning

We used Github projects and a Kanban to delegate tasks to individual/pairs and to monitor team progress. Team meetings were held three times a day for members to share progress and to address any persistent bugs.

## Server-side

Our server-side was built using Java, Spring-boot and Spring-Data-JPA to handle the data access layer. We chose JPA to expand our existing tech skill set and because our database structure was relatively light (a table each for Users and Players with a join table to hold players within a fantasy team). Below are our initial entity relationship and UML class diagrams:

![image](https://user-images.githubusercontent.com/83702748/146435216-c5941b3f-f311-4e7c-89d0-7980d45d4d07.png)
![image](https://user-images.githubusercontent.com/83702748/146435270-6a3a0a80-332c-4a93-b268-1504dc2845ed.png)

## Client-side

Our client-side was built using Javascript, HTML and CSS, with use of the libraries React, Bootstrap and BCrypt. The app consists of: an initial login page where users can sign in or register; a user page where the user's team can be created or edited; an admin page to handle fetching data from the external API and a leaderboard displaying the scores of all users. Below is the wireframe used to inspire our userpage design:


## How To Use

First, clone the github repo onto your local machine. Ensure you have the necessary packages and dependencies installed, the navigate to the client directory and enter the command 'npm start' on the terminal. Ensure that you are running the spring boot application concurrently, and that you have created a PSQL database named 'superleague' (This information can be altered in the application.properties file in the server-side directory). You will also need to register to access the football API linked above.


## Future Improvements

We have managed to hit the target aims of our MVP. However, there are various improvements we plan to make to future iterations of the project:

- Improve accessibility.
- Mobile respnsiveness.
- Integrating spring security.
- Extensive testing on client-side using Jest.
- Additional logic to handle more complex game scenarios.
- Bug fixing and cleaning up of file structure (e.g. dark mode toggle, saving multiple teams).

## Credits:
- Anand Lakhani: https://github.com/anandlakhani9
- Luke Fowles: https://github.com/lukefowles
- Oliver Ekwalla: https://github.com/olivrrrrr
- Rashid Fagan-Walcott: https://github.com/Rashid-F-Walcott
- Yonis Abdulahi: https://github.com/ymabdulahi

A big thanks to Colin, Iain, Nelson, Ross, Valeria and everyone else at BNTA (including fellow cohort members!).
