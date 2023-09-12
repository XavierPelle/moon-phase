console.log("Run");

let select = () => {
    console.log("Select Created");
    createSelect = document.createElement("select");
    createSelect.style.marginLeft= "-2%"
    createSelect.classList = "mainMenu";
    createSelect.id = "menu";

    for (i = 0 ; i < 28 ; i++) {
        createOption = document.createElement("option");
        createOption.value = i + 1 ;
        createOption.innerHTML = "Jour " + (i + 1); 
        createSelect.appendChild(createOption);
    }
    console.log("Option Created");
    document.body.appendChild(createSelect);
}

/*
let div = () => {
    console.log("Div Created");
    createDiv = document.createElement("div");
    createDiv.style.width = "110px";
    createDiv.style.height = "110px";
    createDiv.style.marginTop = "50px";
    createDiv.style.backgroundImage = "url('img.avif')";
    createDiv.style.backgroundPosition = "-40px -85px"

    document.body.appendChild(createDiv);
}

document.addEventListener("change", (e) => {
    if (e.target.id === "menu"){
        let imgBackground = e.target.value * -100;
        createDiv.style.backgroundPosition = `${imgBackground}px -65px`;
    }
});

select();
div();

*/

let div = () => {
    console.log("Div Created");
    createDiv = document.createElement("div");
    createDiv.id = "DivID";
    createDiv.style.width = "100px";
    createDiv.style.height = "100px";
    createDiv.style.marginTop = "50px";
    createDiv.style.backgroundImage = "url('moon_phases.jpg')";
    document.body.appendChild(createDiv);
}

let menu_event = () => {
    let menu = document.getElementById("menu");
    menu.addEventListener("change",   (e) => {
        selectedDay = menu.value ;
        console.log("Selected Day : " + selectedDay);
        changeImage(selectedDay) ;
    }
)}

let startH = -27 ;
let startV = -46 ;   
let offsetH = -141.5 ;
let offsetV = -130.5 ;

changeImage = (day) => {

    console.log("Changing image to " + day);
    let mydiv = document.getElementById("DivID") ;

    let calcH = (startH + (offsetH * (day%7)));
    let calcV = (startV + (offsetV * (Math.floor(day/7))));
    let finalH =  calcH + "px  " ;
    let finalV = calcV + "px";
    console.log(day, finalH, finalV);
    mydiv.style.backgroundPosition = finalH + finalV ;
    
}

select();
div();
menu_event();
changeImage(0);