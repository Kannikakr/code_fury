function sendMail() {
  var params = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
  };

  const serviceID = "service_23ea01j";
  const templateID = "template_rhz4s0h";

  emailjs.send(serviceID, templateID, params)
      .then((res) => {
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("message").value = "";
          console.log(res);
          alert("Your message sent successfully");
      })
      .catch((err) => console.log(err));
}
function geoFindMe() {
  const status = document.querySelector("#status");
  // const mapLink = document.querySelector("#map-link");
  const data=document.querySelector('#message');

  // mapLink.href = "";
  // mapLink.textContent = "";

  function success(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      status.textContent = "";
      // mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      // mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
      data.textContent= `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  function error() {
      status.textContent = "Unable to retrieve your location";
  }

  if (!navigator.geolocation) {
      status.textContent = "Geolocation is not supported by your browser";
  } else {
      status.textContent = "Locating…";
      navigator.geolocation.getCurrentPosition(success, error);
  }
}

// document.querySelector("#find-me").addEventListener("click", geoFindMe);



// const userMessage = [
//     ["hi", "hey", "hello"],
//     ["sure", "yes", "no"],
//     ["are you genious", "are you nerd", "are you intelligent"],
//     ["i hate you", "i dont like you"],
//     ["how are you", "how is life", "how are things", "how are you doing"],
//     ["how is corona", "how is covid 19", "how is covid19 situation"],
//     ["what are you doing", "what is going on", "what is up"],
//     ["how old are you"],
//     ["who are you", "are you human", "are you bot", "are you human or bot"],
//     ["who created you", "who made you", "who is your creator"],
  
//     [
//       "your name please",
//       "your name",
//       "may i know your name",
//       "what is your name",
//       "what call yourself"
//     ],
//     ["i love you"],
//     ["happy", "good", "fun", "wonderful", "fantastic", "cool", "very good"],
//     ["bad", "bored", "tired"],
//     ["help me", "tell me story", "tell me joke"],
//     ["ah", "ok", "okay", "nice", "welcome"],
//     ["thanks", "thank you"],
//     ["what should i eat today"],
//     ["bro"],
//     ["what", "why", "how", "where", "when"],
//     ["corona", "covid19", "coronavirus"],
//     ["you are funny"],
//     ["i dont know"],
//     ["boring"],
//     ["im tired"]
//   ];
//   const botReply = [
//     ["Hello!", "Hi!", "Hey!", "Hi there!"],
//     ["Okay"],
//     ["Yes I am! "],
//     ["I'm sorry about that. But I like you dude."],
//     [
//       "Fine... how are you?",
//       "Pretty well, how are you?",
//       "Fantastic, how are you?"
//     ],
//     ["Getting better. There?", "Somewhat okay!", "Yeah fine. Better stay home!"],
  
//     [
//       "Nothing much",
//       "About to go to sleep",
//       "Can you guess?",
//       "I don't know actually"
//     ],
//     ["I am always young."],
//     ["I am just a bot", "I am a bot. What are you?"],
//     ["Sabitha Kuppusamy"],
//     ["I am nameless", "I don't have a name"],
//     ["I love you too", "Me too"],
//     ["Have you ever felt bad?", "Glad to hear it"],
//     ["Why?", "Why? You shouldn't!", "Try watching TV", "Chat with me."],
//     ["What about?", "Once upon a time..."],
//     ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
//     ["You're welcome"],
//     ["Briyani", "Burger", "Sushi", "Pizza"],
//     ["Dude!"],
//     ["Yes?"],
//     ["Please stay home"],
//     ["Glad to hear it"],
//     ["Say something interesting"],
//     ["Sorry for that. Let's chat!"],
//     ["Take some rest, Dude!"]
//   ];
  
//   const alternative = [
//     "Same here, dude.",
//     "That's cool! Go on...",
//     "Dude...",
//     "Ask something else...",
//     "Hey, I'm listening..."
//   ];
  
//   const synth = window.speechSynthesis;
  
//   function voiceControl(string) {
//     let u = new SpeechSynthesisUtterance(string);
//     u.text = string;
//     u.lang = "en-aus";
//     u.volume = 1;
//     u.rate = 1;
//     u.pitch = 1;
//     synth.speak(u);
//   }
  
//   function sendMessage() {
//     const inputField = document.getElementById("input");
//     let input = inputField.value.trim();
//     input != "" && output(input);
//     inputField.value = "";
//   }
//   document.addEventListener("DOMContentLoaded", () => {
//     const inputField = document.getElementById("input");
//     inputField.addEventListener("keydown", function (e) {
//       if (e.code === "Enter") {
//         let input = inputField.value.trim();
//         input != "" && output(input);
//         inputField.value = "";
//       }
//     });
//   });
  
//   function output(input) {
//     let product;
  
//     let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
  
//     text = text
//       .replace(/[\W_]/g, " ")
//       .replace(/ a /g, " ")
//       .replace(/i feel /g, "")
//       .replace(/whats/g, "what is")
//       .replace(/please /g, "")
//       .replace(/ please/g, "")
//       .trim();
  
//     let comparedText = compare(userMessage, botReply, text);
  
//     product = comparedText
//       ? comparedText
//       : alternative[Math.floor(Math.random() * alternative.length)];
//     addChat(input, product);
//   }
  
//   function compare(triggerArray, replyArray, string) {
//     let item;
//     for (let x = 0; x < triggerArray.length; x++) {
//       for (let y = 0; y < replyArray.length; y++) {
//         if (triggerArray[x][y] == string) {
//           items = replyArray[x];
//           item = items[Math.floor(Math.random() * items.length)];
//         }
//       }
//     }
//     //containMessageCheck(string);
//     if (item) return item;
//     else return containMessageCheck(string);
//   }
  
//   function containMessageCheck(string) {
//     let expectedReply = [
//       [
//         "Good Bye, dude",
//         "Bye, See you!",
//         "Dude, Bye. Take care of your health in this situation."
//       ],
//       ["Good Night, dude", "Have a sound sleep", "Sweet dreams"],
//       ["Have a pleasant evening!", "Good evening too", "Evening!"],
//       ["Good morning, Have a great day!", "Morning, dude!"],
//       ["Good Afternoon", "Noon, dude!", "Afternoon, dude!"]
//     ];
//     let expectedMessage = [
//       ["bye", "tc", "take care"],
//       ["night", "good night"],
//       ["evening", "good evening"],
//       ["morning", "good morning"],
//       ["noon"]
//     ];
//     let item;
//     for (let x = 0; x < expectedMessage.length; x++) {
//       if (expectedMessage[x].includes(string)) {
//         items = expectedReply[x];
//         item = items[Math.floor(Math.random() * items.length)];
//       }
//     }
//     return item;
//   }
//   function addChat(input, product) {
//     const mainDiv = document.getElementById("message-section");
//     let userDiv = document.createElement("div");
//     userDiv.id = "user";
//     userDiv.classList.add("message");
//     userDiv.innerHTML = `<span id="user-response">${input}</span>`;
//     mainDiv.appendChild(userDiv);
  
//     let botDiv = document.createElement("div");
//     botDiv.id = "bot";
//     botDiv.classList.add("message");
//     botDiv.innerHTML = `<span id="bot-response">${product}</span>`;
//     mainDiv.appendChild(botDiv);
//     var scroll = document.getElementById("message-section");
//     scroll.scrollTop = scroll.scrollHeight;
//     voiceControl(product);
//   }
//   const entryForm = document.querySelector(`#entryForm`);
// const entryResultsSection = document.querySelector(`#entryResultsSection`);
// const entryResultItem = document.querySelector(`.entryResultItem`);
// const entryResultRow = document.querySelector(`.entryResultRow`);
// const getEntryTitle = document.getElementsByClassName(`entry-text-title`);
// const getEntryText = document.getElementsByClassName(`entry-text-box`);

function addEntryToDom(event) {
        event.preventDefault();
        const d = new Date();
        const month = new Array();
        month[0] = 'January';
        month[1] = 'February';
        month[2] = 'March';
        month[3] = 'April';
        month[4] = 'May';
        month[5] = 'June';
        month[6] = 'July';
        month[7] = 'August';
        month[8] = 'September';
        month[9] = 'October';
        month[10] = 'November';
        month[11] = 'December';
        const n = month[d.getMonth()];
        const day = d.getDay();
        const year = d.getFullYear();


        const heading = document.createElement(`h2`);
        heading.className = `heading-results`;
        heading.textContent = `Journal Entries`;
        entryResultRow.insertAdjacentElement(`beforebegin`, heading)

        // Adding Div
        const entryDiv = document.createElement(`div`);
        entryDiv.className = `single-entry-div`;
        entryResultRow.appendChild(entryDiv);

        // Adding Div Element h3
        const entryHeading = document.createElement(`h3`);
        entryHeading.className = `single-entry-heading`;
        entryHeading.textContent = getEntryTitle[0].value;
        entryDiv.appendChild(entryHeading);

        // Adding Div Element Date

        const entryDate = document.createElement(`p`);
        entryDate.className = `single-entry-date`;
        // eslint-disable-next-line no-cond-assign
        if ((getEntryTitle[0].value = getEntryTitle[0].value)) {
                entryDate.textContent = `Date Added: ${day} ${n} ${year}`;
                entryDiv.appendChild(entryDate);
        }

        // Adding Div Element paragraph

        const entryParagraph = document.createElement(`p`);
        entryParagraph.className = `single-entry-text`;
        entryParagraph.textContent = getEntryText[0].value;
        entryDiv.appendChild(entryParagraph);
        getEntryText[0].value = ``;
}

entryForm.addEventListener(`submit`, addEntryToDom);


