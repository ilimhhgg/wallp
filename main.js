

      axios.get('https://json.geoiplookup.io/')
      .then(function (response) {
        let userDate = response
        console.log(userDate);
        function main() {

          let leng = 'en'

          
          fetch('http://api.openweathermap.org/data/2.5/weather?q='+userDate.data.city+'&lang='+leng+'&appid=655b79c0cc08cbb6e7337db01b1d162d')
          .then(function (resp) { return resp.json()})
          .then(function (data) { 
            console.log(data);
              
              //получениые данные с openweathermap
              let result = data;
              let kelvin = result.main.temp;
              //kelvin to celcius
              let celcius = kelvin - 273.15;
              
              



              //получение ссылки для иконки
              var iconurl = "http://openweathermap.org/img/w/" + result.weather[0].icon + ".png";
              $('#wicon').attr('src', iconurl);
                      
              

              var date = new Date();

              var optionsTime = {
                // era: 'long',
                // year: 'numeric',
                // month: 'long',
                // day: 'numeric',
                // weekday: 'long',
                timezone: 'UTC',
                hour: 'numeric',
                minute: 'numeric',
                // second: 'numeric'
              };
              var optionsDate = {
                // era: 'long',
                // year: 'numeric',
                month: 'long',
                day: 'numeric',
                weekday: 'long',
                // timezone: 'UTC',
                // hour: 'numeric',
                // minute: 'numeric',
                // second: 'numeric'
              };
              
              console.log(  );
        
        
              


              // записываем данные 
              
              document.getElementById("cityName").innerHTML = result.name ;
        
              document.getElementById("temp").innerHTML = celcius.toString().substring(0, 2) + '°C';
        
              document.getElementById("description").innerHTML = result.weather[0].description;
        
              document.getElementById("time").innerHTML = date.toLocaleString(leng, optionsTime)
        
              document.getElementById("date").innerHTML = date.toLocaleString(leng, optionsDate)
          })
          .catch(function () {
            
          })
        }
        
        setInterval(function () {
          main()
        }, 20000)
        
        
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
    
      
 