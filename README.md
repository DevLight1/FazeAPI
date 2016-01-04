## FazeAPI (FAPI)

Yes I named it just to call it FAP-I, get it ? XD

## What it does?

It crawls torrents from kat.cr and then logs it to 2 files one is main.json and searchresults.json 
main.json - is the json file for top 20 torrents
searchresults.json - is the json file for the search results

## Installation and usage

Install the kat-api from https://github.com/paulhobbel/kat-api //npm install kat-api won't work!
It needs express too and some other components, I was too lazy to make a package.json file, anyone wanna do it for me ? XD

You should first run the crawler with node crawler.js, this writes the json to main.json
then you should run the server with node server.js, this serves the info, search does not work for now!

### To do list

- [ ] Make a nodewebkit interface for easy installation/usage.
- [x] Top torrents
- [ ] Search function
- [ ] Posters
