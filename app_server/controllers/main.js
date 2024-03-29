const data = require('../config/database.json')
const index = function(req, res, next) {
    res.render('index', { 
      title: 'Home',
      thumbnail: data.course
    });
  };
console.log(data.course.length)
const catalog = function(req, res) {
  res.render('view-course', {
    title: "catalog",
    thumbnail: data.course  
  })
}

const users = function(req, res, next) {
    res.render('index', { title: 'Express' });
  };

const course = function(req, res, next) {
    res.render('upload1', { 
      title: req.params['course'],
      num: req.params['num'],
      op: req.params['ent']
    });
  };

const review = function(req, res, next) {
    res.render('review', { title: 'review' });
  };

const about = function(req, res, next) {
    res.render('about', { title: 'About' });
  };


const contactus = function(req, res, next) {
    res.render('contactus', { title: 'Contact us' });
  };


const upload = function(req, res, next) {
    
    res.render('upload', { title: 'Express' });
    
  };


module.exports = {
    index, users, course, review, about,  contactus,  upload, catalog
}