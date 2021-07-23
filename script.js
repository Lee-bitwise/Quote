let buttonid= document.getElementById('buttonid');
let card = document.getElementById('card');
let quotes = [
    
       ' "Genius is one percent inspiration and ninety-nine percent perspiration. -Thomas Edison"',
       ' "You can observe a lot just by watching.-Yogi Berra"',
        '"A house divided against itself cannot stand. -Abraham Lincoln"',
];

buttonid.addEventListener('click',function(){
    var randomQuote = quotes[Math.floor(Math.random()* quotes.length)]
    card.innerHTML= randomQuote;
})