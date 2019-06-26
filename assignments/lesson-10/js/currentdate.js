function currentDate() {
    var today = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
    var monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    var n = weekday[today.getDay()];
    var year = today.getFullYear();
    var day = today.getDay();
    var m = monthNames[today.getMonth()];

    document.getElementById("displayDate").innerHTML = n + ", " + day + " " + m + " " + year;
}
currentDate();