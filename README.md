# SportSee Dashboard Front-End

## Description:

This repository is the Front-End Dashboard for the SportSee App (Mockup).

## Requirements:

You need the Node Package Manager (Yarn in optional).
You need NodeJs (v12.18) installed on your computer.

## Installation:

Before installing this repository, you must clone, install and run the dev server https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard
This project need the development server running on Node.js to mock the API endpoint used by the Front-End Dashboard.
The two repository work together, and are run from two different folders.

### For the dev server

1. Fork the repository
2. Clone the repository: git clone
3. Inside the folder, install the dependencies for the server: npm install or yarn
4. Run the server: npm run start or yarn dev

### For the Front-End Dashboard (this repository)

1. Fork this repository
2. Clone this repository: git clone
3. Inside the folder, install the dependencies for the front-end: npm install or yarn
4. Run the Front-End: npm run start
5. (Optional) You will be prompted to launch the Front-End on a different port than :3000, type Y to run it on :3001.

Option - local development.
For local development with static json data change the REACT_APP_ENV = local
(With this option you don't need the backend server installed).
Don't forget to save the .env file and you need to restart the front-end environment after this change.
It will ignore the REACT_APP_BASE_URL constant in .env
