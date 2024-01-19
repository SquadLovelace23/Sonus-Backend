<div align="center">
  <img src="https://res.cloudinary.com/du94mex28/image/upload/v1697795732/sonus/sonus-full-fa2_j4vaxr.png" alt="Sonus Logo" width="350">
</div>

# Sonus Backend

Welcome to the backend repository of Sonus, your ultimate music companion. This repository contains the server-side code and functionalities that power the Sonus web-based music player application. If you're looking for information about the frontend, please refer to the [Sonus Frontend Repository](https://github.com/SquadLovelace23/Sonus-Frontend).

## Installation

Before diving into the backend of Sonus, make sure you have [Node.js](https://nodejs.org/) installed on your local machine. Here's how to get started:

1. **Clone the Sonus Backend Project:** Begin by cloning the Sonus backend project from the GitHub repository:

    ```bash
    git clone https://github.com/SquadLovelace23/Sonus-Backend.git
    ```

2. **Navigate to the Backend Project Directory:** Move into the backend project directory using the following command:

    ```bash
    cd Sonus-Backend
    ```

3. **Install Dependencies:** Install the required project dependencies using npm:

    ```bash
    npm install
    ```

## Running the Backend

The Sonus backend provides the necessary APIs and logic to support the frontend functionalities. Here's how to run the backend:

- **Start the Server:** Launch the backend server with the following command:

    ```bash
    npm run dev
    ```

The backend will be running at http://localhost:8081.

## Key Backend Dependencies

Sonus Backend utilizes several dependencies to handle server-side functionalities:

- **express:** A fast, unopinionated, minimalist web framework for Node.js that powers the Sonus server.
- **mongoose:** A MongoDB object modeling tool designed to work in an asynchronous environment, providing a straightforward schema-based solution for Sonus data.
- **jsonwebtoken:** JSON Web Token implementation to handle user authentication securely.
- **bcrypt:** A library to help hash passwords, ensuring user data security.

## Deployment

The Sonus frontend is deployed with Railway, while the backend is not publicly deployed. The frontend repository is hosted on Vercel. For more information about the frontend deployment, please refer to the Sonus Frontend Repository.

Explore the backend, enhance your music experience, and let Sonus be your ultimate music companion. Enjoy the backend journey!
