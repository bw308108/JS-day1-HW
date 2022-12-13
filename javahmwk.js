/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. The output should be:
`Matched ${dog_name}` if name is in the string, if its not a match console.log "No Match"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(dog_string, dog_names){
    for (let name of dog_names) {

        let result = dog_string.toLowerCase().includes(name.toLowerCase());
        if (result == true) {
            console.log(`Matched ${dog_names}`)
        }
        else {
            console.log("No Matches")
        }
    }
}

//Call method here with parameters

function findWords(dog_string, dog_names)

//============Exercise #2 ============//
/*Write a function that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    //code goes here
}

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]

//Codewars Problem 1 Return strings: Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
function greet(name){
    console.log(`Hello, ${name} how are you doing today?`)

}
greet('Brian')

//Codewar Problem 2 MakeUpperCase: Write a function which converts the input string to uppercase.

function make_upper_case(s){
    console.log (s.toUpperCase())
}

make_upper_case('brian')