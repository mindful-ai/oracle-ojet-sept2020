var person = {
    firstName: "John",
    lastName : "Doe",
    language : "",
    fullName : function(){
        return this.firstName + ' ' + this.lastName
    },
    get lang() {
     return this.language;
    },
    set lang(newlang) {
        this.language = newlang
    }
}

// Set an object property using a setter:
person.lang = "english";
// Display data from the object using a getter:
console.log(person.lang);
console.log(person.fullName())
