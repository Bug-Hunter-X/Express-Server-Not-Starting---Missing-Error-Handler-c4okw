# Express Server Not Starting - Missing Error Handler

This repository demonstrates a common error in Express.js applications: the absence of an error-handling middleware.  Without proper error handling, uncaught exceptions can cause the server to crash silently, without providing any useful debugging information.

The `server.js` file contains the buggy code. The `server-solution.js` file demonstrates the correct implementation with error handling.

## How to reproduce the bug

1. Clone this repository.
2. Run `node server.js`.
3. Observe that the server does not start and no error messages are logged to the console (or the error message is not helpful).

## How to fix the bug

1. Implement a global error handling middleware using `app.use()`. This middleware should handle any errors that occur in other middleware functions or route handlers.
2. Properly handle errors and provide informative error messages.