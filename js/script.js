const remote = require('electron').remote;

window.onload = function () {
    getCoinData()
    window.setInterval(getCoinData, 6000);
}

function getCoinData() {
    $.get("https://api.coinmarketcap.com/v1/ticker", function (data) {
        $("#myTable tr").remove();
        $.each(data, (i, item) => {
            const neg = isNegative(item.percent_change_24h)
            $('#myTable').append('<tr data-userid=' + item.symbol + '><td style="display: none">' + item.symbol + '</td><td>' + item.name + '</td><td>' + item.price_usd + '</td><td class=' + neg + '>' + item.percent_change_24h + '</td></tr>');
        });
        filterTable()
    });
}

function isNegative(val) {
    if (val.indexOf('-') == 0) {
        return "negative"
    } else {
        return "positive"
    }
}
var searchToken = ""
$("#myInput").on("keyup", function () {
    searchToken = $(this).val().toLowerCase();
    filterTable()
});

function filterTable() {
    $("#myTable tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(searchToken) > -1)
    });
}

function closeWindow() {
    remote.getCurrentWindow().close()
}

$("#toggle-2").hide();

$("#portfolio").click(function () {
    $("#all-coins").hide();
    $("#toggle-1").hide();

    $("#toggle-2").show();
    $("#portfolio").show()
});

$("#add-form").hide();
$("#add-coin").click(function () {
    $("#add-form").toggle();

});