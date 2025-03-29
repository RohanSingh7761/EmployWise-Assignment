# EmployWise

EmployWise is a modern employee management application built with React and Vite. It provides a user-friendly interface for managing employees, including features like user authentication, user listing, editing, and deletion.

## Features

- **User Authentication**: Secure login functionality using a token-based system.
- **User Management**: View, edit, and delete users with a responsive and intuitive UI.
- **Protected Routes**: Ensures only authenticated users can access certain pages.
- **Toast Notifications**: Provides feedback for user actions like login success, errors, and CRUD operations.
- **Material-UI Integration**: Leverages Material-UI for a clean and professional design.

## Tech Stack

- **Frontend**: React, React Router, Material-UI
- **State Management**: React Hooks
- **HTTP Client**: Axios
- **Build Tool**: Vite
- **Linting**: ESLint
- **Notifications**: React Toastify


## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/employwise.git
   cd employwise
2. Install dependencies:
   ```sh
   npm install
3. Start the development server:
   ```sh
   npm run dev

## API Integration
  EmployWise uses the ReqRes API for user data. The following endpoints are utilized:

- Login: /login (POST)
- Get Users: /users?page=1 (GET)
- Update User: /users/:id (PUT)
- Delete User: /users/:id (DELETE)
