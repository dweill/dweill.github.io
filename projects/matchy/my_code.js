var animal = {};
animal.species = "reptile";
animal["name"] = "Chester";
animal.noises = [];
console.log(animal);

var noises = [];
noises = ["hiss"];




noises.push("slither");


noises.unshift("pahh");

noises[noises.length] = "shala";
console.log(noises.length);
console.log(noises[noises.length-1]);
console.log(noises);

animal["noises"] = noises;

animal.noises.push("sloosh");
console.log(animal);

var animals = [];
animals.push(animal);
console.log(animals);

var duck = {species: "duck", name: "Jeremy", noises: ["quack", "honk", "sneeze", "woosh"]};
animals.push(duck);
console.log(animals);
var panda = {species: "panda", name: "Jack", noises: ["grr", "growl", "chew", "sniff"]};
var opossum = {species: "opossum", name: "Ivan", noises: ["ree", "squeak", "crunch", "retch"]};
animals.push(panda, opossum);
console.log(animals);
console.log(animals.length);

//We chose an array, because it can contain objects, which our friends will be, or simply their name, and it is ordered.
var friends = [];
function randAn() {
    var randName = Math.floor(Math.random() * animals.length);
        if(animals[randName].name === animals[0].name) {
        return randAn();
    }
    else{
        
     return animals[randName].name;
    }
    
}
randAn();
friends.push(randAn());

console.log(friends);

animals[1].friends = friends;
console.log(animals);
console.log("This is Object Animals" + animals[1]);
function search(anName) {
    for (var i = 0; i < animals.length; i++){
        if (animals[i].name === anName){
        return animals[i];
    }
    
    }
    return null;
}
console.log(search());

function edit(anName, obj) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i]['name'] === anName) {
            return animals.splice(i, 1, obj);
        }
    }
}

edit();

function remove(anName) {
    for (var i = 0; i < animals.length; i++) {
        if (animals[i]['name'] === anName) {
            return animals.splice(i,1);
        }
    }
}

remove();

function create(obj) {
    
    if (obj['name'].length > 0 && obj['species'].length > 0) {
        for (var i = 0; i <animals.length; i++){
        if (obj.name === animals[i].name){
         return null;   
        }
    }
    }
        return animals.push(obj);
}

create();