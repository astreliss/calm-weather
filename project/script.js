fetch('http://api.openweathermap.org/data/2.5/weather?q=Minsk&appid=e4f300b5055c9d0d0a83534a0a0675b2')
    .then(function(resp) { return resp.json() })
    .then(function(data) {
    console.log(data);
    document.querySelector('.location').textContent = data.name;
    document.querySelector('.humidity').textContent = data.main.humidity + '%';
    document.querySelector('.num').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    document.querySelector('.wind').textContent = data.wind.speed + 'm/s';
    document.querySelector('.wind-deg').innerHTML = data.wind.deg + '&deg;';
    let date = new Date();
    let day = date.getDay();
    if (day==0) {
        day = 'Sunday';
    } else if (day==1) {     
       day = 'Monday';
    } else if (day==2) {
        day = 'Tuesday';
    } else if (day==3) {
        day = 'Wednesday';
    } else if (day==4) {
        day = 'Thursday';
    } else if (day==5) {
        day = 'Friday';
    } else if (day==6) {
        day = 'Saturday';
    }
    document.querySelector('.day').textContent = day;
    document.querySelector('.date').textContent = `${date.getDate()} ${date.toLocaleString('en', {       
        month: 'long'       
      })}`;

});