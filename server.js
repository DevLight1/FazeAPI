var express = require('express');
var fs = require('fs');
var app = express();
var jsoner = require(__dirname + '/main.json')
var kat = require('kat-api');
var util = require('util');
var log_file = fs.createWriteStream(__dirname + '/searchresults.json', {flags : 'w'});
var log_stdout = process.stdout;
console.log = function(d) { //
  log_file.write(util.format(d) + '\n');
  log_stdout.write(util.format(d) + '\n');
};

app.get('/', function(req, res){
var keyword = req.query.keywords;
res.send(jsoner);

if(keyword == undefined){
//do nothing
}
else{
kat.search({
query: keyword,
}).then(function (response) {
	var quotes = '"';
	var startingOfJson = "{" + quotes + "MovieList" + quotes + ":" + "[";
        var endingOfJson = "}";
	var imagePoster = "http://static.wixstatic.com/media/02ca26_69f72cbcb2c04ff9aface357d8508d89.gif";
	var genres = quotes + "genres" + quotes + ":" + "[" + quotes + "MovieFromFAPI" + quotes + "]" + ",";
	var itemStart =  quotes + "items" + quotes + ":" + "[{";
	var itemEnd =  "}]";
	 
	console.log(startingOfJson); 
	for(i =0; i <= 1; i++){
		var title = response.results[i].title;
		var torrentMagnet = response.results[i].magnet;
		var torrentSeeds = response.results[i].seeds;
		var torrentPeers = response.results[i].peers;
		var torrentId = response.results[i].hash;
		var randomNumberForIMDB = Math.floor((Math.random() * 10000000) + 1);
	    var randomIMDB = 'tt' + randomNumberForIMDB; 

        console.log(quotes + "title" + quotes + ":" + quotes + title + quotes + ",");
        console.log(quotes + "imdb" + quotes + ":" + quotes + randomIMDB + quotes + ",");
        console.log(quotes + "poster_med" + quotes + ":" + quotes + imagePoster + quotes + ",");
        console.log(quotes + "poster_big" + quotes + ":" + quotes + imagePoster + quotes + ",");
        console.log(genres);
        console.log(itemStart);
        console.log(quotes + "torrent_magnet" + quotes + ":" + quotes + torrentMagnet + quotes + ",");
        console.log(quotes + "torrent_seeds" + quotes + ":" + quotes + torrentPeers + quotes + ",");
        console.log(quotes + "torrent_seeds" + quotes + ":" + quotes + torrentPeers + quotes + ",");
        console.log(quotes + "id" + quotes + ":" + quotes + torrentId + quotes);
		console.log(itemEnd)
		if(i == 1){
		console.log("}");
	}
	else{
		console.log("},")
	}
	
}
console.log("]}");
}).catch(function (error) {
    console.log('an error occured');
    console.log(error)
});
}
});

var server = app.listen(1337, function () {
  var host = server.address().address;
  var port = server.address().port;
});
