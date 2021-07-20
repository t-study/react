class ex1 {
    name

    excute(name){
        console.log('ex1 excute');
        console.log(name);
        this.name = name;
        this.age = undefined;
        return name + ' 님';
    }
}

typeof(ex1)

/**
 * 비구조화 할당
 */
let animalList = ["CAT", "DOG", "TIGER"];
let cat = animalList[0];
let dog = animalList[1];
let tiger = animalList[2];
console.log(cat); 
console.log(dog); 
console.log(tiger); 

let [cat, dog, tiger] = ["CAT", "DOG", "TIGER"];
console.log(cat);
console.log(dog);
console.log(tiger);

let [cat, ...rest] = ["CAT", "DOG", "TIGER"];
console.log(cat);
console.log(rest);