# MyJournalApp

MyJournalApp is a simple and intuitive web application designed for researchers, scholars, and anyone who wants a minimal and organized space to store their thoughts and writing. Built with Node.js and Express.js, it provides a straightforward way to create and manage journal entries without the need for user authentication.

Users can easily submit articles with a title and body, which are then displayed on the home page. Clicking on an article's title leads to a dedicated page for reading the full entry. This application focuses on providing a clean and efficient way to organize and track your writing work.

Hosted on: https://myjournalapp.onrender.com/

> May take upto 30 seconds to load on your browser as its running on free instance.

## Tech Stack

*   **Backend:**
    *   [Node.js](https://nodejs.org/): A JavaScript runtime built on Chrome's V8 JavaScript engine.
    *   [Express.js](https://expressjs.com/): A minimalist web application framework for Node.js.
    *   [body-parser](https://github.com/expressjs/body-parser): Node.js body parsing middleware to handle the request body.
*   **Frontend:**
    *   [EJS](https://ejs.co/): Embedded JavaScript templates for creating dynamic HTML content.
    *   JavaScript: For basic front-end functionality (though minimal in this application).
    *   CSS: For styling the application's user interface.
*   **Utilities:**
    *   [lodash](https://lodash.com/): A utility library delivering consistency, customization, performance, and extras.

## How It Works

The application follows a standard Model-View-Controller (MVC) like structure, primarily handled within the `app.js` file and the `views` directory.

1. **Initialization:** The `app.js` file sets up an Express.js server. It utilizes `body-parser` middleware to handle data submitted through forms and configures EJS as the templating engine. Static assets (like CSS) are served from the `public` directory.

2. **Data Storage:** The application uses an in-memory array called `posts` to store journal entries. This means that the entries are not persistent and will be lost when the server restarts.

3. **Routes:** The application defines several routes to handle different actions:
    *   `/`:  Renders the `home.ejs` template, displaying the `homeStartingContent` and a list of submitted posts.
    *   `/about`: Renders the `about.ejs` template, displaying information about the application.
    *   `/contact`: Renders the `contact.ejs` template, displaying contact information.
    *   `/compose`: Renders the `compose.ejs` template, providing a form for submitting new journal entries.
    *   `/posts/:postName`:  Handles requests for individual posts. It uses `lodash`'s `_.lowerCase` function to compare the requested post title with the stored post titles (case-insensitive).

4. **Composing New Posts:**
    *   When a user submits the form on the `/compose` page (via a `POST` request to `/compose`), the application extracts the `postTitle` and `postContent` from the request body.
    *   A new `post` object is created with the extracted data and pushed into the `posts` array.
    *   The user is then redirected to the home page (`/`), where their new post is now displayed.

5. **Viewing Individual Posts:**
    *   When a user clicks on a post title on the home page, the application makes a `GET` request to `/posts/:postName`.
    *   The `:postName` parameter in the URL is captured.
    *   The application iterates through the `posts` array, comparing the lowercase version of the requested `postName` with the lowercase version of each stored post's title.
    *   If a match is found, the `post.ejs` template is rendered, displaying the title and content of the selected post.

## Installation and Setup Instructions

1. **Clone the repository:**
    ```bash
    git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
    cd YOUR_REPOSITORY
    ```

2. **Install dependencies:**
    Make sure you have [Node.js](https://nodejs.org/) and npm installed on your machine.
    ```bash
    npm install
    ```

## Usage

1. **Start the server:**
    ```bash
    npm start
    ```
    This will start the server, and you should see "Server started on port 3000" in your console.

2. **Open the application in your browser:**
    Navigate to `http://localhost:3000` in your web browser.

3. **Composing a new post:**
    *   Click on the "Compose" link in the navigation bar.
    *   Enter the title and content of your journal entry in the provided form.
    *   Click the "Publish" button. Your new post will now appear on the home page.

4. **Viewing a post:**
    *   On the home page, click on the title of any post to view its full content on a separate page.

## Project Status

This project is currently in development. While the core functionality of creating and viewing posts is complete and functional on desktops, the following features are still in progress:

*   Mobile view optimization
*   Functionality to delete posts

## Screenshots

![Home Section](/imgs/home_section.png)

---

![Compose Section](/imgs/compose_section.png)

---

![Post Section](/imgs/post_section.png)

## Contributing

Contributions are welcome! If you have suggestions for improvements or find any issues, please feel free to open a pull request or submit an issue on the GitHub repository.
