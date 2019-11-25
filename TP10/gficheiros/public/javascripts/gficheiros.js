function showFicheiro(f){
    if(f.mimetype == 'image/png')
        var ficheiro = $('<img src="/ficheiros/'+f.name+'" width="80%"/>')
    else
        var ficheiro = $('<p>'+JSON.stringify(f)+'</p>')
    var download = $('<div><a href="/download/'+f.name+'">Downloads</a></div>')
    $('#display').empty()
    $('#display').append(ficheiro, download)
    $('#display').modal()
}

$(function(){
    var cont = 1

    $('#mais1').click(e => {
        e.preventDefault()
        cont++
        var campo = $('<div></div>', {class: 'w3-container', id: 'f'+cont})

        var desc = $('<div></div>', {class: 'w3-cell-row', id: 'desc'+cont})
        var descLabel = $('<label class="w3-cell">Descrição</label>')
        var descInput = $('<input/>', {class: 'w3-input w3-cell', type: "text", name: "desc"})
        
        var ficheiro = $('<div></div>', {class: 'w3-cell-row', id: 'ficheiro'+cont})
        var ficheiroLabel = $('<label class="w3-cell">Ficheiro</label>')
        var ficheiroInput =  $('<input/>', {class: 'w3-input w3-cell', type: "file", name: "ficheiro"})

        $("#lista").append(campo)

        $("#f"+cont).append(desc)

        $("#desc"+cont).append(descLabel, descInput)

        $("#f"+cont).append(ficheiro)
        $("#ficheiro"+cont).append(ficheiroLabel, ficheiroInput)
    })
})