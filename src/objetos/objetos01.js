const cookie = {
    name: "Chispas de chocolate",
    isGlutenFree: false,
    "+Yummy": true,

    eatCookie: function () {
        console.log("Estoy comiendo una galleta " + this.name);
    }
};

console.log(cookie.name);

cookie.name = "Chispas de chocolate 02";

console.log(cookie.name);
console.log(cookie["+Yummy"]);

cookie.eatCookie();


// Creando una clase
class Cookie {

    constructor(p_name, p_isGlutenFree) {
        this.name = p_name;
        this.isGlutenFree = p_isGlutenFree;
    }

    eatCookie() {
        console.log("Estoy comiendo una galleta " + this.name);
    }
}

const myCookie = new Cookie("Maria", false);

console.log(myCookie.name);
console.log(myCookie["name"]);
myCookie.eatCookie();




