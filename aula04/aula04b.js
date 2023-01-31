/**Módulo FS - manipular arquivos em Node
 * 
 */
// criando arquivos



const http = require('http')
const fs = require('fs')
const porta = process.env.PORT

const server=http.createServer((req, res)=>{
 fs.appendFile('teste.txt','Curso de Node - CFB Cursos',(err)=>{
   if(err) throw err
   console.log('Arquivo Criado')
   res.end()
 })

})

server.listen(porta || 3000, ()=> {console.log('SERVIDOR RODANDO PORTA 3000')})