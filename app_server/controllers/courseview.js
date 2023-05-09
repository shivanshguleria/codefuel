const data = require('../config/database.json')
const view= (req, res) => {
    const para = req.params;
    res.render('courseview', { 
        title: para.course,
        course: data.course
    });
}
module.exports =  {
    view
}




