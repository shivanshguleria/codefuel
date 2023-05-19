var request = require('request');

var datetime = new Date();

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const d = new Date(); 
const date = d.getDate();
const month =  monthNames[d.getMonth()]
const year = d.getFullYear()
const fullDate = date + "th of " + month +", "+ year;
const certificate = function(req, res, next){
    let name = req.body.name;
    let cname = req.body.title;
    console.log(req.body.title);
    var options = {
        'method': 'POST',
        'url': 'https://api.craftmypdf.com/v1/create',
        'headers': {
          'X-API-KEY': '0a94NDUyMzo0NTM2Om9hQ3c5ZG44VzNHOEhPVVk',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "data": {
            "title": "Certificate of Completion",
            "desc": "has successfully completed a course entitled: <br>" + cname,
            "recipient": name,
            "date": fullDate,
            "signature": "Monkey D. Luffy"
          },
          "load_data_from": null,
          "template_id": "80577b237724fc0e",
          "version": 1,
          "export_type": "json",
          "expiration": 1,
          "output_file": "cert.pdf",
          "is_cmyk": false,
          "image_resample_res": 1200,
          "direct_download": 0,
          "cloud_storage": 1
        })
      
      };
      request(options, function (error, response) {
        if (error) throw new Error(error);
        body = JSON.parse(response.body);
        console.log(body);
        res.redirect(body.file);
      });
      
}

module.exports= {
    certificate
}