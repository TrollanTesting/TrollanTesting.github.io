# Contact Backend

This project is a backend application for handling contact form submissions. It is built using Node.js and Express, and it utilizes Nodemailer for sending emails.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Routes](#routes)
- [License](#license)

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd contact-backend
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your environment variables (see [Environment Variables](#environment-variables) for details).

## Usage

To start the server, run the following command:
```
npm start
```
The server will start on the specified port (default is 3000).

## Environment Variables

The following environment variables are required:

- `EMAIL_USER`: Your email address for sending messages.
- `EMAIL_PASS`: Your email password or app-specific password.
- `PORT`: (Optional) The port on which the server will run (default is 3000).

## Routes

The application exposes the following route for handling contact messages:

- `POST /contact`: Submits a contact message. The request body should contain the following fields:
  - `name`: The name of the sender.
  - `email`: The email address of the sender.
  - `message`: The message content.

## License

This project is licensed under the MIT License.