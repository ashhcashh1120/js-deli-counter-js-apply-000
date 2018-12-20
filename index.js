function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var num = katzDeliLine.length;
  return `Welcom, ${name}. You are number ${num} in line.`
}
