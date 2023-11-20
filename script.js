function updateClock() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
  
    const hourHand = document.getElementById('hour');
    const minuteHand = document.getElementById('minute');
    const secondHand = document.getElementById('second');
  
    const hourDeg = (hours + minutes / 60) * 30; // 30 degrees per hour
    const minuteDeg = (minutes + seconds / 60) * 6; // 6 degrees per minute
    const secondDeg = seconds * 6; // 6 degrees per second
  
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;
  }
  
  function startClock() {
    updateClock();
    setInterval(updateClock, 1000); // Update every second
  }
  
  startClock();
  