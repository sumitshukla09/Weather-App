const inputBox=document.querySelector("#inputBox");
const button=document.querySelector("#btn");

const API_KEY="0e3f7864fef84988297bd708cf68b78e";
const url="https://api.openweathermap.org/data/2.5/weather?q=";

button.addEventListener("click",() =>fetchData(inputBox.value));
 
async function fetchData(query){
    const res=await fetch(`${url}${query}&appid=${API_KEY}`);
    const data=await res.json();
    console.log(data);

    const content=document.querySelector("#content");
    const city=document.querySelector("#city");
    const humidity=document.querySelector("#humid");
    const windspeed=document.querySelector("#wind");
    content.innerHTML=Math.round(data.main.temp)+" c";
    city.innerHTML=data.name;
    humidity.innerHTML=data.main.humidity+"%";
    windspeed.innerHTML=Math.round(data.wind.speed)+" Km/h";
}
