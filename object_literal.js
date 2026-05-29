var Per = {
    name : "Abhinav",
    age : 24,
    place : "TVPM",
    display:function(){
        console.log(this.name)
        return
    }
}

for (x in Per){
    console.log(x)
}

for (x in Per){
    console.log(Per[x])
}

Per.dob = "18/08/2002"
Per.display = function(){
    console.log(this.age)
    return
}

console.log("Speacial line :")
console.log(Per.display())