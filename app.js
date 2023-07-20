//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const homeStartingContent = "This project is a web application that allows users to submit articles to a journal. The application includes an article submission form. Without logging in, users can submit articles to the journal. The article submission form includes fields for the article's title and body text. The journal application project is a valuable tool for researchers and scholars who want to store their work within a minimal app. The application makes it easy to organise articles to a journal and to track the status of your writing work.";
const aboutContent = "A simple and intuitive interface, easy to use, even for researchers who are not familiar with online submission systems. A centralized repository, stores all of a researcher's submitted papers in a single repository, making it easy to track the status of their submissions and to manage their publication history.";
const contactContent = ["Github: https://github.com/403errors",  "Email: pieisnot22by7@gmail.com"];

const app = express();

var posts = [];
var match = false;

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get('/', function (req, res) {
  res.render('home', {
    startingContent: homeStartingContent,
    newPosts: posts
  });
});

app.get('/about', function (req, res) {
  res.render('about', {
    startingContent: aboutContent
  });
});

app.get('/contact', function (req, res) {
  res.render('contact', {
    startingContent: contactContent
  });
});

app.get('/compose', function (req, res) {
  res.render('compose', {
    startingContent: contactContent
  });
});

app.post('/compose', function (req, res) {
  postTitle = req.body.postTitle;
  postContent = req.body.postContent;
  // console.log(postTitle, postContent);

  const post = {
    title: postTitle,
    content: postContent
  };

  posts.push(post);
  // console.log(posts);

  res.redirect('/');
});

app.get('/posts/:postName', function (req, res) {
  const requestedPost = _.lowerCase(req.params.postName);
  // console.log(req.params.postName);

  posts.forEach(function (post) {
    const storedPost = _.lowerCase(post.title);

    if (requestedPost === storedPost) {
      res.render('post', {
        postTitle: post.title,
        postContent: post.content
      })
    } else {
      console.error("Error: Post not found!");
    }
  });

});



app.listen(3000, function () {
  console.log("Server started on port 3000");
});