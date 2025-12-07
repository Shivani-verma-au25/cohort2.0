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


// let pencil1 = new Pencile('Natraj', 'blue', 'Natraj Ltd', 10);
// let pencil2 = new Pencile('Apsara', 'red', 'Apsara Ltd', 12);

// pencil1.write('Hello World in Blue');
// pencil2.write('Hello World in Red');


class User{
    constructor(username ,email ,address ){
        this.username = username;
        this.email = email;
        this.address = address;
        this.role = 'user';
    }

    write(text){
        let h1 = document.createElement('h1');
        h1.innerHTML = `Username : ${this.username} </br> Message : ${text}`;
        document.body.appendChild(h1);
    }
}

class Admin extends User{
    constructor(username,email ,address){
        super(username ,email ,address);
        this.role = 'admin';
    }


    deleteUser(){
        document.querySelectorAll('h1').forEach(elem =>{
            // if(elem.innerHTML.includes('username')){
                elem.remove()

        })
    }
}


let user1 = new User('john deo','johndeo@john.com','UAS',);
let user2 = new User('jane','jane@jane.com','India')
let admin1 = new Admin('admin','admi@admin.com','india')
