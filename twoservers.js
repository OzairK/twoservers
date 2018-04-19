var http = require('http');
var PORT1 = 7000;                                                   // generic number that people use. 3000
var PORT2 = 7500;                                                   // port is like a channel

function handleRequestS1(request, response){
    response.end("you are cool");
}

function handleRequestS2(request, response){
    response.end("you are not cool")
}

var server1 = http.createServer(handleRequestS1);
var server2 = http.createServer(handleRequestS2)

server1.listen(PORT1, function(){
    console.log("you are awesme");
});

server2.listen(PORT2, function(){
    console.log("you suck");
})

