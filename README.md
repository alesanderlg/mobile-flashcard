# Mobile Flashcard
Mobile Flashcards is a React Native application that allows a user to create decks and add cards (questions and answers) to that deck.

## Prerequisite

* Node `v12.1.0` 
* NPM `6.9.0`

## Getting Started

* install all project dependencies with `npm install` 
* start the development server with `npm start` or `yarn start`

## Project Structure

This repository was bootstrapped using the `create-react-native-app`. The following are a quick overview of my project structure:

- `/src`: contains all the code related to the application’s core. 
	- `/assets`: contains images and css considered generic inside the app.
	- `/components`: contains all the generic or shared components.
    - `/constants`: Contains values cannot change and these are common to the project 
    - `/navigations`: responsible for managing the presentation of, the transition between screens  
	- `/redux`: contains actions and reducers 
    - `/screens`: contains all screen presentations 
    - `/utils`: contains all common 

## Platforms

* This app was tested for iOS 12.2 iPhone X using the Expo

## Additional dependencies

