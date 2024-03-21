# Thirsty Soda Shopcart React-Typescript

## Overview

Thirsty Soda Shopcart React-Typescript is a React.js and TypeScript project
built using Vite for rapid development. It serves as a virtual cart shop for
sodas, allowing users to select from a list of sodas and add them to their cart.
The app follows good practices and architecture, utilizing basic React hooks
such as useState, useEffect, and useMemo, as well as custom hooks. Data
persistence is achieved through local storage, ensuring that user selections are
retained between sessions. The app is responsive and adaptable to small devices,
with a design created using Figma.

## Features

- **Soda Selection**: Users can choose from a list of sodas and add them to
  their cart.
- **Cart Management**: In the cart, users can increase or decrease the quantity
  of each soda, delete individual items, or clear the entire cart.

- **Automatic Price Adjustment**: The total price to pay is automatically
  adjusted based on the quantity of items in the cart.

## Technologies Used

- **React.js**: Utilized for building the frontend components and managing state
  efficiently.
- **TypeScript**: Used to add static typing to JavaScript code, enhancing code
  quality and maintainability.

- **Vite**: Employed as a build tool for quick development and seamless
  integration with React.js and TypeScript.

- **useState**: Used for managing component state within React components.

- **useEffect**: Utilized for handling side effects such as fetching data and
  updating the UI after component rendering.

- **useMemo**: Employed for memoizing expensive computations, enhancing
  performance by avoiding unnecessary re-renders.

- **Local Storage**: Utilized for persisting user data, ensuring that selections
  are retained between sessions.

- **Vanilla CSS**: Used for styling the application, ensuring a lightweight and
  efficient design.

## Installation

To run the application locally:

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the dependencies.
4. Run `npm run dev` to start the development server.

## Usage

1. Open the application in your web browser.
2. Browse the list of sodas and select the ones you want to add to your cart.
3. Navigate to the cart to view and manage your selections.
4. Adjust the quantity of each soda, delete individual items, or clear the
   entire cart as needed.
5. The total price will be automatically adjusted based on your selections.

## License

This project is licensed under the NETNEO License.

## Preview

![mobile image](public/img/thristy%20soda-mobile.png)
![desktop image](public/img/thirsty%20soda-desktop.png)
