const Store = require('electron-store');
const store = new Store();

function getPortfolio(){
    if(typeof store.get('portfolio') === "undefined"){
        store.set('portfolio', {})
    }

    return store.get('portfolio')
}

function addPortfolio(token, amount){
    if(typeof store.get('portfolio.'+token) === 'undefined'){
        store.set('portfolio.'+token, amount)
    }
    else{
        var prevAmount = store.get('portfolio.'+token)
        store.set('portfolio.'+token, amount+prevAmount);
    }
}

module.exports = {
    getPortfolio: getPortfolio,
    addPortfolio: addPortfolio
}