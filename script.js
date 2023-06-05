//complete this code
class Person {
	constructor (name,age){
		this._name=name;
		this._age=age;
	}

	// for greatter
	get name(){
		return this._name;
	}
	// for setter
	set age(age){
		this._age=age;
	}
	
	
	
}

class Student extends Person {
	study(){
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	teach()
	{
		console.log(`${this.name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;

// Example usage:
const person  = new Student('John', 25);
/* console.log(john.name);  */// Output: John
person.study(); // Output: John is studying.

const jane = new Teacher('Jane', 35);
console.log(jane.name); // Output: Jane
jane.teach(); // Output: Jane is teaching.
