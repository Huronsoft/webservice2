const http = require ('http');

http.createServer(((req,res)=>{

  res.writeHead(200,{'content-Type': 'application/json'});
   
 // const persona ={
  // id:1,
  // nombre: 'william'

 // }

  //res.write (JSON.stringify (persona));
    res.write('Hola mundo')
  res.end();


}))
.listen(8080);

console.log ('escuchando',8080);