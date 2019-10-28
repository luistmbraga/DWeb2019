function apagaItem(ident){
    console.log('Vou tentar apagar 0 ' + ident + ' ...')
    axios.delete('/' + ident)
        .then(response => window.location.assign('/'))
        .catch(error => console.log(error))
}