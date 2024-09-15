let person = {
    name: "unknown",
    print() {
        console.log(this.name + " " + this)
    }
}

let lena = Object.create(person, {name: {value: "Lena"}});
lena.print();