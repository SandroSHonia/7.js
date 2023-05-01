class User {


    constructor(name, surname) {
    
    
    
        this.name = name;


      
      
      this.surname = surname;
    }
  

    getFullName() {
   
   
   
        return this.name + ' ' + this.surname;
   
   
    }
  }

  
  
  
  class Student extends User {
  
  
    constructor(name, surname, year) {
  
  
        super(name, surname);
  
  
        this.year = year;
  
  
        this.grades = [];
  
  
    }
  
    getCourse() {


      
      
        let currentYear = new Date().getFullYear();
      
      
      
        return currentYear - this.year;
    
    
    }
  
    
    
    addGrade(subject, grade) {
    
    
        this.grades.push({ subject, grade });
    
    
    }
  
    
    
    calculateAverageGrade(subject) {
    
    
        let grades = this.grades.filter((grade) => grade.subject === subject).map((grade) => grade.grade);
    
    
        if (grades.length === 0) {
    
    
            return 0;
    
    
        }
    
    
        let sum = grades.reduce((total, grade) => total + grade);
    
    
        return sum / grades.length;
    }
  }


  
  
  const student = new Student('John', 'smith', 2019);

  
console.log(student.name)
console.log(student.surname)
console.log(student.getFullName()); 
console.log(student.getCourse()); 
console.log(student.year)



student.addGrade('Math', 80 );
student.addGrade('Math', 100 );



console.log(student.calculateAverageGrade('Math')); 
