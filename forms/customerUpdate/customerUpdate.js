customerUpdate.onshow=function(){
  drpCustomerUpdate.clear()
  txtUpdatedCustomers_contents.style.height = "200px"
  query = "SELECT name FROM customer2;"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=iro88883&pass=" + pw + "&database=iro88883&query=" + query)
  if (req.status == 200){
   results = JSON.parse(req.responseText)
   console.log(results)
   console.log(typeof(results))
   for (i = 0; i <= results.length - 1; i++){
            drpCustomerUpdate.addItem(results[i])
                }
  }
}

drpCustomerUpdate.onclick=function(s){  
      if (typeof(s) == "object"){  // means the control was clicked but no selection made yet
    return                     // do nothing
  } else {
    drpCustomerUpdate.value = s
            }
}

btnUpdate.onclick=function(){
    query = "UPDATE customer2 SET name =" + '"' + inptUpdate.value + '"' + " WHERE name = " + '"' + drpCustomerUpdate.value + '"'
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=iro88883&pass=" + pw + "&database=iro88883&query=" + query)
    console.log(req.status)
    console.log(req.responseText)
    if (req.status ==200){
      if (req.responseText == 500){
    lblUpdateMessage.value = `You have have changed the name of ${drpCustomerUpdate.value} to ${inptUpdate.value}`
    query = "SELECT name FROM customer2;"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=iro88883&pass=" + pw + "&database=iro88883&query=" + query)
    results = JSON.parse(req.responseText)
              for (i = 0; i <= results.length - 1; i++)
                  message = message + results[i] + "\n"
              txtUpdatedCustomers.value = message
         }
      }
}