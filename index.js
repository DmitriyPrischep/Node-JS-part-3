var express = require('express')
var app = express()

app.get('/', function (req, res) {

	var q = req.query;
	var a = q.fullname;
	
	if (a === '' || a === undefined) {
		res.send('Invalid fullname');
		return;
	}
    
	var arr = a.split(' ');

	switch (arr.length) {
			case 1:
				res.send(arr[0])
			break;
			case 2:
				res.send(arr[1] + ' ' + arr[0][0] + '.');
			break;
			case 3:
				res.send(arr[2] + ' ' + arr[0][0] + '. ' + arr[1][0] + '.');
			break;
			default:
			 res.send('Invalid fullname');
			break;
	}
	
})

app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
})