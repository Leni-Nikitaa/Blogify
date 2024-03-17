# Blogify

Blogify is a dynamic blog platform built with html, Node.js, Express, EJS, and MongoDB. It allows users to create, edit, and delete posts, as well as search for specific content.

## Features

- User authentication and authorization
- CRUD operations for posts
- Search functionality
- Responsive design

## Technologies Used

- html
- Node.js
- Express
- EJS (Embedded JavaScript)
- MongoDB

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Leni-Nikitaa/Blogify.git
```

2. Install dependencies:

```bash
cd Blogify
npm install
```

3. Set up environment variables by creating a `.env` file in the root directory and add the following:

```
MONGODB_URI=mongodb+srv://username:password@cluster0.t4os4iq.mongodb.net/blogify
JWT_SECRET=YourJWTSecret
```

Replace `username`, `password`, and `YourJWTSecret` with your MongoDB Atlas credentials and a secret key for JWT token. 4. Run the application:

```bash
npm start
```

The application should now be running on `http://localhost:5000`.

## Usage

- Visit `http://localhost:5000` to access the blog platform.
- Sign up or log in to start creating and managing posts.

## License

This project is licensed under the [Apache License](https://github.com/Leni-Nikitaa/Blogify/blob/main/LICENSE).
