const index = function(req, res, next) {
    res.render('index', { title: 'index' });
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
    res.render('index', { title: 'Express' });
  };

const future = function(req, res, next) {
    res.render('index', { title: 'Express' });
  };

const contactus = function(req, res, next) {
    res.render('index', { title: 'Express' });
  };

const creater = function(req, res, next) {
    res.render('index', { title: 'Express' });
  };

const upload = function(req, res, next) {
    res.render('index', { title: 'Express' });
  };


module.exports = {
    index, login , signup, users, course, review, about, future, contactus, creater, upload
}