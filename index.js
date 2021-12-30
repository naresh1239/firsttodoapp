showcard();
let text = document.getElementById("exampleFormControlTextarea1");
let title = document.getElementById("exampleFormControlInput1")
let alerts = document.getElementById("alerts")


// timing function

function addfun() {

    let localdata = localStorage.getItem("localdata");

    if (localdata == null) {
        localtextarry = [];

    } else {
        localtextarry = JSON.parse(localdata);
    }
    let hours = new Date().getHours();
    let minuts = new Date().getMinutes();
    let second = new Date().getSeconds();
    let dates = new Date().getDate()
    let month = new Date().getMonth() + 1
    let fullyear = new Date().getFullYear()

    let fulldate = (`${dates}/${month}/${fullyear}`)
    let fulltime = (`${hours}.${minuts}.${second}`)

       
    let obj = {
        title: title.value,
        text: text.value,
        time: fulltime,
        date: fulldate

    }

    // lowecase function
  
    //    a caddition to not push black arry in localStorage
    if (text.value > "" && title.value > "") {
        localtextarry.push(obj)
    } else {
        alerts.style.display = "block"
    }
    //    here caddition ends
    localStorage.setItem("localdata", JSON.stringify(localtextarry))
    text.value = "";
    title.value = "";


    showcard();

}

function showcard() {
    let localdata = localStorage.getItem("localdata");

    setTimeout(() => {
        alerts.style.display = "none"
    }, 3000);

    if (localdata == null) {
        localtextarry = [];

    } else {
        localtextarry = JSON.parse(localdata);
    }

    let data = "";
    localtextarry.forEach(function (element, index) {
        data += ` <div class="col-4 mx-auto my-3 card"  style="width: 18rem;" id="cardone">
      <div class="card-body">
        <h5 class="card-title"> ${index+1}.  ${element.title}</h5>
        <p class="card-text">${element.text}</p>
        <Br>date : ${element.date} time :${element.time}</Br>
        <p>chercter : ${element.text.length} words : ${element.text.split(" ").length}</p>
        <a href="#" onclick="deletebtn(${index})" class="btn btn-primary">Delete</a>
      </div>
    </div>`
        let title = document.getElementById("title")
        title.innerHTML = `TOtal todo CARDs ${index + 1}`
    });

    let cards = document.getElementById("cards");
    if (localtextarry != 0) {
        cards.innerHTML = data;
    }
    else {
        cards.innerHTML = "<h3>noting to submit here</h3>"
    }

}

// delete function
function deletebtn(index) {

    let localdata = localStorage.getItem("localdata");

    if (localdata == null) {
        localtextarry = [];

    } else {
        localtextarry = JSON.parse(localdata);
    }

    localtextarry.splice(index, 1);
    localStorage.setItem("localdata", JSON.stringify(localtextarry))
    showcard();

}
// edit

// clear
function clearall() {

    let localdata = localStorage.getItem("localdata");


    if (localdata == null) {
        localtextarry = [];

    } else {
        localtextarry = JSON.parse(localdata);
    }
    localtextarry = [];
    localStorage.setItem("localdata", JSON.stringify(localtextarry))
    showcard();
}


// function search(){
//  let search = document.getElementById("search");
//  let searchvalue = search.value.toLowerCase();
//  search.addEventListener("input", function find(){
//      let card = document.getElementsByClassName("card");
//      Array.from(card).forEach( function(e){
//          let cardtext = e.getElementsByTagName("p")[0].innerText; 

//          if(cardtext.includes(searchvalue)){
//             e.style.display = "block"
//          }else{
//             e.style.display = "none"
//          }

//      })

//  })}
let toggole = document.getElementById('flexSwitchCheckChecked');
let navbar = document.getElementById('navbar');
let links = document.getElementById('nav-link');
toggole.addEventListener("click", toggolebtn);
function toggolebtn(){
  navbar.classList.toggle("checked")
  links.classList.toggle("links")
 
}