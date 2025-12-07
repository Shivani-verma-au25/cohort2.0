function Pencil(name , color,price){
    console.log("this's value",this);
    this.name = name,
    this.color = color,
    this.price = price
}

Pencil.prototype.write = function(text){
        let h1 = document.createElement('h1');
        h1.innerHTML = text;
        h1.style.color = this.color;
        document.body.appendChild(h1)
    }

let pencil1 = new Pencil("doms","pink",20)
let pencil2 = new Pencil('Natraj','blue',10)
pencil1.write("Hello from doms")
pencil2.write("Hello from natraj")  
pencil1.write("Another text from doms") 
pencil2.write("Another text from natraj")   
pencil1.write("Third text from doms") 
pencil2.write("Third text from natraj")
console.log(pencil1);


