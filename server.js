var http = require('http');          //http 모듈사용
var server = http.createServer();    //http 서버 
var port = 8021;                     //포트 번호
server.listen(port,function () {     //웹 서버시작 
    console.log("server running... 포트 번호 : " + port);
});

server.on('connection',function (socket) {
    var addr = socket.address();
    console.log('클라이언트가 접속함' + addr.address + "" + addr.port);
});

server.on('request',function (req,res) {
   console.log("클라이언트 요청이 들어옮");
   console.dir(req);
});

server.on('close',function () {
    console.log('서버가 종료됌');
});