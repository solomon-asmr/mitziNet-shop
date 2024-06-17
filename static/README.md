submitted by :
    shmuel lemlem id:209487594
    solomon kassahun id: 346254824 

# Mizzi-Net Registration and Customer Club

This project implements a registration form and a customer club for Mizzi-Net, a pet supply store. The project includes both client-side and server-side functionalities, including form validation, password hashing, and user management.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Server-Side Implementation](#server-side-implementation)
- [Client-Side Implementation](#client-side-implementation)
- [License](#license)

## Installation

### Prerequisites
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

### Steps
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/mitziNet-shop.git
    cd mitziNet-shop
    ```

2. Install the necessary dependencies:
    ```sh
    npm install
    ```

3. Set up your MongoDB connection:
   - Use the provided MongoDB URI or set up your own MongoDB server.
   - Update the MongoDB URI in `server.js` if necessary.

## Usage

1. Start the MongoDB server if you are using a local MongoDB instance.

2. Start the Node.js server:
    ```sh
    node server.js
    ```
   - Alternatively, you can use `nodemon` for auto-restarting the server during development:
     ```sh
     npx nodemon server.js
     ```

3. Open your browser and navigate to `http://localhost:3000` to see the registration form.

## Project Structure

### Server-Side Implementation

The server is implemented using Node.js, Express, and MongoDB (via the `mongojs` library). Passwords are hashed using `bcrypt` before being stored in the database.

#### Registration Endpoint (`/register`)
- **Validation**:
  - All fields (first name, last name, phone number, email, password, confirm password) are required.
  - Password must be at least 8 characters.
  - Password and confirm password must match.
  - Email must be unique.
- **Password Hashing**:
  - Passwords are hashed using `bcrypt` before being stored in the database.
- **Database**:
  - User information is stored in the `mitzinet_solomon_shmuel` collection.

#### Deletion Endpoint (`/delete`)
- **Validation**:
  - User is authenticated using email and password.
  - Password is verified using `bcrypt`.
- **Database**:
  - User record is removed from the `mitzinet_solomon_shmuel` collection if authentication is successful.

### Client-Side Implementation

The client-side is implemented using plain HTML, CSS, and JavaScript.

#### Form Validation
- The form is validated on the client-side before submission.
- Upon successful registration, the form fields are cleared.

#### Registration Form
- Located in `index.html`.
- CSS styles are defined in `styles.css`.
- JavaScript logic for form submission and validation is implemented in `script.js`.

### Dependencies

- [Express](https://expressjs.com/)
- [mongojs](https://www.npmjs.com/package/mongojs)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [body-parser](https://www.npmjs.com/package/body-parser)

### License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- This project was developed as part of a task for Mizzi-Net.
- Special thanks to the contributors and supporters.

