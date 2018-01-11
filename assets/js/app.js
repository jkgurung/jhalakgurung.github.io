//jQuery
$(document).ready(function(){
    newQuote();
  });
  
  //JavaScript
  var number = 0;
  function randomNum(maxNum) {
    number = Math.floor(Math.random() * maxNum);
    return number;
  }
  
  var quotes = [
    {
        "author":"Marissa Mayer",
        "quote":"When people think about computer science, they imagine people with pocket protectors and thick glasses who code all night.",
      },
      {
        "author":"Alan Kay",
        "quote":"Technology is anything that wasn’t around when you were born.",
      },
      {
        "author":"Northrop Frye",
        "quote":"The most technologically efficient machine that man has ever invented is the book..",
      },
      {
        "author":"Eric Schmidt",
        "quote":"The Internet is the first thing humanity has built that humanity doesn’t understand, the largest experiment in anarchy that we have ever had.",
      },
      {
        "author":"Bill Gates",
        "quote":"It’s fine to celebrate success, but it is more important to heed the lessons of failure.",
      },
      {
        "author":"Bill Gates",
        "quote":"People always fear change. People feared electricity when it was invented, didn’t they?",
      },
      {
        "author":"Steve Jobs",
        "quote":"The only way to do great work is to love what you do.",
      },
      {
        "author":"Steve Jobs",
        "quote":"Sometimes life hits you in the head with a brick. Don’t lose faith.",
      }
  ];
  
  var quote;
  var author;
  function newQuote(){
    var randNum = randomNum(quotes.length);
    quote = document.getElementById("quote").innerHTML = JSON.stringify(quotes[randNum]["quote"]);
    author = document.getElementById("author").innerHTML = JSON.stringify(quotes[randNum]["author"]);
  
    $('#tweet').attr('href', 'https://twitter.com/intent/tweet?text=' + encodeURIComponent('"' + quote + '" ' + author));
  }

  // new Quote button listner
  document.getElementById("button1").addEventListener("click", function() {
    newQuote();
  });