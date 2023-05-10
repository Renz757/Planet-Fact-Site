Front End Mentor's Planet Fact Site - Intermediate Challenge 

This app was built using React and Sass for styling 

When first attempting this challenge, I made separate pages for each individual planet to render data with react router and mostly had all application state in one file (MainComponent) passing it around to other components 

After revisiting this project, I found a way to refactor all planet data just using one file and deleted each indiviual planet page along with react router. I also used useContext with useReducer for application state

to run this project, use "npm start"