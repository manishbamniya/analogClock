const hourHand = document.getElementById("hour");
const minuteHand = document.getElementById("minute");
const secondHand = document.getElementById("second");

    

    function getTime(){
        let t = new Date();

        const hour = t.getHours();
        const minute = t.getMinutes();
        const second = t.getSeconds();

        const secondsDegree = (((second / 60) * 360) + 90);
        secondHand.style.transform = `rotate(${secondsDegree}deg)`

        const minutesDegree = (((minute / 60) * 360) +90);
        minuteHand.style.transform = `rotate(${minutesDegree}deg)`

        const hoursDegree = ((((hour + minute/60)/12) * 360)+ 90);
        hourHand.style.transform = `rotate(${hoursDegree}deg)`

        console.log(hour + ":" + minute + ":" + second);
    }

    setInterval(getTime, 1000);