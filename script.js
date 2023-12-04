function indexOfIgnoreCase(str, subStr) {
  // write your code here
	// If either str or subStr is empty, or subStr is longer than str, return -1
  if (!str || !subStr || subStr.length > str.length) {
    return -1;
  }

  // Convert both strings to lowercase for case-insensitive comparison
  const lowerStr = str.toLowerCase();
  const lowerSubStr = subStr.toLowerCase();

  // Find the index of the first occurrence of lowerSubStr in lowerStr
  const index = lowerStr.indexOf(lowerSubStr);

  return index;
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
