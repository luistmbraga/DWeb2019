function apagaItem(ident){
    console.log('Vou tentar apagar 0 ' + ident + ' ...')
    axios.delete('/filmes/' + ident)
        .then(response => window.location.assign('/filmes/'))
        .catch(error => console.log(error))
}