$(document).ready(function () {

    $('#leaderboardTable').DataTable({
        responsive: true,
        "order": [
            [2, "desc"]
        ],
        "columnDefs": [

            {
                responsivePriority: 1,
                targets: 0
            },
            {
                responsivePriority: 2,
                targets: 2
            }

        ],

        "destroy": true,

        "ajax": {
            "url": "http://localhost:3000/totalMoney",
            "type": "GET",
            "datatype": "JSON",
            "data": {},
            "dataSrc": ""
        },
        "columns": [
            {
                "data": "name"
            },

            {
                "data": "country",
            },

            {
                "data": "money"
            }
        ]
    });
});