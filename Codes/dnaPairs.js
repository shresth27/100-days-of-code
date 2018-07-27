/*Intermediate Algorithm Scripting: DNA Pairing
The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.*/



function pairElement(str) {
  
  var i;
  var str1 = [];
  for(i=0; i<str.length; i++)
  {
      if(str[i] === 'G')
      {
          str1.push(["G", "C"]);
      }

      if(str[i] === 'C')
      {
        str1.push(["C", "G"]);
      }

      if(str[i] === 'A')
      {
        str1.push(["A", "T"]);
      }

      if(str[i] === 'T')
      {
        str1.push(["T", "A"]);
      }
  }
  
  return str1;
}

pairElement("GCG");
