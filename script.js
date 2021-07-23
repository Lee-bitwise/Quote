let buttonid= document.getElementById('buttonid');
let card = document.getElementById('card');
let quotes = [
    
       ' "Genius is one percent inspiration and ninety-nine percent perspiration. -Thomas Edison"',
       ' "You can observe a lot just by watching.-Yogi Berra"',
        '"A house divided against itself cannot stand. -Abraham Lincoln"',
        '"Difficulties increase the nearer we get to the goal. -Johann Wolfgang von Goethe"',
       ' "Fate is in your hands and no one elses. -Byron Pulsifer"',
       '"Be the chief but never the lord. -Lao Tzu"',
];

buttonid.addEventListener('click',function(){
    var randomQuote = quotes[Math.floor(Math.random()* quotes.length)]
    card.innerHTML= randomQuote;
})