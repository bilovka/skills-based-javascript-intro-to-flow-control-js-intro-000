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
    case "13" : console.log ("You are a teenager") 
    break;
    case "14" : console.log ("You are a teenager") 
    break;
    case "15" : console.log ("You are a teenager") 
    break;
    case "16" : console.log ("You are a teenager") 
    break;
    case "17" : console.log ("You are a teenager") 
    break;
    case "18" : rconsole.log ("You are a teenager") 
    break;
    case "19" : console.log ("You are a teenager") 
    break;
    default: console.log("You have an age") 
  }
}
