
// Shortest Word

/*Simple, given a string of words, return the length of the shortest word(s).
String will never be empty and you do not need to account for different data types.
*/


function findShort(string){
  const divisão = string.split(' ');
  const array123 = [];

  for (const length of divisão) {
    length.length;
    array123.push(length.length);
  }
  return Math.min.apply(Math, array123);
}