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
//Pixels required to display a 'x' in each of the cells -> 33, 37, 44, 46, 55, 64, 66, 73, 77
//Pixels required to display a '+' in each of the cells -> 34, 44, 51, 52, 53, 54, 55, 56, 57, 58, 64, 74
//Pixels required to display a '-' in each of the cells -> 51, 52, 53, 54, 55, 56, 57, 58
//Pixels required to display a '÷' in each of the cells -> 34, 35, 51, 52, 53, 54, 55, 56, 57, 58, 74, 75

$(document).ready(() => {
    var Cell = {
        //WARNING: DO NOT REMOVE THE VALUE: individualPixel FROM THE ATTRIBUTE 'CLASS'!
        "form0": (cellIndex) => {
            //this method will display a '0'
        },
        "form1": (cellIndex) => {
            //this method will display a '1'
            let arr = new Array(5, 14, 15, 25, 35, 45, 55, 65, 75, 85, 93, 94, 95, 96, 97);
            console.log("Displaying \"1\" in the display screen");
            for (let i in arr) {
                $("div.individualCell").eq(cellIndex).children().eq(parseInt(arr[i].toString().length === 1 ? ("0" + arr[i].toString()).charAt(0) : arr[i].toString().charAt(0))).children().eq(parseInt(arr[i].toString().length === 1 ? ("0" + arr[i].toString()).charAt(1) : arr[i].toString().charAt(1))).attr("class", "individualPixel fillPixel");
            }
        },
        "form2": (cellIndex) => {
            //this method will display a '2'
            let arr = new Array(3, 4, 5, 6, 12, 17, 21, 28, 38, 47, 54, 55, 56, 63, 72, 81, 91, 92, 93, 94, 95, 96, 97, 98, 99);
            for (let i in arr) {
                $("div.individualCell").eq(cellIndex).children().eq(parseInt(arr[i].toString().length === 1 ? ("0" + arr[i].toString()).charAt(0) : arr[i].toString().charAt(0))).children().eq(parseInt(arr[i].toString().length === 1 ? ("0" + arr[i].toString()).charAt(1) : arr[i].toString().charAt(1))).attr("class", "individualPixel fillPixel");
            }
        },
        "form3": (cellIndex) => {
            //this method will display a '3'
            let arr = new Array(3, 4, 5, 6, 12, 17, 21, 28, 38, 47, 54, 55, 56, 67, 71, 78, 82, 87, 93, 94, 95, 96);
            for (let i in arr) {
                $("div.individualCell").eq(cellIndex).children().eq(parseInt(arr[i].toString().length === 1 ? ("0" + arr[i].toString()).charAt(0) : arr[i].toString().charAt(0))).children().eq(parseInt(arr[i].toString().length === 1 ? ("0" + arr[i].toString()).charAt(1) : arr[i].toString().charAt(1))).attr("class", "individualPixel fillPixel");
            }
        },
        "form4": (cellIndex) => {
            //this method will display a '4'
            let arr = new Array(7, 8, 16, 18, 25, 28, 34, 38, 43, 48, 52, 58, 61, 68, 71, 72, 73, 74, 75, 76, 77, 78, 79, 88, 98);
            for (let i in arr) {
                $("div.individualCell").eq(cellIndex).children().eq(parseInt(arr[i].toString().length === 1 ? ("0" + arr[i].toString()).charAt(0) : arr[i].toString().charAt(0))).children().eq(parseInt(arr[i].toString().length === 1 ? ("0" + arr[i].toString()).charAt(1) : arr[i].toString().charAt(1))).attr("class", "individualPixel fillPixel");
            }
        },
        "form5": (cellIndex) => {
            //this method will display a '5'
            let arr = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 21, 31, 33, 34, 35, 36, 37, 41, 42, 48, 59, 69, 71, 79, 82, 88, 93, 94, 95, 96, 97);
            for (let i in arr) {
                $("div.individualCell").eq(cellIndex).children().eq(parseInt(arr[i].toString().length === 1 ? ("0" + arr[i].toString()).charAt(0) : arr[i].toString().charAt(0))).children().eq(parseInt(arr[i].toString().length === 1 ? ("0" + arr[i].toString()).charAt(1) : arr[i].toString().charAt(1))).attr("class", "individualPixel fillPixel");
            }
        },
        "form6": (cellIndex) => {
            //this method will display a '6'
            let arr = new Array(3, 4, 5, 6, 7, 8, 12, 19, 21, 31, 33, 34, 35, 36, 37, 41, 42, 48, 51, 59, 61, 69, 71, 79, 82, 88, 93, 94, 95, 96, 97);
            for (let i in arr) {
                $("div.individualCell").eq(cellIndex).children().eq(parseInt(arr[i].toString().length === 1 ? ("0" + arr[i].toString()).charAt(0) : arr[i].toString().charAt(0))).children().eq(parseInt(arr[i].toString().length === 1 ? ("0" + arr[i].toString()).charAt(1) : arr[i].toString().charAt(1))).attr("class", "individualPixel fillPixel");
            }
        },
        "form7": (cellIndex) => {
            //this method will display a '7'
            let arr = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 19, 29, 38, 48, 57, 66, 76, 85, 95);
            for (let i in arr) {
                $("div.individualCell").eq(cellIndex).children().eq(parseInt(arr[i].toString().length === 1 ? ("0" + arr[i].toString()).charAt(0) : arr[i].toString().charAt(0))).children().eq(parseInt(arr[i].toString().length === 1 ? ("0" + arr[i].toString()).charAt(1) : arr[i].toString().charAt(1))).attr("class", "individualPixel fillPixel");
            }
        },
        "form8": (cellIndex) => {
            //this method will display a '8'
            let arr = new Array(3, 4, 5, 6, 7, 12, 18, 21, 29, 31, 39, 42, 48, 53, 54, 55, 56, 57, 62, 68, 71, 79, 82, 88, 93, 94, 95, 96, 97);
            for (let i in arr) {
                $("div.individualCell").eq(cellIndex).children().eq(parseInt(arr[i].toString().length === 1 ? ("0" + arr[i].toString()).charAt(0) : arr[i].toString().charAt(0))).children().eq(parseInt(arr[i].toString().length === 1 ? ("0" + arr[i].toString()).charAt(1) : arr[i].toString().charAt(1))).attr("class", "individualPixel fillPixel");
            }
        },
        "form9": (cellIndex) => {
            //this method will display a '9'
            let arr = new Array(3, 4, 5, 6, 7, 12, 18, 21, 29, 31, 39, 42, 48, 49, 53, 54, 55, 56, 57, 59, 69, 78, 87, 94, 95, 96);
            for (let i in arr) {
                $("div.individualCell").eq(cellIndex).children().eq(parseInt(arr[i].toString().length === 1 ? ("0" + arr[i].toString()).charAt(0) : arr[i].toString().charAt(0))).children().eq(parseInt(arr[i].toString().length === 1 ? ("0" + arr[i].toString()).charAt(1) : arr[i].toString().charAt(1))).attr("class", "individualPixel fillPixel");
            }
        },
        "formMulSymbol": (cellIndex) => {
            //this method will display a 'x'
            let arr = new Array(33, 37, 44, 46, 55, 64, 66, 73, 77);
            for (let i in arr){
                $("div.individualCell").eq(cellIndex).children().eq(parseInt(arr[i].toString().length === 1 ? ("0" + arr[i].toString()).charAt(0) : arr[i].toString().charAt(0))).children().eq(parseInt(arr[i].toString().length === 1 ? ("0" + arr[i].toString()).charAt(1) : arr[i].toString().charAt(1))).attr("class", "individualPixel fillPixel");
            }
        },
        "formDivSymbol": (cellIndex) => {
            //this method will display a '÷'
            let arr = new Array(34, 35, 51, 52, 53, 54, 55, 56, 57, 58, 74, 75);
            for (let i in arr){
                $("div.individualCell").eq(cellIndex).children().eq(parseInt(arr[i].toString().length === 1 ? ("0" + arr[i].toString()).charAt(0) : arr[i].toString().charAt(0))).children().eq(parseInt(arr[i].toString().length === 1 ? ("0" + arr[i].toString()).charAt(1) : arr[i].toString().charAt(1))).attr("class", "individualPixel fillPixel");
            }
        },
        "formSubSymbol": (cellIndex) => {
            //this method will display a '-'
            let arr = new Array(51, 52, 53, 54, 55, 56, 57, 58);
            for (let i in arr){
                $("div.individualCell").eq(cellIndex).children().eq(parseInt(arr[i].toString().length === 1 ? ("0" + arr[i].toString()).charAt(0) : arr[i].toString().charAt(0))).children().eq(parseInt(arr[i].toString().length === 1 ? ("0" + arr[i].toString()).charAt(1) : arr[i].toString().charAt(1))).attr("class", "individualPixel fillPixel");
            }
        },
        "formAddSymbol": (cellIndex) => {
            //this method will display a '+'
            let arr = new Array(34, 44, 51, 52, 53, 54, 55, 56, 57, 58, 64, 74);
            for (let i in arr){
                $("div.individualCell").eq(cellIndex).children().eq(parseInt(arr[i].toString().length === 1 ? ("0" + arr[i].toString()).charAt(0) : arr[i].toString().charAt(0))).children().eq(parseInt(arr[i].toString().length === 1 ? ("0" + arr[i].toString()).charAt(1) : arr[i].toString().charAt(1))).attr("class", "individualPixel fillPixel");
            }
        },
        "isVacant": (cellID) => {
            //individualCell (mainCell) -> individualCellInternalPixelRow(rows) -> individualPixel (each pixel level)
            if (typeof(cellID) === "number") {
                if (!Value.isFloatingPoint(cellID)) {
                    if (cellID <= $("div.individualCell").length - 1) {
                        for (let row in $("div.individualCell").eq(cellID).children()) {
                            for (let pixel in $("div.individualCell").eq(cellID).children().eq(row).children()) {
                                if ($("div.individualCell").eq(cellID).children().eq(row).children().eq(pixel).attr("class").includes("fillPixel")) {
                                    return false;
                                } else {
                                    return true;
                                }
                            }
                        }
                    } else {
                        console.error(`Index out of range\nNum of pixels available: ${$("div.individualCell").length}\nHighestIndex: ${$("div.individualCell").length - 1}\nGiven: ${cellID}`)
                        return false;
                    }
                }
                else {
                    //Give an error message where the cellID is not a whole number.
                    console.error("");
                    return false;
                }
            }
            else {
                //this function does not accept cellID as a string, boolean, undefined, function, objects, array
                console.error(
                    `Function isVacant only accepts 'number' as parameter, but ${typeof(cellID)} was given.\n
                     Parameter given: ${(Convert.toNumberIsSuccessful(cellID) === true 
                        ? `\"${cellID}\" as a string.\nDid you mean ${cellID} as a number? Remove all quotation marks surrounding your parameter for the function`
                        : (Convert.checkRawStringResolvesToNumber(cellID) 
                            ? "" 
                            : ""
                        ))}`
                );
                return false;
            }
            return false;
        },
        "delete": (cellID) => { //If there is a possible dead pixel within the array, we can just call this function to clear the entire cell
            $("div.individualCell")
        },
        "replace": (cellID) => {

        }
    }

    var Convert = {
        "toNumberIsSuccessful": (cellID)=> {
            //try converting the string to a number
            try {
                parseInt(cellID);
                return true;
            } catch (error) {
                return false;
            }
        },
        "toBooleanIsSuccessful": (cellID) => {
            //try converting the string to a boolean
        },
        "checkRawStringResolvesToNumber": (cellID) => {
            return (
                        cellID.toString().includes("ON") ||
                        cellID.toString().includes("NE") ||
                        cellID.toString().includes("on") ||
                        cellID.toString().includes("ne") ||
                        cellID.toString().includes("On") ||
                        cellID.toString().includes("nE") ||
                        cellID.toString().includes("oN")
                            ?
                                1
                            :
                                // Check for two
                                (
                                    cellID.toString().includes("TW") ||
                                    cellID.toString().includes("WO") ||
                                    cellID.toString().includes("tw") ||
                                    cellID.toString().includes("wo") ||
                                    cellID.toString().includes("Tw") ||
                                    cellID.toString().includes("wO") ||
                                    cellID.toString().includes("tW")
                                    ?
                                        2
                                    :
                                        (
                                            cellID.toString().includes("TW") ||
                                            cellID.toString().includes("WO") ||
                                            cellID.toString().includes("tw") ||
                                            cellID.toString().includes("wo") ||
                                            cellID.toString().includes("Tw") ||
                                            cellID.toString().includes("wO") ||
                                            cellID.toString().includes("tW")
                                            ?
                                                3
                                            :
                                                ""
                                        )
                                )
                   );
        }
    }

    var Value = {
        "isFloatingPoint": (value) => {
            return value.toString().includes(".");
        }
    }

    let arr = new Array();
    var Log = {
        //This method actually logs the calculation string
        "details": (keyCode) => {
            arr.push(keyCode);
        },
        //This method will list out the calculation string
        "listDetails": () => {
            return arr.join('');
        },
        "removeFromDetails": () => {

        }
    }

    var Pointer = {
        "moveLeft": () => {

        },
        "moveRight": () => {

        }
    }

    //Create the relevant event listeners
    //console.log($("div#keyPad").children().eq(2).children().eq(2).html())
    for (let key in $("div.numKey")){
        $("div.numKey").eq(key).on("click", () => {
            if ($("div.numKey").eq(key).html() === "1") {
                //Check if the cell is vacant within the thing (Start with the cell on the extreme right)
                console.log("The user has pressed on 1");
                Log.details($("div.numKey").eq(key).html());
                for (let i = 0; i < ($("div.individualCell").length - 1); i++){
                    if (Cell.isVacant(i)){
                        console.log(i);
                        Cell.form1(i); //does not change 'index.html'
                        break;
                    }
                }
            } else if ($("div.numKey").eq(key).html() === "2") {
                //Check if the cell is vacant within the display screen
                console.log("The user has pressed on 2");
                Log.details($("div.numKey").eq(key).html());
                for (let i = 0; i < ($("div.individualCell").length - 1); i++){
                    if (Cell.isVacant(i)){
                        Cell.form2(i);
                        break;
                    }
                }
            } else if ($("div.numKey").eq(key).html() === "3") {
                //Check if the cell is vacant
                console.log("The user has pressed on 3");
                Log.details($("div.numKey").eq(key).html());
                for (let i = 0; i < ($("div.individualCell").length - 1); i++){
                    if (Cell.isVacant(i)){
                        Cell.form3(i);
                        break;
                    }
                    else {

                    }
                }
            } else if ($("div.numKey").eq(key).html() === "4") {
                //Check if the cell is vacant
                console.log("The user has pressed on 4");
                Log.details($("div.numKey").eq(key).html());
                for (let i = 0; i < ($("div.individualCell").length - 1) ; i++){
                    if (Cell.isVacant(i)){
                        Cell.form4(i);
                        break;
                    }
                    else {

                    }
                }
            } else if ($("div.numKey").eq(key).html() === "5") {
                //Check if the cell is vacant
                console.log("The user has pressed on 5");
                Log.details($("div.numKey").eq(key).html());
                for (let i = 0; i < ($("div.individualCell").length - 1) ; i++){
                    if (Cell.isVacant(i)){
                        Cell.form5(i);
                        break;
                    }
                    else {

                    }
                }
            } else if ($("div.numKey").eq(key).html() === "6") {
                //Check if the cell is vacant
                console.log("The user has pressed on 6");
                Log.details($("div.numKey").eq(key).html());
                for (let i = 0; i < ($("div.individualCell").length - 1) ; i++){
                    if (Cell.isVacant(i)){
                        Cell.form6(i);
                        break;
                    }
                    else {

                    }
                }
            } else if ($("div.numKey").eq(key).html() === "7") {
                //Check if the cell is vacant
                console.log("The user has pressed on 7");
                Log.details($("div.numKey").eq(key).html());
                for (let i = 0; i < ($("div.individualCell").length - 1) ; i++){
                    if (Cell.isVacant(i)){
                        Cell.form7(i);
                        break;
                    }
                    else {

                    }
                }
            } else if ($("div.numKey").eq(key).html() === "8") {
                //Check if the cell is vacant
                console.log("The user has pressed on 8");
                Log.details($("div.numKey").eq(key).html());
                for (let i = 0; i < ($("div.individualCell").length - 1) ; i++){
                    if (Cell.isVacant(i)){
                        Cell.form8(i);
                        break;
                    }
                    else {

                    }
                }
            } else if ($("div.numKey").eq(key).html() ===  "9") {
                //Check if the cell is vacant
                console.log("The user has pressed on 9");
                Log.details($("div.numKey").eq(key).html());
                for (let i = 0; i < ($("div.individualCell").length - 1) ; i++){
                    if (Cell.isVacant(i)){
                        Cell.form9(i);
                        break;
                    }
                    else {

                    }
                }
            }
            else if ($("div.numKey").eq(key).html() === "×"){
                console.log("The user has pressed on ×");
                Log.details($("div.numKey").eq(key).html());
                for (let i = 0; i < ($("div.individualCell").length - 1) ; i++){
                    if (Cell.isVacant(i)){
                        Cell.formMulSymbol(i);
                        break;
                    }
                    else {

                    }
                }
            }
            else if ($("div.numKey").eq(key).html() === "-"){
                console.log("The user has pressed on -");
                Log.details($("div.numKey").eq(key).html());
                for (let i = 0; i < ($("div.individualCell").length - 1) ; i++){
                    if (Cell.isVacant(i)){
                        Cell.formSubSymbol(i);
                        break;
                    }
                    else {

                    }
                }
            }
            else if ($("div.numKey").eq(key).html() === "+"){
                console.log("The user has pressed on +");
                Log.details($("div.numKey").eq(key).html());
                for (let i = 0; i < ($("div.individualCell").length - 1) ; i++){
                    if (Cell.isVacant(i)){
                        Cell.formAddSymbol(i);
                        break;
                    }
                    else {

                    }
                }
            }
            else if ($("div.numKey").eq(key).html() === "÷"){
                console.log("The user has pressed on ÷");
                Log.details($("div.numKey").eq(key).html());
                for (let i = 0; i < ($("div.individualCell").length - 1) ; i++){
                    if (Cell.isVacant(i)){
                        Cell.formDivSymbol(i);
                        break;
                    }
                    else {

                    }
                }
            }
            else if ($("div.numKey").eq(key).children().html() === "backspace"){

            }
            else if ($("div.numKey").eq(key).children().html() === "clear_all"){

            }
            else if ($("div.numKey").eq(key).children().html() === "memory"){

            }
            else if ($("div.numKey").eq(key).children().html() === "input"){
                console.log(Log.listDetails());
            }
        });
    }
});