function isLeap(year) {

    if ((year % 4 === 0) && (year % 100 !== 0)) {
        return "Leap year.";
    } else if ((year % 4 === 0) && (year % 100 === 0) && (year % 400 === 0)) {
        return "Leap year.";
    }

}