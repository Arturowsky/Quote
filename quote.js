window.addEventListener("DOMContentLoaded", (event) => {
    let quotes = [
        "You can love someone so much...But you can never love people as much as you can miss them.",
        "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
        "Give a man a fire and he's warm for a day, but set fire to him and he's warm for the rest of his life.",
        "You will never be happy if you continue to search for what happiness consists of. You will never live if you are looking for the meaning of life.",
        "Happiness is when what you think, what you say, and what you do are in harmony",
        "The fear of death follows from the fear of life. A man who lives fully is prepared to die at any time.",
        "I find television very educating. Every time somebody turns on the set, I go into the other room and read a book.",
        "So many books, so little time.",
        "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
        "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
        "The truth is, everyone is going to hurt you. You just got to find the ones worth suffering for.",
        "Logic will get you from A to Z; imagination will get you everywhere.",
        "If you want your children to be intelligent, read them fairy tales. If you want them to be more intelligent, read them more fairy tales.",
        "You only live once, but if you do it right, once is enough.",
        "Life isn't about finding yourself. Life is about creating yourself.",
        "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
        "In three words I can sum up everything I've learned about life: it goes on.",
    ];
    let btn = document.querySelector(".generator");
    let placeholder = document.querySelector("p");
    btn.addEventListener("click", generate);
    function generate() {
        let randomQute = Math.floor(Math.random() * (quotes.length));
        placeholder.innerHTML = quotes[randomQute];
    }
})