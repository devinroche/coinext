const remote = require('electron').remote;

window.onload = function() {
    getCoinData()
    window.setInterval(getCoinData, 6000);
}

function getCoinData(){
    $.get( "https://api.coinmarketcap.com/v1/ticker", function( data ) {
        $("#myTable tr").remove();
        $.each(data, function(i, item) {
            var neg = isNegative(item.percent_change_24h)
            $('table').append('<tr data-userid='+item.symbol+'><td style="display: none">'+item.symbol+'</td><td>'+item.name+'</td><td>'+item.price_usd+'</td><td class='+neg+'>'+item.percent_change_24h+'</td></tr>');
        });
        filterTable()
    });
}

function isNegative(val){
    if (val.indexOf('-') == 0) {
        return "negative"
    }else{
        return "positive"
    }
}
var searchToken = ""
$("#myInput").on("keyup", function() {
    searchToken = $(this).val().toLowerCase();
    filterTable()
});

function filterTable(){
    $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(searchToken) > -1)
    });
}
function closeWindow(){
    remote.getCurrentWindow().close()
}