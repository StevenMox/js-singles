var quotes = ['"Plan in decades. Think in years. Work in months. Live in days"' ,
'"Do what you want to do, say what you want to say, because those who matter don’t mind, and those who mind don’t matter"' ,
'"You will never reach your desination if you stop and throw stones at every dog that barks"' ,
'"Persistence is the key to success"' ,
'"You must be the change you wish to see in the world"' ,
'"Focus on the journey, not the destination. Joy is found not in finishing an activity but in doing it"' ,
'"You get what you focus on, so focus on what you want!"' ,
'"Live as if you were to die tomorrow. Learn as if you were to live forever"' ,
'"Hope for the best, except the worst and take what comes"' ,
'"The only way to do great work is to love what you do"' ,
'"The best revenge is massive success"' ,
'"You become what you believe"' ,
'"Life is what we make it, always has been, always will be"' ,
'"I am not a product of my circumstances. I am a product of my decisions"' ,
'"Life is what happens to you while you’re busy making other plans"'
];

function newQuote(){
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
