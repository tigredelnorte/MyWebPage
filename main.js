console.log("hello")

let indicator = document.querySelectorAll(".filter-button")
let games = document.querySelectorAll(".filter");

console.log(indicator)
for(let i=0; i< indicator.length; i++)
{
    indicator[i].onclick = function(){
        for(let x=0; x< indicator.length; x++){
            indicator[x].classList.remove("active");
        }
        this.classList.add("active");
        const displayItems = this.getAttribute("data-filter");
        for(let z=0; z<games.length; z++){
            games[z].style.transform = "scale(0)";
            setTimeout(() =>{
                games[z].style.display = "none";
            }, 500);
            if((games[z].getAttribute("data-category") == displayItems) ||
            displayItems == "all")
            {
                games[z].style.transform = "scale(1)";
                setTimeout(() =>{
                    games[z].style.display = "block";
                }, 500);
            }
        }
    }
}

console.log(indicator)