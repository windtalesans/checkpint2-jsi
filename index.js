var timers = {};

function startTimer(timerId) {
  if (timers[timerId]) return;

  var display = document.querySelector('#' + timerId + ' .time');
  var startTime = new Date(); 
  timers[timerId] = setInterval(function() {
    var now = new Date();
    var elapsedTime = now.getTime() - startTime.getTime(); 
    
    var seconds = Math.floor((elapsedTime / 1000) % 60);
    var minutes = Math.floor((elapsedTime / 1000 / 60) % 60);
    
    display.textContent = minutes.toString().padStart(2, '0') + ':' + seconds.toString().padStart(2, '0');
  }, 1000);
}
function stopTimer(timerId) {
    clearInterval(timers[timerId]);
    timers[timerId] = null;
    var display = document.querySelector('#' + timerId + ' .time');
    display.textContent = '00:00';
  }
  
  function stopAllTimers() {
    for (var timer in timers) {
      clearInterval(timers[timer]);
      timers[timer] = null;
    }
    var displays = document.querySelectorAll('.time');
    displays.forEach(function(display) {
      display.textContent = '00:00';
    });
  }

  
