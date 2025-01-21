# React useState Object Mutation Bug

This repository demonstrates a common error when using the `useState` hook in React with object states. Directly modifying the object state does not trigger a re-render, leading to unexpected behavior.

## Bug
The `bug.js` file contains a component that attempts to increment a value within an object state directly, without creating a new object. This fails to trigger a re-render because React's state update mechanism relies on detecting changes in object references, not the object's internal values.

## Solution
The `bugSolution.js` file demonstrates the correct approach.  Instead of modifying the object directly, it creates a copy using the spread operator (`...`) and updates the value within the copy.  This ensures a new object reference is created, triggering the re-render.

## How to run
1. Clone the repository.
2. Navigate to the repository directory.
3. Run `npm install` to install the dependencies.
4. Run `npm start` to start the development server.