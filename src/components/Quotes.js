import Reload_button from '../img/requote.svg'

let QutoesList = [ {
    Autor: "Me",
    Quote: "Linux Improves with every user, so why not join us."
},
{
    Autor: "Cory House",
    Quote : "Code is like humor. When you have to explain it, it’s bad."
},
{
    Autor: "Steve Jobs",
    Quote: "Everybody should learn to program a computer because it teaches you how to think."
},
{
    Autor: "Martin Fowler",
    Quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand."
},
{
    Autor: "Ellen Ullman",
    Quote: "There is always one more bug to fix."
},
{
    Autor: "Linus Trovalds",
    Quote: "Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program."
},
{
    Autor: "Linus Trovalds",
    Quote: "When you say 'I wrote a program that crashed Windows,' people just stare at you blankly and say 'Hey, I got those with the system, for free.'"
},
{
    Autor : "Me",
    Quote : "Debugging: Removing the needles from the haystack."
},
{
    Autor: "Brain W. Kernighan",
    Quote: "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it."
}
//API didnt work so here is my solution
]

const Quotes = () => {

    let randomQuote = Math.floor(Math.random()*QutoesList.length)
    const outputQuotes = QutoesList[randomQuote].Quote;
    const outputAutor = QutoesList[randomQuote].Autor
    function refreshPage() {
        window.location.reload(false)
    }
    
    return (
        <div>
            <div className="App-quote">
                <blockquote>
                    {'"'+ outputQuotes + '"'}
                </blockquote>
                <cite>
                    {"- " + outputAutor}
                </cite>
            </div>
            <div className='App-button-quote'>
                <img className='App-img-button' src={Reload_button} alt="Refresh Button" onClick={refreshPage} />
            </div>
        </div>
    );
}

export default Quotes;