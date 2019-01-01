function reverseParentheses(s) {
   var re = /\(([A-z]*[^()]+)\)/;
   var find;
   while ((find = re.exec(s))!== null){
      s = s.replace(`(${find[1]})`,find[1].split("").reverse().join(""));
   }
   return s;
}
