const fs = require("fs");
const ent = 0;

const upload = function(req,res){
    let name = req.body.cname;
    let author = req.body.cauthor;
    let disc = req.body.cdisc;
    let num = req.body.vidnum;
    let hour = req.body.vidhours;
    let thumbnail = req.body.thumbnail;
    let link = req.body.link;
    const data = fs.readFileSync('./app_server/config/database.json');
    var myObject= JSON.parse(data);
   console.log(myObject);
    let newdata = {
    name: name,
    author: author,
    disc: disc,
    num: num,
    hour: hour,
    thumbnail: thumbnail,
    link: link
    }

   myObject['course'].push(newdata);
  jsonStr = JSON.stringify(myObject);

  fs.writeFile("./app_server/config/database.json", jsonStr, (err) => {
    // Error checking
    if (err) throw err;
    console.log("New data added");
  })
  res.redirect('/catalog');
  ;}


const course = function(req,res) {
  let name = req.body.coursen;
  let thumbnail = req.body.thumbnail;
  let link = req.body.clink;
  const data = fs.readFileSync('./app_server/config/courselinks.json');
  var myObject= JSON.parse(data);
  let newdata = {
    name: name,
    link: link,
    thumbnail: thumbnail
    
    }
  myObject['course'].push(newdata);
  jsonStr = JSON.stringify(myObject);
  fs.writeFile("./app_server/config/courselinks.json", jsonStr, (err) => {
    // Error checking
    if (err) throw err;
    console.log("New data added");
  })
  console.log(myObject);
  res.redirect('/catalog');
}
  module.exports = {
    upload, course
  }