const person = {
    name: "Alice",
    hobbies: ["reading", "swimming"],
    // whatAmI: this, <--- 호이스팅 단계에서 평가됨. 따라서 undefined
    sayHelloRegularly: function () {
        console.log("Hello, I'm " + this.name); // "this" refers to the person object
    },
    sayHelloWithArrow: () => {
        //Arrow functions don't create their own this.
        // Instead, they "inherit" or "capture" the this from wherever they were written 
        // (their lexical scope):
        console.log("Hello, I'm " + this.name); // "this" refers to the person object
    },

    // ---- 화살표 함수에 this 상속하는 방법
    // Regular function
    listHobbiesRegularly: function () {
        const self = this
        self.hobbies.forEach(function (hobby) {
            // Problem: "this" here refers to the global object, not person!
            console.log(self.name + " likes " + hobby); // Won't work as expected
        });
    },

    // Using arrow function to fix it
    listHobbiesWithArrow: function () {
        this.hobbies.forEach((hobby) => {
            // Arrow function inherits "this" from listHobbiesFixed
            console.log(this.name + " likes " + hobby); // Works correctly!
        });
    }
};
console.log(person.whatAmI.name)
person.sayHelloRegularly()
person.sayHelloWithArrow()

person.listHobbiesRegularly()
person.listHobbiesWithArrow()

