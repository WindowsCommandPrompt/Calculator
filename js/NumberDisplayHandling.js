//Pixels required to display a '1' in each of the cells -> 5, 14, 15, 25, 35, 45, 55, 65, 75, 85, 93, 94, 95, 96, 97
//Pixels required to display a '2' in each of the cells -> 3, 4, 5, 6, 12, 17, 21, 28, 38, 47, 54, 55, 56, 63, 72, 81, 91, 92, 93, 94, 95, 96, 97, 98, 99
//Pixels required to display a '3' in each of the cells -> 3, 4, 5, 6, 12, 17, 21, 28, 38, 47, 54, 55, 56, 67, 71, 78, 82, 87, 93, 94, 95, 96
//Pixels required to display a '4' in each of the cells -> 7, 8, 16, 18, 25, 28, 34, 38, 43, 48, 52, 58, 61, 68, 71, 72, 73, 74, 75, 76, 77, 78, 79, 88, 98
//Pixels required to display a '5' in each of the cells -> 1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 21, 31, 33, 34, 35, 36, 37, 41, 42, 48, 59, 69, 71, 79, 82, 88, 93, 94, 95, 96, 97
//Pixels required to display a '6' in each of the cells -> 3, 4, 5, 6, 7, 8, 12, 19, 21, 31, 33, 34, 35, 36, 37, 41, 42, 48, 51, 59, 61, 69, 71, 79, 82, 88, 93, 94, 95, 96, 97
//Pixels required to display a '7' in each of the cells -> 1, 2, 3, 4, 5, 6, 7, 8, 9, 19, 29, 38, 48, 57, 66, 76, 85, 95
//Pixels required to display a '8' in each of the cells -> 3, 4, 5, 6, 7, 12, 18, 21, 29, 31, 39, 42, 48, 53, 54, 55, 56, 57, 62, 68, 71, 79, 82, 88, 93, 94, 95, 96, 97
//Pixels required to display a '9' in each of the cells -> 3, 4, 5, 6, 7, 12, 18, 21, 29, 31, 39, 42, 48, 49, 53, 54, 55, 56, 57, 59, 69, 78, 87, 94, 95, 96
//Pixels required to display a '0' in each of the cells ->
//Pixels required to display a 'x' in each of the cells ->
//Pixels required to display a '+' in each of the cells ->
//Pixels required to display a '-' in each of the cells ->
//Pixels required to display a '÷' in each of the cells ->

$(document).ready(() => {
    form1 = () => { } //this method will display a '1'
    form2 = () => { } //this method will display a '2'
    form3 = () => { } //this method will display a '3'
    form4 = () => { } //this method will display a '4'
    form5 = () => { } //this method will display a '5'
    form6 = () => { } //this method will display a '6'
    form7 = () => { } //this method will display a '7'
    form8 = () => { } //this method will display a '8'
    form9 = () => { } //this method will display a '9'
    //Create the relevant event listeners
    //console.log($("div#keyPad").children().eq(2).children().eq(2).html())
    for (let key in $("div.numKey")){
        $("div.numKey").eq(key).on("click", () => {
            if ($("div.numKey").eq(key).html() === "1"){

            }
            else if ($("div.numKey").eq(key).html() === "2"){
            }
            else if ($("div.numKey").eq(key).html() === "3"){
            }
            else if ($("div.numKey").eq(key).html() === "4"){
            }
            else if ($("div.numKey").eq(key).html() === "5"){
            }
            else if ($("div.numKey").eq(key).html() === "6"){
            }
            else if ($("div.numKey").eq(key).html() === "7"){
            }
            else if ($("div.numKey").eq(key).html() === "8"){
            }
            else if ($("div.numKey").eq(key).html() === "9"){
            }
        });
    }
});