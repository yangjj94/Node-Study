const https = require('https');
const fs = require('fs');

//Sync 서버를 초기화할때 사용가능
//서버가 시작전에 인증값을 넣어 줘야 함 letsencrypt
https.createServer({
  cert: fs.readFileSync('도메인 인증서 경로'),
  key: fs.readFileSync('도메인 비밀키 경로'),
  ca: [
    fs.readFileSync('상위 인증서 경로'),
    fs.readFileSync('상위 인증서 경로'),
  ],
}, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
})
  .listen(443, () => { //https는 443을 사용해야 생략가능
    console.log('443번 포트에서 서버 대기 중입니다!');
  });
