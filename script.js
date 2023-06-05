//complete this code
class Person {
	constructor (name,age){
		this.name=name;
		this.age=age;
	}

	// for greatter
	get name(){
		return this.name;
	}
	// for setter
	set age(age){
		this.age=age;
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

/* // Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;
 */
// Example usage:
const john = new Student('John', 20);
console.log(john.name); // Output: John
john.study(); // Output: John is studying.

const jane = new Teacher('Jane', 35);
console.log(jane.name); // Output: Jane
jane.teach(); // Output: Jane is teaching.
