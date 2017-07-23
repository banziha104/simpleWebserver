---
# 웹서버 만들기

---
## http 서버 기본
```javascript
var http = require('http');          //http 모듈사용
var server = http.createServer();    //http 서버 객체 생성
var port = 8020;                     //포트 번호
server.listen(port,function () {     //웹 서버시작
    console.log("server running... 포트 번호 : " + port);
});
```
서버 객체의 메소드
<li> listen(port,[hostname],[backlog],[callback]) 서버를 실행 및 대기
<li> close(callback) 서버를 종료함

---
## 클라이언트 요청 이벤트 처리

<li> connection : 클라이언트가 접속하여 연결이 만들어질 때 발생하는 이벤트
<li> request : 클라이언트가 요청할 때 발생하는 이벤트
<li> close : 서버를 종료할 때 발생하는 이벤트

```javascript
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
```

## res 객체 사용
<li>writeHead(statusCode,[,statustMessage],[,headers]) 응답으로 보낼 헤더를 만듬
<li>write(chunck,[encoding],[,callback]) 응답 본문데이터를 만듬,여러번 호출될 수 있음
<li>end([data],[,encoding],[,callback]) 클라이언트로 응답을 전송, 파라미터에 데이터가 들어 있다면
데이터도 함께 보냄, callback 함수가 지정되면 응답이 전송된 후 콜백 함수가 호출됨.

