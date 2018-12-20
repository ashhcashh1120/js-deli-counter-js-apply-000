function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  var num = katzDeliLine.length;
  return `Welcome, ${name}. You are number ${num} in line.`
}

function nowServing(katzDeliLine){
  if(katzDeliLine.length >= 1){
    var sentence = `Currently serving ${katzDeliLine[0]}.`
    return sentence; 
  } else {
    return 'There is nobody waiting to be served!';
  }
}