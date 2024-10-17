/*
function makePastaAlfredo () { // declare a function
  
    // Select the ingredients
    const pasta = "Spaghetti";
    const sauce = "Alfredo";
    const cheese = "Parmesan";
    
    // Mix the ingredients
    const meal = `${pasta} ${sauce} with ${cheese} cheese.`;
  
    // Serve
    console.log("Served: ", meal);
  }
  
  
  // Call the function (run code inside of the function) 3 times.
  makePastaAlfredo();
  makePastaAlfredo();
  makePastaAlfredo();

  // 

  // Function declaration with a parameter
function sayHello (language) {
    if (language === "en") {
      console.log("Hello!");
    }
    else if (language === "fr") {
      console.log("Bonjour!");
    }
    else if (language === "es") {
      console.log("Hola!");
    }

}

// Function invocation with an argument
sayHello("en"); // => Hallo!
sayHello("fr"); // => Bonjour!
sayHello("es"); // => Hola!


//

// Function declaration with multiple parameters
function makePasta (pasta, sauce, cheese) {

    const meal = `${pasta} ${sauce} with ${cheese} cheese.`;
  
    console.log("Served: ", meal);
  }
  
  
  // Function invocation with arguments
  makePasta("Fettuccine", "Alfredo",  "Parmesan");
  makePasta("Spaghetti", "Bolognese", "Parmesan");
  makePasta("Torellini", "Carbonara", "Pecorino");

  // Function declaration with multiple parameters
function makePasta (pasta, sauce, cheese) {

    const meal = `${pasta} ${sauce} with ${cheese} cheese.`;
  
    console.log("Served: ", meal);
  }
  
  // Invoking a function with extra arguments:  ↓ ↓        ↓↓
  makePasta("Ravioli", "Pesto",  "Parmesan", "Ketchup", "Cheddar");

  // 

  function returnName(firstName, lastName) {
    return `${firstName} ${lastName}`;  // return the full name
  }
    
  const fullName = returnName("John", "Doe"); // Store the returned value in a variable
  console.log("fullName", fullName); // Print the value stored in the variable

  //
*/
  // Function = a section of reusable code.
  //            declare code once and use it many times.
  //            call the function to execute the code inside it.


  function macaKuote (userName, kill){
    let currentKills = kill
    console.log(`${userName} has slain an enemy ${currentKills}`)
    currentKills ++

    console.log(`${userName} doble kill ${currentKills}`)
    currentKills ++

    console.log(`${userName} is Legendary! ${currentKills}`)
    currentKills ++

    console.log(`${userName} is Unstopabble! ${currentKills}`)
    currentKills ++

    console.log(`${userName} is GODLIKE! ${currentKills}`)
  }
  macaKuote("Kasper", 1)

function isValidEmail (email){
  if (email.includes("@")){
    return true;
} else {
  return false;
}
}
  console.log(isValidEmail("kasper@icloud.com"));