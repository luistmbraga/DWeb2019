var http = require('http')
var fs = require('fs')
var url = require('url')

var servidor = http.createServer(function (rep, res) {
    var partes = rep.url.split('/')
    var pag = partes[partes.length-1]
    if(pag == 'arq2html.xsl'){

        fs.readFile('arq2html.xsl', function(err, data){

            if(err){
                res.writeHead(200, {'Content.Type': 'text/html'})
                res.write('Ficheiro inexistente: ' + pag)
                res.end()
            }
            else{
                res.writeHead(200, {'Content.Type': 'text/xsl'})
                res.write(data)
                res.end()
            }            
        })
    }
    else{

        if(pag == 0){
            fs.readFile('index.html', function(err, data){
                if(err){
                    res.writeHead(200, {'Content.Type': 'text/html'})
                    res.write('Ficheiro inexistente: ' + pag)
                    res.end()
                }
                else{
                    res.writeHead(200, {'Content.Type': 'text/html'})
                    res.write(data)
                    res.end()
                }
            })
        }
        else{
            fs.readFile('dataset/arq' + pag + '.xml', function(err, data){
                if(err){
                    res.writeHead(200, {'Content.Type': 'text/html'})
                    res.write('Ficheiro inexistente: ' + pag)
                    res.end()
                }
                else{
                    res.writeHead(200, {'Content.Type': 'text/xml'})
                    res.write(data)
                    res.end()
                }
            })
        }   
    }
    
})

servidor.listen(7777)
console.log('Servidor à escuta na porta 7777...')