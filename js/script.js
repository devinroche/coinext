window.onload = function() {
    getCoinData()
    window.setInterval(getCoinData, 6000);
}

function getCoinData(){
    $.get( "https://api.coinmarketcap.com/v1/ticker", function( data ) {
        $("table tbody tr").remove();
        $.each(data, function(i, item) {
            var neg = isNegative(item.percent_change_24h)
            $('table').append('<tr><td>'+item.name+'</td><td>'+item.price_usd+'</td><td class='+neg+'>'+item.percent_change_24h+'</td></tr>');
        });
    });
}

function isNegative(val){
    if (val.indexOf('-') == 0) {
        return "negative"
    }else{
        return "positive"
    }
}
$("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
});