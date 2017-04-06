const API = {
getItem(term){
    let Url = 'http://dlmar.com:6600/items/'+term;
    return fetch(Url).then((res) => res.json()).catch(function(err) {
          return err;
        })
}
}

module.exports = API