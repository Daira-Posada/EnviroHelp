envFacts = ["Only 1% of the Earth's water is available for us to use", 
    "The population of bees is rapidly declining", "The blue bird from the movie 'Rio' is now extinct", 
    "Lead, a toxic metal, used to be in paint", "Tree's roots help decrease soil erosion",
    "Cities' temperatures are higher than rural areas due to an effect called \"The Urban Heat Island\"", 
    "The Earth is 30% land, out of that 30%, 50% is used for agriculture"]

var fact = document.getElementById("fact");
var btn = document.getElementById("btn");
var count = 0;

btn.addEventListener("click", showFact);

function showFact () {
    fact.innerHTML = envFacts[count];
    count++;
    if (count == envFacts.length) {
        count = 0;
    }
}