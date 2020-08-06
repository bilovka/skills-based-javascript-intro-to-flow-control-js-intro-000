function basicTeenager(age) {
  if(age>=13 && age<=19){
   return "You are a teenager!"
  }
  return undefined
}

function teenager(age) {
  if(age>=13 && age<=19){
  return "You are a teenager!"
  } else 
    { return "You are not a teenager"
    
  }
  return undefined
}

function ageChecker(age) {
  if(age<=12){
    return "You are a kid"
  }
  else if(age>=20){
    return "You are a grownup"
  }
  return "You are a teenager!"
}

function ternaryTeenager(age) {
 age=(age>=13&&age<=19) ? "You are a teenager"  : "You are not a teenager" 
 return age

}

function switchAge(age) {
  switch(age){
    case age>=13&&age<=19 : console.log ("You are a teenager")
    break;
    case age<=12&&age>=20 : console.log("You have an age")
    break;
    return "You have an age"
  }
}
