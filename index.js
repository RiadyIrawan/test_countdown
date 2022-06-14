const  quoteText= document.querySelector(".quote");
const author=document.querySelector(".author .name");
const quoteBtn=document.querySelector("button"),
soundBtn=document.querySelector(".sound"),
copyBtn=document.querySelector(".copy");


randomQuote=()=>{
    quoteBtn.classList.add("loading");
    quoteBtn.innerText=("Loading Quote...")
    fetch("https://api.quotable.io/random").then(res=>res.json().then(result=>{
    console.log(result);
    
    quoteText.innerHTML=result.content;
    author.innerHTML=result.author;
    quoteBtn.innerText=("New Quote")
    quoteBtn.classList.remove("loading");
    }));
}


soundBtn.addEventListener("click",()=>{
    let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${author.innerHTML}`);
    speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click",()=>{
   navigator.clipboard.writeText(quoteText.innerText);
});


quoteBtn.addEventListener("click",randomQuote);


const countdown=()=>{
    const countDate = new Date ('June 29, 2022 00:00:00').getTime();
    const now = new Date().getTime();
    const gap = countDate-now;

    const second=1000;
    const minute=second*60;
    const hour = minute*60;
    const day = hour*24;


    const textDay=Math.floor(gap/day);
    const textHour=Math.floor((gap%day)/hour);
    const textMinute=Math.floor((gap%hour)/minute);
    const textSecond=Math.floor((gap%minute)/second);

    document.querySelector(".day").innerText=textDay;
    
    if(textHour<10){
        document.querySelector(".hour").innerText="0"+textHour;
    }else{
        document.querySelector(".hour").innerText=textHour;
    }

    if(textMinute<10){
        document.querySelector(".minute").innerText="0"+textMinute;
    }else{
        document.querySelector(".minute").innerText=textMinute;
    }

    if(textSecond<10){
        document.querySelector(".second").innerText="0"+textSecond;
    }else{
        document.querySelector(".second").innerText=textSecond;
    }

}

setInterval(countdown,1000);