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
            title: "OpenCV Python Tutorial",
            subtitle: "fa"
        },{ 
            coursename: "LearnAngular",
            link: "https://www.youtube.com/embed/2OHbjep_WjQ?list=PLWKjhJtqVAblNvGKk6aQVPAJHxrRXxHTs",
            title: "Learn Angular - Full Tutorial Course",
            subtitle: "ufn"
        },{
            coursename: "PyTorchBasicsandGradientDescent",
            link: "https://www.youtube.com/embed/5ioMqzMRFgM?list=PLWKjhJtqVAbm5dir5TLEy2aZQMG7cHEZp",
            title:"PyTorch Basics and Gradient Descent",
            subtitle: "swg"
        },{
            coursename: "ZustandReactStateManagement",
            link: "https://www.youtube.com/embed/fZPgBnL2x-Q",
            title: "Zustand React State Management Courses",
            subtitle: "avdb"
        },{
            course: "LearnGoProgramming",
            title: "Learn Go Programming - Golang Tutorial for Beginners",
            link: "https://www.youtube.com/embed/YS4e4q9oBaU",
            subtitle: "dd"
        }]
    });
}
module.exports =  {
    view
}

