var http = require('http');
var urlencode = require('urlencode');
var request = require('request');

// Local Node module
var wiziqAuthbase = require('./wiziq-authbase');
//var access_key = '<< YOUR ACCESS KEY  >>';
//var secretAcessKey = '<< YOUR SECRET ACCESS KEY  >>';
var webServiceUrl="http://class.api.wiziq.com/";

      
        var method = "create_perma_class";
        var times = wiziqAuthbase.generateTimeStamp();
        var hashkey = wiziqAuthbase.generateSignature(method,secretAcessKey , access_key ,times);



        var headers = {
        'Content-Type':     'application/x-www-form-urlencoded'
        }

        var  requestParameters = {
          access_key : access_key,
          timestamp : times ,
          method : method,
          signature: hashkey, 
          presenter_id: "1225",
          presenter_name :"Mr Jhon Doe" ,
          title: "Demo Perma Class", 
          attendee_limit: "2",
          presenter_default_controls : 'audio, video',
          attendee_default_controls : 'audio, video',
        };

        var options ={
          url  :  webServiceUrl+'?method='+method+'&',  
          form :  requestParameters
        }
       
       request.post(options, function (error, response, body) {
              if (!error && response.statusCode == 200) {
                  // Print out the response body
                  console.log(body)
              }
        })
