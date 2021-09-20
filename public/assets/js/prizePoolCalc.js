$.ajax({
    url: "http://localhost:3000/getMoney",
    type: "GET",
    dataType: 'json',
    data: {},
}).done(function (response) {

    if (response) {
        const totalMoneyArr = [];
        totalMoneyArr.push(...response);
        console.log(totalMoneyArr)
        let sumOfCollectedMoney = 0;
        for (let i = 0; i < totalMoneyArr.length; i++) {
            sumOfCollectedMoney += totalMoneyArr[i].money;
        }
        console.log(sumOfCollectedMoney);

        let weeklyMoneyPool = sumOfCollectedMoney * 0.02;
        console.log(weeklyMoneyPool);


    } else {
        alert("send request but something was wrong");
    }

}).fail(function () {
    alert("DID NOT SEND REQUEST !");

});