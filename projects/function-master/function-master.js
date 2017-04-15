function objectValues(obj) {
    var array =[];
    for (var key in obj){
        return Object.values(obj);
    }
    return  array.push(Object.values(obj));
}

function keysToString(obj) {
        var string = Object.keys(obj);
    
    return string.join(" ");
}

function valuesToString(obj) {
   var array = [];
    for (var key in obj) {
        if (typeof obj[key] === 'string') {
       array.push(obj[key]);
        }
    }
    return array.join(" ");
}

function arrayOrObject(arg) {
    if (Array.isArray(arg) === true) {
        return 'array';
    }
    else if (typeof arg === 'object') {
        return 'object';
    }
}

function capitalizeWord(string) {
    return string[0].toUpperCase() + string.slice(1, string.length);
}

function capitalizeAllWords(string) {
        var stringArray = string.split(" ");
    for(var j = 0; j < stringArray.length; j++) {
    stringArray[j] = capitalizeWord(stringArray[j]);
    
    }
    return stringArray.join(" ");
}

function welcomeMessage(obj) {
       if (obj.hasOwnProperty('name')) {
           return "Welcome " + capitalizeWord(obj.name) + "!"
       }
}

function profileInfo(obj) {
    if (obj.hasOwnProperty('name') && obj.hasOwnProperty('species')) {
        return capitalizeWord(obj.name) + " is a " + capitalizeWord(obj.species);
    }
}

function maybeNoises(obj) {
    if (obj.hasOwnProperty('noises') && obj.noises.length > 0){
        return obj.noises.join(" ");
    }
    else {
        return 'there are no noises';
    }
}

function hasWord(string, word){
    var array = string.split(" ");
    for (var i = 0; i < array.length; i++) {
        if (array[i] === word.toLowerCase()) {
            return true;
    }
    
} return false;
}

function addFriend(name1, obj) {
     obj.friends.push(name1);
     return obj;
}

function isFriend(name1, obj) {
  if (Array.isArray(obj.friends)){
  for (var i = 0; i < obj.friends.length; i++) {
      if (obj.friends[i] === name1){
          return true;
      }
  } 
  } return false;
}

function nonFriends(name1, arr) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].name !== name1){
         if (!isFriend(name1, arr[i])) {
             arr2.push(arr[i].name);
         }
        }
    } return arr2;
    
}       
function updateObject(obj, key, value) { //Takes an obj key and value
    obj[key] = value;
    return obj;
}

function removeProperties(obj, arr) {
    for (var i =0; i < arr.length; i++) {
delete obj[arr[i]];
}
return obj;
}

function dedup(arr) {
   var arr2 =[];
   for (var i = 0; i <arr.length; i++) {
      if(arr2.indexOf(arr[i]) < 0) {
          arr2.push(arr[i]);
      }
   }
   return arr2;
}