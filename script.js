let btnShowJoke = document.querySelector("#btnShowJoke");
let jokeArea = document.querySelector(".card-body");
let animation = document.querySelector(".anim-container");

showJoke();

function showJoke(){
    const url = "https://icanhazdadjoke.com/search";
    const config = {
        headers : {"Accept" : "application/json"}
    };
    
    jokeArea.innerHTML = `
    <div class="anim-container">
        <div class="anim-circle">

        </div>

        <div class="anim-box">

        </div>  
    </div>

    `;

    try{
        fetch(url,config)
            .then((datas) => {
                return datas.json();
            })
            .then((jsonDatas) => {
                let rndNum = Math.floor(Math.random() * 19);
                jokeArea.innerHTML = jsonDatas.results[rndNum].joke;
        });
    }catch(err){
        console.log(err);
    }
}

btnShowJoke.addEventListener("click",showJoke);