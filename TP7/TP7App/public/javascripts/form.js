function toList(campo) {
    var lista = [];
    $("#" + campo + " li").each(function() 
    { 
        if($(this).find("input").val() != ''){
            lista.push($(this).find("input").val());
        }
    });
    return lista;
}

function adicionaItem(method, id){

    var tit = $("#title").val();
    var ano = $("#year").val();

    if(tit != '' && ano != ''){
        var elenco = toList("cast");
        var generos = toList("genres");

        var data =  {title: tit, year: ano,
            cast: elenco,
            genres: generos
        }
        console.log(data);

        postEatualiza(method, data, id)
    }
    else{
        alert('O título e o ano têm de estar preenchidos.');
    }
}

function postEatualiza(method, data, id){
    if(method == 'post'){
        axios.post("/filmes/filme", data)
        .then(response => window.location.assign('/filmes/'))
        .catch(error => console.log(error))
    }
    else{
        axios.put("/filmes/"+id, data)
        .then(response => window.location.assign('/filmes/'))
        .catch(error => console.log(error))
    }
}