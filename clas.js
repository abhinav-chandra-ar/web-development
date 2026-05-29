class Sample{
    Samplehello(){
        console.log("This is sample")
    }
    
}
class Hello extends Sample{

    constructor(num1,num2){
        super()
        this.num1 = num1
        this.num2 = num2
    }

    hello(){
        console.log("helllo " + (this.num1+this.num2))
    }
}

var hey = new Hello(10,20)
hey.hello()
hey.Samplehello()
