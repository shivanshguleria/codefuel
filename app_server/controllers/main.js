
const index = function(req, res, next) {
    res.render('index', { 
      title: 'Home',
      thumbnail: [{
        title: "Zustand React State Management",
        author: "By Freecodecamp",
        body: "Learn Zustand in this full course for beginners. Zustand is a minimalistic state management library for React, offering a simpler API compared to Redux. ",
        link: "#",
        time: "1 hrs",
        thumbnail: "https://i.ibb.co/s25K9qN/reactstatemanaagement.jpg"
      },{
        title: "JavaScript and the HTML DOM ",
        author: "By Beau Teaches",
        body: "JavaScript allows you to select elements from the DOM of a website and then make changes to those elements.This video covers getElementById, getElementsByClassName, getElementsByTagName, QuerySelector, querySelectorAll, innerHTML, and textContent",
        link: "https://www.youtube.com/watch?v=eaLKqoB9Fu0&list=PLWKjhJtqVAbllLK6r2dnGjUVWB_cFNcuO",
        time: "11 Videos | 1hrs",
        thumbnail: "https://i.ibb.co/d75h1FH/jsdom.png"
      },{
        title: "OpenCV Python Tutorials",
        author: "By Tech With Tim",
        body: "Welcome to a brand new series on OpenCV and Python. I'll start this episode with a quick introduction to OpenCV, in case some of your aren't familiar with it. I'll also talk about how to install OpenCV, loading an image into OpenCV, as well as manipulating an image within OpenCV.",
        link: "https://www.youtube.com/watch?v=qCR2Weh64h4&list=PLzMcBGfZo4-lUA8uGjeXhBUUzPYc6vZRn",
        time: "8 videos | 2hrs",
        thumbnail: "https://i.ytimg.com/vi/qCR2Weh64h4/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBL9Ypa2c7PTfgYkBOmVc1JT8YHSA"
      },{
        title: "Learn Angular",
        author: "By FreeCodecamp",
        body: "Learn about Angular 6 (and above) in this complete course. You will learn how to create small/medium/large applications with Angular 6 in this web development tutorial.",
        link: "https://www.youtube.com/watch?v=2OHbjep_WjQ&list=PLWKjhJtqVAblNvGKk6aQVPAJHxrRXxHTs",
        time: "8 videos | 8 Hrs",
        thumbnail: "https://i.ibb.co/b36fGSJ/angular.png"
      },{
        title: "Deep Learning with PyTorch",
        author: "By Freecodecamp",
        body: "“Deep Learning with PyTorch” is a beginner-friendly online course offering a practical and coding-focused introduction to deep learning using the PyTorch framework.",
        link: "https://www.youtube.com/watch?v=5ioMqzMRFgM&list=PLWKjhJtqVAbm5dir5TLEy2aZQMG7cHEZp",
        time: "4 videos | 7hrs",
        thumbnail: "https://i.ibb.co/fkRQK7t/pytorchlive.png" 
      },{
        title: "Learn Go Programming - Golang Tutorial for Beginners",
        author: "By Freecodecamp",
        body: "Learn the Go programming language (Golang) in this step-by-step tutorial course for beginners. Go is an open source programming language designed at Google that makes it easy to build simple, reliable, and efficient software.",
        link: "https://www.youtube.com/watch?v=YS4e4q9oBaU",
        time: "6 hrs",
        thumbnail: "https://i.ibb.co/9skXNV8/golang.png"
      },{
        title: "C Programming Tutorial for Beginners",
        author: "By Freecodecamp",
        body: "This course will give you a full introduction into all of the core concepts in the C programming language.",
        link: "https://www.youtube.com/watch?v=KJgsSFOSQv0&list=PLWKjhJtqVAbmUE5IqyfGYEYjrZBYzaT4m",
        time: "8 videos | 31Hrs",
        thumbnail: "https://i.ibb.co/kJK6fB1/cpp31.png"
      },{
        title: "APIs for Beginners",
        author: "By Freecodecamp",
        body: "What is an API? Learn all about APIs in this full tutorial for beginners.",
        link: "https://www.youtube.com/watch?v=WXsD0ZgxjRw&t=5s",
        time: "3 hrs",
        thumbnail: "https://i.ibb.co/5Fc5Y6K/apinew.png"
      },{
        title: "Web Applications for Everybody Course",
        author: "Dr Chuck",
        body: "This beginner's course is a complete introduction to web application development.",
        link: "https://www.youtube.com/watch?v=xr6uZDRTna0",
        time: "14 hrs",
        thumbnail: "https://i.ibb.co/8Nxxtsr/wa4e3.png"
      }]
    });
  };

const login = function(req, res, next) {
    res.render('login', { title: 'login' });
  };

const signup = function(req, res, next) {
    res.render('signup', { title: 'sign up' });
  };

const users = function(req, res, next) {
    res.render('index', { title: 'Express' });
  };

const course = function(req, res, next) {
    res.render('index', { title: 'Express' });
  };

const review = function(req, res, next) {
    res.render('review', { title: 'review' });
  };

const about = function(req, res, next) {
    res.render('about', { title: 'About' });
  };

const future = function(req, res, next) {
    res.render('index', { title: 'Express' });
  };

const contactus = function(req, res, next) {
    res.render('index', { title: 'Express' });
  };


const upload = function(req, res, next) {
    res.render('index', { title: 'Express' });
  };


module.exports = {
    index, login , signup, users, course, review, about, future, contactus,  upload
}