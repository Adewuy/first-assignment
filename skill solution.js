// the task.....solution

var sentence ="The red fox jumped over the blue dog and kicked a bucket before dancing jumping.";

var fullstop =".";
var i = 0;
var counter = 0;

while(sentence[i] !== fullstop)
{
    console.log(sentence[i])
    if(sentence[i]=== " ")
    {
        counter = counter + 1;
        console.log(counter)
    }
    i= i+1;
}
counter = counter + 1;
console.log(counter)



// To find vowel

var sentence ="The red fox jumped over the blue dog and kicked a bucket before dancing jumping.";

var fullstop =".";
var i = 0;
var counter = 0;

while(sentence[i] !== fullstop)
{
    if(sentence[i]=== "a" || sentence[i]=== "e" || sentence[i]=== "i" || sentence[i]==="o" || sentence[i]==="u")
    {
        counter = counter + 1;
    }
    i= i+1;
}
counter = counter + 1;
console.log(counter)