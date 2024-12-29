const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not how high you have climbed, but how you make a positive difference to the world. – Roy T. Bennett",
    "Success is not in what you have, but who you are. – Bo Bennett",
    "Don't watch the clock; do what it does. Keep going. – Sam Levenson",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "It always seems impossible until it’s done. – Nelson Mandela"
  ];
  
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerText = quotes[randomIndex];
  }
  