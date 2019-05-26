// User Case 1: Return true if the given string is a palindrome. Otherwise, return false.

  // User Case 2: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

  function palindrome(str) {
    str = document.getElementById("str").value;
    
    if(str === "") {
        alert("Please enter text to check.")
    } else if(str.replace(/[\W_]/g, '').toLowerCase() ===
    str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('')) {
        alert("True");
    }else {
        alert("False");
    }
    
    // return str.replace(/[\W_]/g, '').toLowerCase() ===
    //              str.replace(/[\W_]/g, '').toLowerCase().split('').reverse().join('');
  }//end palindrome
    
    

// test cases: We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
// We'll also pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
