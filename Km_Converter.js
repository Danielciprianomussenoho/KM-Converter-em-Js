
  var convertType = "meters";
  const heading = document.querySelector('h1');
  const intro = document.querySelector('p');
  const answerDiv = document.getElementById('answer');
  const form = document.getElementById('convert');

  document.addEventListener('keydown', function(event){
    var key = event.code;
    
    if (key === 'KeyK'){
      convertType = 'kilometers';
      heading.innerHTML = "KILOMETERS TO METERS CONVERTER";
      intro.innerHTML = "Type in a number of kilometers and click the button to  convert the distance to meters.";
    }
    else if(key === 'KeyM'){
      convertType = 'meters';
      heading.innerHTML = "METERS TO KILOMETERS CONVERTER";
      intro.innerHTML = "Type in a number of meters and click the button to  convert the distance to kilometers.";
      }
    });

    form.addEventListener('submit', (event)=>{
      event.preventDefault();

      const distance = parseFloat(document.getElementById('distance').value);
      const answerDiv = document.getElementById('answer');
      
      if(distance){
        if(convertType === "meters"){
          const conversion = (distance * (1/1000)).toFixed(3);
          answerDiv.innerHTML = `${distance} m, converts to ${conversion}km `;

        }else{
          const conversion = (distance * (1000)).toFixed(0);
          answerDiv.innerHTML = `${distance} km, converts to ${conversion}m `;

        }
      }else{
        answerDiv.innerHTML = 'Please provide a number!';
      }
      
    })


    