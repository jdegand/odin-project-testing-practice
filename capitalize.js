function capitalize(string){
  let first = string[0].toUpperCase();
  let rest = string.slice(1);
  return first.concat(rest);
}

module.exports = capitalize;
