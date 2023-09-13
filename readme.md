# Task Management App

This is a full-stack web application for managing tasks. The application allows users to create, read, update, and delete tasks.

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

- Add protected routes and endpoints that require authentication
- Add metrics for the API

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

## Documentation

- `You can view` - [API Documentation](https://documenter.getpostman.com/view/12461632/2s9Y5cuLNz)
