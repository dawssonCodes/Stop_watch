window.onload = function () {
  
    var seconds = 00;                                       //Assigning variables for the stopwatch
    var milliSecs = 00;                                          //milliSecs = milliseconds
    var setMilliSecs = document.getElementById("milliSecs")
    var setSeconds = document.getElementById("seconds")
    var Start = document.getElementById('button-start');
    var Stop = document.getElementById('button-stop');
    var Reset = document.getElementById('button-reset');
    var Interval ;
  
    Start.onclick = function() {                                 //function to be executed when the start button is clicked
      
       Interval = setInterval(startTimer, 10);
    }
    
      Stop.onclick = function() {                                //function to be executed when the stop button is clicked
         clearInterval(Interval);
         Start.innerText="Continue";
    }
    
  
    Reset.onclick = function() {                                //function to be executed when the reset button is clicked
       clearInterval(Interval);
      milliSecs = "00";
        seconds = "00";
      setMilliSecs.innerHTML = "00";
        setSeconds.innerHTML = "00";

        Start.innerText="Start";
    }
    
     
    
    function startTimer () {                                //conditions of operation for the stopwatch
      milliSecs++; 
      
      if(milliSecs <= 9){
        setMilliSecs.innerHTML = "0" + milliSecs;
      }
      
      if (milliSecs > 9){
        setMilliSecs.innerHTML = milliSecs;
        
      } 
      
      if (milliSecs > 99) {
        
        seconds++;
        setSeconds.innerHTML = "0" + seconds;
        milliSecs = 0;
        setMilliSecs.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        setSeconds.innerHTML = seconds;
      }
    
    }
    
  
  }