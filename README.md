# wiziq-authbase

## Install

```bash
$ npm install wiziq-authbase
```

## Usage

```js

var wiziq-authbase = require('wiziq-authbase');


// Define your Key (WizIQ)
var access_key = '<< YOUR ACCESS KEY  >>';
var secretAcessKey = '<< YOUR SECRET ACCESS KEY  >>';
var webServiceUrl="http://class.api.wiziq.com/";


// define method to call ,timestamp and generated signature
var method = "<< Method name you want to call >>";  // eg. create , create_perma_class
var times = wiziqAuthbase.generateTimeStamp();
var hashkey = wiziqAuthbase.generateSignature(method,secretAcessKey , access_key ,times);



//Note :  in this example we used request package but you can use your logic to post this parameter
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



```xml
// run this cammand and you will see the XML reponse from in the termial
<rsp status="ok" call_id="0ba583afe4da">
  <method>create_perma_class</method>
  <create_perma_class status="true">
    <perma_class_details>
      <class_master_id>29628</class_master_id>
      <common_perma_attendee_url><![CDATA[https://www.wiziq.com/class/launch.aspx?%2fpbeqQWORwi%2b839eB3qJlZr%2bIkG1ItLkiMQnBoyjW9i5VUY58wKSgOOk%3d]]></common_perma_attendee_url>
      <presenter>
        <presenter_email><![CDATA[teacherinme@gmail.com]]></presenter_email>
        <presenter_url><![CDATA[https://www.wiziq.com/class/launch.aspx?nVnDx7oTA%2bmTJwBNnZO9GCwZdS7yUDhmpb0twttPeyzKVEf5aK7owa6T]]></presenter_url>
      </presenter>
    </perma_class_details>
  </create_perma_class>
</rsp>




```



## License

[MIT](LICENSE.txt)

