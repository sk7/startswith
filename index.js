// https://stackoverflow.com/questions/646628/how-to-check-if-a-string-startswith-another-string

if (typeof String.prototype.startsWith != 'function') {
  String.prototype.startsWith = function (str){
    return this.slice(0, str.length) == str;
  };
}

if (typeof String.prototype.startsWithIgnoreCase != 'function') {
  String.prototype.startsWithIgnoreCase = function (str){
    return this.slice(0, str.length).toLowerCase() == str.toLowerCase();
  };
}
