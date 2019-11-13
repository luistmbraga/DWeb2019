// node mongoimport.js --db dbName --collection collectionName --file fileName.json

var GenerateSchema = require('generate-schema')

var jsonfile = require('jsonfile')

var mongoose = require('mongoose')

const fs = require('fs')

var args = process.argv.slice(2)

if(args[0] == '--db' && args[2] == "--collection" && args[4] == '--file'){
    var dbName = args[1]

    var collectionName = args[3]

    var file = args[5]

    if(file != null && file.match('.*[.]json')){
        
        fs.exists(file, (exists)=>{
            if(exists){

                if(collectionName[collectionName.length-1] != 's'){
                    collectionName += 's'
                }

                console.log('DataBase Name: ' + dbName + '\nCollection Name: ' + collectionName + '\njsonFile: ' + file)

                createModel(collectionName, file);
                
            }
            else console.log('O ficheiro indicado não existe!\n')
        }) 
    }
    else console.log('Não forneceu um ficheiro do tipo JSON!\n')
    
}
else console.log('Não passou os argumentos corretos!\nDeverá ter o seguinte formato: node mongoimport.js --db dbName --collection collectionName --file fileName.json')


function createModel(collectionName, file){
    
    jsonfile.readFile(file, (erro, conteudo)=>{
        if(!erro){

            mongoose.connect('mongodb://127.0.0.1:27017/'+dbName, {useNewUrlParser: true,  useUnifiedTopology: true })
                    .then(()=> { console.log('Mongo ready: ' + mongoose.connection.readyState)})
                    .catch((erro)=> console.log('Mongo - erro na conexão: ' + erro ))

            // gerar a estrutura do schema
            var preschema = GenerateSchema.json('standard', conteudo);
            
            // criar o schema
            var schema = new mongoose.Schema(preschema.items.properties);
           
            // criar a collection
            var model = mongoose.model(collectionName, schema);

            model.insertMany(conteudo)
                .then(()=> {console.log("Dados inseridos com sucesso."); })
                .catch((erro)=> {console.log('Mongo - erro ao inserir: ' + erro );})
                .finally(() => mongoose.disconnect())
            
        }
        else console.log(erro)
    })
}