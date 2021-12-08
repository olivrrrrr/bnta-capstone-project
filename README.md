# Fantasy Super League

Fantasy Super League is a game that casts you in the role of a Fantasy manager. You are given the task to pick a squad of real-life players who score points for your team based on their performances in their own (real) matches (e.g. Simple game based on real life league results.

You score points by: number of goals scored, assists, clean sheets, appearances.
You lose points for: red/yellow cards.

Our application uses the tech stacks Java, Spring Boot and PostgreSQL to enable the user to store information using CRUD operations. For the user interface this application uses HTML, CSS, JavaScript and React. 

## Table of Contents:
- Planning 
- Server side
- Client side
- Testing 
- Challenges we faced 
- Future improvements 
- Credits

## MVP

- Users can create an account where an overall leaderboard is kept.  

- Users can build a team of 11 players in 4-4-2 formation. 

- The players have to match the formation (i.e. goalkeeper in the goalkeeper position).

- Need at least 2 players from each leagues in your fantasy team.

- No more than one player from each team.

- View players' total points.

- View the leaderboard.

- Player stats will be updated periodically from an online Football API: https://rapidapi.com/api-sports/api/api-football

- There is an admin portal where an admin can GET data from the Football API and post it to our backend. Our backend will then handle the logic of calculating the player’s points for that week and update our database.

- Authentication (spring security / flybase). JPA instead of JDBC.

- React Redux for state management (MVP).


## Extensions

- Assign players a value and give a set budget (or assign players stars and limit the amount of 5 starred players per team).

- Allow users to select 5 substitutes for their team.

- Allow users to make transfers on a weekly basis (stretch-stretch as probably difficult to implement).

- Allow for multiple different leagues a user can join.

- Users can have a captain/vice-captain.

- Assign players points for player rating above 8.0.

- React native for mobile?

## Credits:
- Anand Lakhani: https://github.com/anandlakhani9
- Luke Fowles: https://github.com/lukefowles
- Oliver Ekwalla: https://github.com/olivrrrrr
- Rashid Fagan-Walcott: https://github.com/Rashid-F-Walcott
- Yonis Abdulahi: https://github.com/ymabdulahi
