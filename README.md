# Diginja.com

## Technologies Used
This project is built using the following technologies and tools:
- **Node.js**: JavaScript runtime environment (just used to serve static files for now)
- **Express.js**: Backend micro server
- **Vite**: Development and build tool for fast project setup
- **ESLint** and **Prettier**: Code linting and formatting tools
- **ncp**: File copying during the build process (compatible windows & linux)
- **TypeScript (via typescript-eslint)**: Optional support for TypeScript rules

## Prerequisites
Before you begin, make sure you have the following installed:
- **Node.js** _(v22 or higher recommended)_: [Download Node.js](https://nodejs.org/)
- **npm** _(comes with Node.js)_

## Installation
1. Clone this repository:
``` bash
   git clone https://github.com/gudoy/diginja.com.git
   cd diginja.com
```
1. Install the dependencies:
``` bash
   npm install
```
1. Start the project in development mode:
``` bash
   npm run dev
```

## Available Scripts
Here is a list of the available npm scripts, as defined in the `package.json` file:
- **`npm run dev`**: Starts the development server with Vite.
- **`npm run build`**: Builds the production files and copies the backend to the `dist` folder.
- **`npm run preview`**: Previews the production build.
- **`npm start`**: Runs the application in production mode (requires the `build` step).
- **`npm run lint:check`**: Checks the code for linting errors using ESLint.
- **`npm run lint:fix`**: Attempts to automatically fix linting errors.
- **`npm run format:check`**: Checks the code formatting with Prettier.
- **`npm run format:fix`**: Auto-formats the code using Prettier.

## Project Structure
Below is an overview of the main structure of the project:
``` 
diginja.com/
├── dist/          # Compiled files generated during the build process
├── server/        # Server code (Express.js)
├── src/           # Main source files
├── package.json   # Dependencies and scripts configuration
├── vite.config.js # Vite configuration
└── README.md      # Project documentation
```

## License
This project is licensed as **UNLICENSED** and is not publicly available.
For more details, you can contact the author via email: [doyer.guyllaume@gmail.com](mailto:doyer.guyllaume@gmail.com).
