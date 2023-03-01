const express = require('express');
const path = require('path')

const app = express();

app.set('port', process.env.PORT || 3000);

app.use((req,res, next) => { //모든 router에 실행한다.
  console.log("모든 요청에 실행하고 싶어요")
  next();
});

//express 서버가 http 요청을 받게되면 res를 반환
 app.get('/',(req,res) => {
   res.sendFile(path.join(__dirname, 'index.html'));
 })

 app.post('/', (req,res) => {
   res.send("hellp express");
 })

 app.get('/about', (req, res)=> {
  res.send("hello express")
 })

app.listen(app.get('port'), () => {
  console.log('익스프레스로 서버 실행!');
});


//check point
//res.json() : json이 아닌 것도 json 형태로 바꾸어서 보내준다.
//res.send() : send에 전해진 arg에 따라 context-type이 자동적으로 만들어진단.
//res.end()  : 보내줄 데이터가 아무것도 없는데 response를 끝내고 싶을때 사용한다.


