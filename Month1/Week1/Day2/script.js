{
    console.log(a)
    var a = 5
    console.log(a)

    //undefined
    //5
}

{
    hello()
    function hello() {
        console.log("hello world")
    }

    //hello world
}

{
    sayBye()
    var sayBye = function() {
        console.log("bye")
    }

    //undefined is wrong because its a function andits calling undefined, callling an undefined is not undefined
    //saybye is not a function
}

{
    console.log(a)
    console.log(b)
    var a = 10
    var b = 20

    //undefined
    //undefined
}

{
    var x = 1
    function test() {
        console.log(x)
        var x = 2
        console.log(x)
    }
    test()

    //1 is wrong because we are in new execution context when we call function and there that x doesn't exists
    //undefined
    //2
}

{
    function outer() {
    console.log(secret)
    var secret = 42
    }
    outer()
    //  undefined at first i thought that the 42 will be passed to the outer function in second execution coontext
    //  but that doesn't happens because in js code is executed line by line 
}
{
    console.log(typeof greet)
    var greet = function() {
        return "hi"
    }
    console.log(typeof greet)

    //undefined
    //function if console.log(typeof greet()) = string
}
{
    var a = 10
    function a() {
        return "I am a function"
    }
    console.log(typeof a)

    //number
    //Between a function declaration and a var assignment, the var assignment always wins (code phase overwrites memory phase).
    //Between two var assignments, the one that comes last in the file wins.
}
{
    console.log(add(2, 3))
    console.log(multiply(2, 3))

    function add(a, b) {
        return a + b
    }

    var multiply = function(a, b) {
        return a * b
   }

   //5
   //multiply is not a function
}
{
    var x = "global"
    function test() {
        console.log(x)
        var x = "local"
    }
    test()
    console.log(x)

    //undefined
    //"global"
}