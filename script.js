var url;
function displayList()
{
  //console.log(url);
  fetch('https://dog.ceo/api/breed/hound/list')
    .then(response =>{
      return response.json();
    }).then((val) =>{        
      document.getElementById('p_out').innerHTML = val.message;    
    }).catch(reason =>{ 
      document.getElementById('p_out').innerHTML = "Not Found";
    });
  
}
function randomImage()
{
  var breed = document.getElementById('in').value;
  url = 'https://dog.ceo/api/breed/hound/'+ breed +'/images' ;
  fetch(url)
    .then(response =>{
      return response.json();
    }).then((val) =>{        
      document.getElementById('out').src = val.message[Math.floor(Math.random()*100)];    
    }).catch(reason =>{ 
      document.getElementById('out').alt = "Not Found";
    });
}