// Pass function as an argument

function showErrorMsg(name, message){
    var serverErrorCode = 500;
    message(serverErrorCode)
    console.log("Server error code is start from 500 - 599 .")
}

function errMsg(err){
    console.log(" Server error code :" + err)
}

showErrorMsg('Server Error', errMsg)

// Return function from function

function welcomeMsg(name){
    console.log("Welcome Mr. ");

    return function options(menu){
        console.log(`Do you like ` + menu + ` Mr. ` + name)
    }
}

welcomeMsg('Abdul Halim')('Programming')


// Store function as 

var aFunc = function() {
    console.log("Hello World");
}

var anotherFunc = aFunc;
anotherFunc()