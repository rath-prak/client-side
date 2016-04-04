var xhr = require('xhr')
var example = require('./views/example.hbs')

// xhr.get('https://api.wheretheiss.at/v1/satellites', function(err, dataFromApi) {
//   if (err) console.log(err) // do something
//   	var convertJsonData = JSON.parse(dataFromApi.body);

//   	var nameFromJson = convertJsonData[0].name;
//   	console.log(convertJsonData[0].name);

//   document.body.innerHTML = example({ name: nameFromJson });
// })



xhr.get('https://api.wheretheiss.at/v1/satellites/25544', function(err, dataFromApi) {
  if (err) console.log(err) // do something
  	var convertJsonData = JSON.parse(dataFromApi.body);


  	var name = convertJsonData.name;
  	console.log(convertJsonData.name);

  	var nameFromJson = convertJsonData.latitude;
  	console.log(convertJsonData.latitude);

  	var locationTwo = convertJsonData.longitude;
  	console.log(convertJsonData.longitude);

  document.body.innerHTML = example({ name: name, location : nameFromJson, longitude : locationTwo });
  // document.body.innerHTML = example({ location : nameFromJson });
})
