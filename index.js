function showYoungestStudent(userDefinedStudents){
    var min=userDefinedStudents[0].age
    if (userDefinedStudents==null) { 
        console.log('this array is empty please enter your info');
        
    }
    for (let i = 0; i < userDefinedStudents.length; i++) {
        if (userDefinedStudents[i].age<min) {
            min=userDefinedStudents[i].age
            console.log( userDefinedStudents[i].name, min);
            
        }
   
    
}}
const userDefinedStudents = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 2 },
    { name: 'Charlie', age: 21 },
];
showYoungestStudent(userDefinedStudents);



module.exports = showYoungestStudent;