/*
function CreateObject(a) { this.a = a }
CreateObject.prototype.setA = (a) => { this.a = a; };

 function CreateObject(b, c, d, e) {
    this.b = b;
    this.c = () => { return (Math.floor(this.b + 1 / 45) + Math.sin(Math.PI / 2) * 100000 % 12 - this.b/this.b * this.b * ( this.b + 2 ) >= 0 ? "It is greater than zero" : "smaller than zero" ); }
    this.d = () => { return (typeof(this.c() + " and it is a string") == "boolean" ? "Duh" : "You dumb"); };
    this.e = (param1, param2, param3) => {
        return (param4, param5, param6) => {
            return () => {
                return (() => { return () => {
                    return () => {
                        return (() => {return Math.random() * 90 })()
                    }
                }})();
            };
        }
    };
}

//setInterval(() => {console.log(new CreateObject(1, 2, 3, 4).e(5, 6, 7)(8, 9, 10)()()())}, 1000);
//console.log(new CreateObject(1, 2, 3, 4).e(new CreateObject(1, 2, 3, 4).c(), 12, new CreateObject(12, 12, 12, (this.c + 12342)).c())(12, 12, new CreateObject(0.5, 12, 12.4, 12).e(1, 1, 1)(1, 5, 6)())() >= 100 ? "Yes it is!" + (new CreateObject(new CreateObject(1,1,1,1).b, 3, 4, 5).b >= new CreateObject(1,1,1,1).e(1,1,1,1)(1000,3423422,2,2)() ? "\nPart 2 too is greater" : "\nPart two is not greater"): "No it is not");

function Function1(a, b){
     this.a = a;
     this.b = () => { return b + 1 }
}

function Function2(a, b){
     Function1.call(this, a, b)
     this.e = () => { return this.b() + 1 }
}

//console.log((new Function2(1, 2)).e());

b = () => {
    arr = new Array("Key1", "Key2", "Key3", "Key4", "Key5", "Key6");
    arr1 = new Array(1, 2, 3, 4, 5, 6);
    mapFinal = new Map();
    for (let i in arr){
        mapFinal.set(arr[i], arr1[i]);
    }
    return mapFinal;
}

c = null;
d = 1;

a = () => {
    c = new Array(); //c now becomes '[]'
    return b().forEach((value, key) => {
        d = 12;
        c.push([[value], [key]].reverse()[1][0]) //pushing elements into the initialized array
    });
}

a() //MUST CALL THE FUNCTION FIRST!

console.log(c);  //[1, 2, 3, 4, 5, 6]
*/
















//console.log(jQuery("main").length);





















