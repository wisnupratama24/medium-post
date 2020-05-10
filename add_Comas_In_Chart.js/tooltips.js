tooltips: {
    callbacks: {
        label: function (tooltipItem, data) {
            return tooltipItem.yLabel.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); //! untuk membuat tooltip menjadi number format
        },
    },
},