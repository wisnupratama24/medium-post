options: {
    scales: {
        yAxes: [{
            gridLines: {
                color: "#ECECEC",
            },
            ticks: {
                fontSize: 10,
                callback: function (value, index, values) {
                    return addCommas(value); //! panggil function addComas tadi disini
                }
            }
        }]
    }

}