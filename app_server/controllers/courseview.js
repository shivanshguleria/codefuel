const data = require('../config/database.json')
const view= (req, res) => {
    const para = req.params;
    console.log(para.course)
    res.render('courseview', { 
        title: para.course,
        course: data.course
    });
}

module.exports =  {
    view
}




