
var soap = require('soap');
var url = 'http://localhost:8000/wsdl?wsdl';

soap.createClient(url, function (err, client) {
  if (err){
    throw err;
  }
  var args = {
    message: "prueba_soap",
    splitter: ":"
  };
  client.MessageSplitter(args, function (err, res) {
    if (err)
      throw err;
    console.log(res); 
  });
});