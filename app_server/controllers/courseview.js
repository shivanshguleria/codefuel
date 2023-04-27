const view= (req, res) => {
    const para = req.params;
    res.render('courseview', { 
        title: para.course,
        course: [{
            coursename: "react",
            link: "https://www.youtube.com/embed/eaLKqoB9Fu0?list=PLWKjhJtqVAbllLK6r2dnGjUVWB_cFNcuO",
            title: "afi",
            subtitle: "vbdyssd"
        },{
            coursename: "JavaScriptandtheHTMLDOM",
            link: "https://www.youtube.com/embed/eaLKqoB9Fu0?list=PLWKjhJtqVAbllLK6r2dnGjUVWB_cFNcuO",
            title: "JavaScript and the HTML DOM",
            subtitle: "fdfd"
        },{
            coursename: "OpenCVPythonTutorial",
            link: "https://www.youtube.com/embed/qCR2Weh64h4?list=PLzMcBGfZo4-lUA8uGjeXhBUUzPYc6vZRn" ,
            title: "OpenCV Python Tutorial #1 - Introduction",
            subtitle: "fa"
        }]
    });
}
module.exports =  {
    view
}

