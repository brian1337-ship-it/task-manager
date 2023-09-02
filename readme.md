# Task Management App  

This is a full-stack web application for managing tasks, as per the TryHackMe task/assignment. The application allows users to create, read, update, and delete tasks and is built with Node.js and Express for the backend, React for the frontend, and MongoDB for the database. TypeScript is also used.

It includes the following:

- Backend REST API with Express & MongoDB
- Routes for create, read, update and delete tasks
- Custom logger 
- Middleware to set and hide some headers for security purposes.  
- Custom error middleware 
- Middleware to enhance security by sanitizing requests with only whats defined in the schema.
- React frontend to create, update, delete and view tasks
- Redux, RTK
- React Tailwind css
- React Toastify notifications
- TypeScript

Possible future improvements:
- Protected routes and endpoints that require authentication
- Comprehensive unit and integration tests

## Usage

- Run all scripts from the main project root directory to install dependencies and run the project itself


### Install Dependencies (frontend & backend)

```
# client & server
npm run init
```

### Run frontend & backend

```
# Run both client (:3000) & server (:4000)
npm run dev 

# Run server only
npm run server

# Run client only
npm run client
```
