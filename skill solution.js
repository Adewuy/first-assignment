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



// Secound Task Solution 


function sumOfDistinctElements(set1, set2) {
    let distinctElements = [];
    
    set1.forEach((element) => {
      if (!set2.includes(element)) {
        distinctElements.push(element);
      }
    });
    
    set2.forEach((element) => {
      if (!set1.includes(element)) {
        distinctElements.push(element);
      }
    });
    
    return distinctElements.reduce((sum, element) => sum + element, 0);
  }
  
  // Example usage:
  const set1 = [3, 1, 7, 9];
  const set2 = [2, 4, 1, 9, 3];
  const result = sumOfDistinctElements(set1, set2);
  console.log(result);  // Output: 13
  