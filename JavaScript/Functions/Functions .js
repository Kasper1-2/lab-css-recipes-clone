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
{

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
  