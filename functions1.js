/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */

function printName(name){

    console.log(name);
}
printName("hawraa");


/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
 
function printAge(age){
    console.log(2024-age);
}

printAge("1997")



/**
 * Task 3:
 * Create a function named `printAgeAndName`
 * - that takes a birth year and your name as parameters,
 * - and prints 'Hello NAME you are AGE years old' on the screen.
 * - Age = current year - birth
 */
function printAgeAndName(name , age){
    return name , age;
}

printAgeAndName("Hawraa" , '27')



/**
 * Task 4:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */




function printHello(name , language){
    



if (language==="en"){
  
    console.log("hello " , name );

}else if (language==="es"){
    
    console.log("hola " , name );

}else if (language==="fr"){
    
    console.log("Bonjour " , name );
}else {
    
    console.log("marhaba " , name );
}
}

printHello("Hawraa", "es");




/**
 * Task 5:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */


function printMax(number1 , number2){


    if(number1>number2){
        return number1;
    } else {
        number2;
        
    }
}

printMax(5 , 3);