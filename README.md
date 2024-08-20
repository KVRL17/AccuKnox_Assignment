To run the React application with Redux and the JSON data locally, follow these steps:

Prerequisites
Node.js: Ensure that Node.js is installed on your machine. You can download it from nodejs.org.
npm: npm (Node Package Manager) comes with Node.js. It will be used to install dependencies.

Step 1: Set Up the Project
1.Create a New React Project:
npx create-react-app my-dashboard
cd my-dashboard
2.Install Redux and React-Redux:
npm install @reduxjs/toolkit react-redux
3.Install Other Dependencies (if needed):
If you need other libraries like prop-types, axios, or react-router-dom, install them now:
npm install prop-types axios react-router-dom

Step 2: Organize the Project Structure
Organize your project files as follows:
my-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── Category.js
│   │   ├── Widget.js
│   │   └── Dashboard.js
│   ├── data/
│   │   └── dashboardData.json
│   ├── store/
│   │   ├── widgetSlice.js
│   │   └── store.js
│   ├── App.js
│   ├── index.js
│   └── App.css
└── package.json

Step 3: Run the Application
1.Start the Development Server:
npm start
