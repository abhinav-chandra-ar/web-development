function Person(name,age,place){
    this.name = name
    this.age = age
    this.place = place
    this.display = function(){
        console.log("Name : " + this.name + "Age : " + this.age + "Place : " + this.place )
    }
}

var Abhinav = new Person("Abhinav", 24 , "TVPM")
var Gowri = new Person("Gowri",23,"Aluva")

Abhinav.display()
Gowri.display()