class Pencile{
    constructor(name ,color , company,price){
        this.name = name;
        this.color = color;
        this.company = company;
        this.pric = price;
    }


    write(text) {
        let h1 = document.createElement('h1');
        h1.innerHTML = text;
        h1.style.color = this.color;
        document.body.appendChild(h1);
    };

    remove(){
        document.body.querySelectorAll('h1').forEach(elem => {
            if (elem.style.color === this.color) {
                elem.remove();
            }
        })
    };

    getPriceOfPencil(){
        let h1 = document.createElement('h1');
        h1.innerHTML = `The price of ${this.name} pencil is ${this.pric} Rs.`
        h1.style.color = this.color;
        document.body.appendChild(h1);
        return `The price of ${this.name} pencil is ${this.pric} Rs.`;  
    }


}


let pencil1 = new Pencile('Natraj', 'blue', 'Natraj Ltd', 10);
let pencil2 = new Pencile('Apsara', 'red', 'Apsara Ltd', 12);

pencil1.write('Hello World in Blue');
pencil2.write('Hello World in Red');