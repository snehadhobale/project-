const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

function speak(sentence) {
    const text_speak = new SpeechSynthesisUtterance(sentence);

    text_speak.rate = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe() {
    var day = new Date();
    var hr = day.getHours();

    if(hr >= 0 && hr < 12) {
        speak("Good Morning");
    }

    else if(hr == 12) {
        speak("Good Afternoon");
    }

    else if(hr > 12 && hr <= 17) {
        speak("Good Afternoon");
    }

    else {
        speak("Good Evening");
    }
}

window.addEventListener('load', ()=>{
    speak("Activating Aliza .Try speaking into the microphone.");
    speak("Going online");
    wishMe();
    speak("How can i help you");
})

window.addEventListener('load', () => {
    // Accessing Geolocation of User
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
         
      });
    }
  });

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;//turn spokent text into speech
const recognition = new SpeechRecognition();

recognition.onresult = (event) => {
    const current = event.resultIndex;
    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    speakThis(transcript.toLowerCase());
}

btn.addEventListener('click', ()=>{
    recognition.start();
})

function speakThis(message) {
    const speech = new SpeechSynthesisUtterance();

    speech.text = "I did not understand what you said please try again";

    if(message.includes('hey') || message.includes('hello')||message.includes('hii')) {
        speak("Hello");
        wishMe();
        const finalText = "How Are You";
        speech.text = finalText;
    }

    else if(message.includes('how are you')||message.includes('and you')) {
        const finalText = "I am fine tell me how can i help you";
        speech.text = finalText;
    }

    else if(message.includes('kind')) {
        const finalText = "Thank You for Sharing......You should know I think You are the best";
        speech.text = finalText;
    }

    else if(message.includes('thank you')) {
        const finalText = "I'm just joking....Don't get Formal in front of me because You know i made only for you";
        speech.text = finalText;
    }

    else if(message.includes('name')|| message.includes('who are you')) {
        const finalText = "My name is Aliza";
        speech.text = finalText;
    }

    else if(message.includes('open google')) {
        window.open("https://google.com","_blank");
        const finalText = "Opening Google";
        speech.text = finalText;
    }

    else if(message.includes('open voice assistant')) {
        window.open("file:///D:/Yogi/Aliza/index.html","_blank");
        const finalText = "Opening Aliza";
        speech.text = finalText;
    }

    else if(message.includes('open facebook')) {
        window.open("https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjG-eSa2Yz-AhXCNSsKHWN-D7cYABAAGgJzZg&ohost=www.google.com&cid=CAESbeD27ig95XGsbbeF9bBeqmGYPW86-4xYgc8E5ziRVnYEtcLwUOC1b1rbgucaPrfmfuNoqfuvIFcFYA2yh_lDA5c3tv0aTy9RwbMxK6cesmVzrScTtO5aS2cFnpdKImdZHvVzMnKLh02rvNDUQMU&sig=AOD64_23kTQcFBbjHlZpcepf-TkZPUUWuA&q&adurl&ved=2ahUKEwiT4N2a2Yz-AhWjSWwGHVG5AnYQ0Qx6BAgBEAE","_blank");
        const finalText = "Opening Facebook";
        speech.text = finalText;
    }

    else if(message.includes('open instagram')) {
        window.open("https://instagram.com", "_blank");
        const finalText = "Opening instagram";
        speech.text = finalText;
    }

    else if(message.includes('open youtube')) {
        window.open("https://www.youtube.com/", "_blank");
        const finalText = "Opening youTube";
        speech.text = finalText;
    }

    /*else if(message.includes('play ram song')) {
        window.open("https://www.youtube.com/watch?v=uqowfROmEw0");
        const finalText = "Playing song";
        speech.text = finalText;
    }*/

    else if(message.includes('open whatsapp')) {
        window.open("https://web.whatsapp.com/", "_blank");
        const finalText = "Opening WhatsApp";
        speech.text = finalText;
    }

    else if(message.includes('what is') || message.includes('who is') || message.includes('what are') || message.includes('where is')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what i found on internet regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('wikipedia')) {
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia", "")}`, "_blank");
        const finalText = "This is what i found on wikipedia regarding " + message;
        speech.text = finalText;
    }

    else if(message.includes('time')) {
        const time = new Date().toLocaleString(undefined, {hour: "numeric", minute: "numeric"})
        const finalText = time;
        speech.text = finalText;
    }

    else if(message.includes('date')) {
        const date = new Date().toLocaleString(undefined, {month: "short", day: "numeric", year: "numeric"})
        const finalText = date;
        speech.text = finalText;
    }

    else if(message.includes('calculator')) {
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speech.text = finalText;
    }

    else if(message.includes('calendar')) {
        window.open('https://calendar.google.com/')
        const finalText = "Opening calendar";
        speech.text = finalText;
    }

    

    else {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "I found some information for " + message + " on google";
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.pitch = 1;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
}