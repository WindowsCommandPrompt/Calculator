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
//Pixels required to display a '(' in each of the cells ->
//Pixels required to display a ')' in each of the cells ->
//Pixels required to display a '%' in each of the cells ->

$(document).ready(() => {
  var Util = 
  {
    "Cell": {
      //WARNING: DO NOT REMOVE THE VALUE: individualPixel FROM THE ATTRIBUTE 'CLASS'!
      "form0": (cellIndex) => {
          //this method will display a '0'
          let arr = new Array();
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
      "delete": (cellIndex) => { //If there is a possible dead pixel within the array, we can just call this function to clear the entire cell
        $("div.individualCell").eq(cellIndex).attr("individualPixel"); 
        Util.Log.clearDetails(); 
      },
      "replace": (cellIndex, newItem) => {
        //clear that pixel first
        $("div.individualCell").eq(cellIndex).attr("individualPixel"); 
        if (newItem.toString() === "1"){
          Util.Cell.form1(cellIndex); 
        }
        else if (newItem.toString() === "2"){
          Util.Cell.form2(cellIndex); 
        }
        else if (newItem.toString() === "3"){
          Util.Cell.form3(cellIndex); 
        }
        else if (newItem.toString() === "4"){
          Util.Cell.form4(cellIndex); 
        }
        else if (newItem.toString() === "5"){
          Util.Cell.form5(cellIndex); 
        }
        else if (newItem.toString() === "6"){
          Util.Cell.form6(cellIndex); 
        }
        else if (newItem.toString() === "7"){
          Util.Cell.form7(cellIndex); 
        }
        else if (newItem.toString() === "8"){
          Util.Cell.form8(cellIndex); 
        }
        else if (newItem.toString() === "9"){
          Util.Cell.form9(cellIndex); 
        }
      }, 
      "clearAll": () => {
        //Clear all of the pixel
        for(let i in $("div.individualCell").length){
          $("div.individualCell").attr("individualPixel"); 
        }
      }
    }, 
    "Value": {
        "isFloatingPoint": (value) => {
            return value.toString().includes(".");
        }
    }, 
    "arr": new Array(),
    "map": new Map(), 
    "Log": {
      //This method actually logs the calculation string
      "details": (keyCode) => {
          Util.arr.push(keyCode);
      },
      //This method will list out the calculation string
      "listDetails": () => {
          return Util.arr.join('');
      },
      "clearDetails": () => {
          do {
            Util.arr.pop()
          } 
          while (Util.arr.length > 0); 
      }, 
      "clearDetailsAt": (...arrIndex) => {
        for (let i = 0; i < arrIndex.length; ++i){
          map.remove(i); 
        }
        
      }, 
      "displayUtil": () => {
        return Util.map; 
      }, 
      "addToDisplayUtil": (key, value) => {
        Util.map.set(key, value); 
      }, 
      "removeFromDisplayUtil": (key) => {
        Util.map.remove(key); 
      }
    }, 
    "Pointer": {
      //Return to the start of the input string
      "toDefault": () => {
        return 0; 
      }, 
      "forward": (cellID) => {
        return cellID + 1; 
      }, 
      "backward": () => {
        return cellID - 1; 
      }, 
      "getCurrentPosition": () => {
        return cellID; 
      }
    }
  } 

  let VINDEX = 12; 
  //Create the relevant event listeners
  //console.log($("div#keyPad").children().eq(2).children().eq(2).html())
  /*
  Check if the current cell contains a number, if the cell contains a number, move to the next cell and display the number within the cell
   */
  for (let key in $("div.numKey")){ //loop through $("div.numKey")
    $("div.numKey").eq(key).on("click", () => {
      if ($("div.numKey").eq(key).html() === "1") {
        //Check if the cell is vacant within the thing (Start with the cell on the extreme right)
        console.log("The user has pressed on 1");
        Util.Log.details($("div.numKey").eq(key).html()); //Set calculation string to be displayed to the user
        Util.Log.addToDisplayUtil(Util.Pointer.getCurrentPosition(), $("div.numKey").eq(key).html()); //map cell to the corresponding number
        
      }
      if ($("div.numKey").eq(key).html() === "2") {
        //Check if the cell is vacant within the display screen
        console.log("The user has pressed on 2");
        Util.Log.details($("div.numKey").eq(key).html());
        for (let i = 0; i < ($("div.individualCell").length); i++){

        }
      }
      else if ($("div.numKey").eq(key).html() === "3") {
          //Check if the cell is vacant
          console.log("The user has pressed on 3");
          Util.Log.details($("div.numKey").eq(key).html());
          for (let i = 0; i < ($("div.individualCell").length); i++){

          }
      }
      else if ($("div.numKey").eq(key).html() === "4") {
          //Check if the cell is vacant
          console.log("The user has pressed on 4");
          Util.Log.details($("div.numKey").eq(key).html());
          for (let i = 0; i < ($("div.individualCell").length) ; i++){

          }
      }
      else if ($("div.numKey").eq(key).html() === "5") {
          //Check if the cell is vacant
          console.log("The user has pressed on 5");
          Util.Log.details($("div.numKey").eq(key).html());
          for (let i = 0; i < ($("div.individualCell").length) ; i++){

          }
      }
      else if ($("div.numKey").eq(key).html() === "6") {
          //Check if the cell is vacant
          console.log("The user has pressed on 6");
          Util.Log.details($("div.numKey").eq(key).html());
          for (let i = 0; i < ($("div.individualCell").length) ; i++){

          }
      }
      else if ($("div.numKey").eq(key).html() === "7") {
          //Check if the cell is vacant
          console.log("The user has pressed on 7");
          Util.Log.details($("div.numKey").eq(key).html());
          for (let i = 0; i < ($("div.individualCell").length) ; i++){

          }
      }
      else if ($("div.numKey").eq(key).html() === "8") {
          //Check if the cell is vacant
          console.log("The user has pressed on 8");
          Util.Log.details($("div.numKey").eq(key).html());
          for (let i = 0; i < ($("div.individualCell").length) ; i++){

          }
      }
      else if ($("div.numKey").eq(key).html() ===  "9") {
          //Check if the cell is vacant
          console.log("The user has pressed on 9");
          Util.Log.details($("div.numKey").eq(key).html());
          for (let i = 0; i < ($("div.individualCell").length) ; i++){

          }
      }
      else if ($("div.numKey").eq(key).html() === "×"){
          console.log("The user has pressed on ×");
          Util.Log.details($("div.numKey").eq(key).html());
          for (let i = 0; i < ($("div.individualCell").length) ; i++){

          }
      }
      else if ($("div.numKey").eq(key).html() === "-"){
          console.log("The user has pressed on -");
          Util.Log.details($("div.numKey").eq(key).html());
          for (let i = 0; i < ($("div.individualCell").length) ; i++){

          }
      }
      else if ($("div.numKey").eq(key).html() === "+"){
          console.log("The user has pressed on +");
          Util.Log.details($("div.numKey").eq(key).html());
          for (let i = 0; i < ($("div.individualCell").length) ; i++){

          }
      }
      else if ($("div.numKey").eq(key).html() === "÷"){
          console.log("The user has pressed on ÷");
          Util.Log.details($("div.numKey").eq(key).html());
          for (let i = 0; i < ($("div.individualCell").length) ; i++){

          }
      }
      else if ($("div.numKey").eq(key).children().html() === "backspace"){
        console.log("The user has pressed the backspace key"); 
        //Remove the last element from the list. 
        Util.Log.removeFromDetails(); 
      }
      else if ($("div.numKey").eq(key).children().html() === "clear_all"){

      }
      else if ($("div.numKey").eq(key).children().html() === "memory"){

      }
      else if ($("div.numKey").eq(key).children().html() === "input"){
      }
    });
  }
});