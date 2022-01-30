

var paises = [];


var clicked = false;





document.getElementById("start").addEventListener("click", function () {
    document.querySelector(".startScreen").style.display = "none";
    document.querySelector(".buttondiv").style.display = "flex";
    makeSound("click");

})




document.querySelector(".down").addEventListener("click", function () {
    document.querySelector(".down").classList.toggle("rotation");
    if (clicked === false) {

        document.querySelector(".instructions").style.display = "flex";

        clicked = true;
        makeSound("click")

    } else {

        document.querySelector(".instructions").style.display = "none";

        clicked = false;
        makeSound("click")
    }

})




var numberOfButtons = document.querySelectorAll(".presser").length;

for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".presser")[i].addEventListener("click", function () {

        var buttonId = this.id;
        switch (buttonId) {

            case "lisbon":

                if (clicked === false) {
                    lisbon();
                    clicked = true;
                    makeSound("popup");

                } else {
                    document.getElementById("perguntaLisboa").style.display = "none";
                    clicked = false;

                }

                break;
            case "madrid":
                if (clicked === false) {
                    madrid();
                    clicked = true;
                    makeSound("popup");
                } else {
                    document.getElementById("perguntaMadrid").style.display = "none";
                    clicked = false;
                }

                break;
            case "paris":
                if (clicked === false) {
                    paris();
                    clicked = true;
                    makeSound("popup");
                } else {
                    document.getElementById("perguntaParis").style.display = "none";
                    clicked = false;
                }
                break;
            case "amsterdam":
                if (clicked === false) {
                    amsterdam();
                    clicked = true;
                    makeSound("popup");
                } else {
                    document.getElementById("perguntaAmsterdam").style.display = "none";
                    clicked = false;
                }
                break;
            case "dublin":
                if (clicked === false) {
                    dublin();
                    clicked = true;
                    makeSound("popup");
                } else {
                    document.getElementById("perguntaDublin").style.display = "none";
                    clicked = false;
                }
                break;
            case "rome":
                if (clicked === false) {
                    rome();
                    clicked = true;
                    makeSound("popup");
                } else {
                    document.getElementById("perguntaRome").style.display = "none";
                    clicked = false;
                }
                break;
            case "warsaw":
                if (clicked === false) {
                    warsaw();
                    clicked = true;
                    makeSound("popup");
                } else {
                    document.getElementById("perguntaWarsaw").style.display = "none";
                    clicked = false;
                }
                break;
            case "berlin":
                if (clicked === false) {
                    berlin();
                    clicked = true;
                    makeSound("popup");
                } else {
                    document.getElementById("perguntaBerlin").style.display = "none";
                    clicked = false;
                }
                break;
            case "copenhagen":
                if (clicked === false) {
                    copenhagen();
                    clicked = true;
                    makeSound("popup");
                } else {
                    document.getElementById("perguntaCopenhagen").style.display = "none";
                    clicked = false;
                }
                break;
            case "bucharest":
                if (clicked === false) {
                    bucharest();
                    clicked = true;
                    makeSound("popup");
                } else {
                    document.getElementById("perguntaBucharest").style.display = "none";
                    clicked = false;
                }
        }
    });
};


function lisbon() {
    document.getElementById("perguntaLisboa").style.display = "flex";

    document.querySelector(".lisboa-btn").addEventListener("click", function () {
        var respostaPortugal = document.getElementById("ansLisbon").value;
        if (respostaPortugal.toLowerCase() === "Lisboa".toLowerCase()) {
            paises.push("portugal");
            console.log(paises)

            document.getElementById("perguntaLisboa").style.display = "none";
            document.getElementById("lisbon").style.display = "none";
            clicked = false;
            makeSound("right");
            if (paises.includes("portugal") &&
                paises.includes("espanha") &&
                paises.includes("franca") &&
                paises.includes("paises baixos") &&
                paises.includes("dinamarca") &&
                paises.includes("alemanha") &&
                paises.includes("italia") &&
                paises.includes("roménia") &&
                paises.includes("polónia") &&
                paises.includes("irlanda")
            ) {
                document.getElementById("vitoria").style.display = "flex";
                document.querySelector(".buttondiv").style.display = "none";
                makeSound("victory");
            }
        } else {
            document.getElementById("perguntaLisboa").style.display = "none";
            document.getElementById("gameOver").style.display = "flex";
            document.querySelector(".buttondiv").style.display = "none";
            makeSound("wrong");


        }
    })
}

function madrid() {
    document.getElementById("perguntaMadrid").style.display = "flex";

    document.querySelector(".madrid-btn").addEventListener("click", function () {
        var respostaMadrid = document.getElementById("ansMadrid").value;
        if (respostaMadrid.toLowerCase() === "mais".toLowerCase()) {
            paises.push("espanha")
            console.log(paises)
            document.getElementById("perguntaMadrid").style.display = "none";
            document.getElementById("madrid").style.display = "none";
            clicked = false;
            makeSound("right");
            if (paises.includes("portugal") &&
            paises.includes("espanha") &&
            paises.includes("franca") &&
            paises.includes("paises baixos") &&
            paises.includes("dinamarca") &&
            paises.includes("alemanha") &&
            paises.includes("italia") && 
            paises.includes("roménia") && 
            paises.includes("polónia") &&
            paises.includes("irlanda")
        ) {
            document.getElementById("vitoria").style.display = "flex";
            document.querySelector(".buttondiv").style.display = "none";
            makeSound("victory");
        }
        } else {
            document.getElementById("perguntaMadrid").style.display = "none";
            document.getElementById("gameOver").style.display = "flex";
            document.querySelector(".buttondiv").style.display = "none"
            makeSound("wrong");
        }
    })
}

function paris() {
    document.getElementById("perguntaParis").style.display = "flex";

    document.querySelector(".paris-btn").addEventListener("click", function () {
        var respostaParis = document.getElementById("ansParis").value;
        if (respostaParis.toLowerCase() === "Sena".toLowerCase()) {
            paises.push("franca")
            console.log(paises)
            document.getElementById("perguntaParis").style.display = "none";
            document.getElementById("paris").style.display = "none";
            clicked = false;
            makeSound("right");
            if (paises.includes("portugal") &&
            paises.includes("espanha") &&
            paises.includes("franca") &&
            paises.includes("paises baixos") &&
            paises.includes("dinamarca") &&
            paises.includes("alemanha") &&
            paises.includes("italia") && 
            paises.includes("roménia") && 
            paises.includes("polónia") &&
            paises.includes("irlanda")
        ) {
            document.getElementById("vitoria").style.display = "flex";
            document.querySelector(".buttondiv").style.display = "none";
            makeSound("victory");
        }
        } else {
            document.getElementById("perguntaParis").style.display = "none";
            document.getElementById("gameOver").style.display = "flex";
            document.querySelector(".buttondiv").style.display = "none";
            makeSound("wrong");
        }
    })
}

function amsterdam() {
    document.getElementById("perguntaAmsterdam").style.display = "flex";

    document.querySelector(".amsterdam-btn").addEventListener("click", function () {
        var respostaAmsterdam = document.getElementById("ansAmsterdam").value;
        if (respostaAmsterdam.toLowerCase() === "Amesterdão".toLowerCase()) {
            paises.push("paises baixos")
            document.getElementById("perguntaAmsterdam").style.display = "none";
            document.getElementById("amsterdam").style.display = "none";
            clicked = false;
            makeSound("right");
            if (paises.includes("portugal") &&
            paises.includes("espanha") &&
            paises.includes("franca") &&
            paises.includes("paises baixos") &&
            paises.includes("dinamarca") &&
            paises.includes("alemanha") &&
            paises.includes("italia") && 
            paises.includes("roménia") && 
            paises.includes("polónia") &&
            paises.includes("irlanda")
        ) {
            document.getElementById("vitoria").style.display = "flex";
            document.querySelector(".buttondiv").style.display = "none";
            makeSound("victory");
        }
        } else {
            document.getElementById("perguntaAmsterdam").style.display = "none";
            document.getElementById("gameOver").style.display = "flex";
            document.querySelector(".buttondiv").style.display = "none";
            makeSound("wrong");
        }
    })
}

function dublin() {
    document.getElementById("perguntaDublin").style.display = "flex";

    document.querySelector(".dublin-btn").addEventListener("click", function () {
        var respostaDublin = document.getElementById("ansDublin").value;
        if (respostaDublin.toLowerCase() === "Batata".toLowerCase() || respostaDublin.toLowerCase() === "Batatas".toLowerCase()) {
            paises.push("irlanda");
            document.getElementById("perguntaDublin").style.display = "none";
            document.getElementById("dublin").style.display = "none";
            clicked = false;
            makeSound("right");
            if (paises.includes("portugal") &&
            paises.includes("espanha") &&
            paises.includes("franca") &&
            paises.includes("paises baixos") &&
            paises.includes("dinamarca") &&
            paises.includes("alemanha") &&
            paises.includes("italia") && 
            paises.includes("roménia") && 
            paises.includes("polónia") &&
            paises.includes("irlanda")
        ) {
            document.getElementById("vitoria").style.display = "flex";
            document.querySelector(".buttondiv").style.display = "none";
            makeSound("victory");
        }
        } else {
            document.getElementById("perguntaDublin").style.display = "none";
            document.getElementById("gameOver").style.display = "flex";
            document.querySelector(".buttondiv").style.display = "none";
            makeSound("wrong");
        }
    })
}

function rome() {
    document.getElementById("perguntaRome").style.display = "flex";

    document.querySelector(".rome-btn").addEventListener("click", function () {
        var respostaRome = document.getElementById("ansRome").value;
        if (respostaRome.toLowerCase() === "Milão".toLowerCase() || respostaRome.toLowerCase() === "Nápoles".toLowerCase() || respostaRome.toLowerCase() === "Turim".toLowerCase()) {
            paises.push("italia");
            document.getElementById("perguntaRome").style.display = "none";
            document.getElementById("rome").style.display = "none";
            clicked = false;
            makeSound("right");
            if (paises.includes("portugal") &&
                paises.includes("espanha") &&
                paises.includes("franca") &&
                paises.includes("paises baixos") &&
                paises.includes("dinamarca") &&
                paises.includes("alemanha") &&
                paises.includes("italia") && 
                paises.includes("roménia") && 
                paises.includes("polónia") &&
                paises.includes("irlanda")
            ) {
                document.getElementById("vitoria").style.display = "flex";
                document.querySelector(".buttondiv").style.display = "none";
                makeSound("victory");
            }
        } else {
            document.getElementById("perguntaRome").style.display = "none";
            document.getElementById("gameOver").style.display = "flex";
            document.querySelector(".buttondiv").style.display = "none";
            makeSound("wrong");

        }
    })
}

function warsaw() {
    document.getElementById("perguntaWarsaw").style.display = "flex";

    document.querySelector(".warsaw-btn").addEventListener("click", function () {

        if (document.getElementById("lviv").checked == true) {
            paises.push("polónia");            document.getElementById("perguntaWarsaw").style.display = "none";
            document.getElementById("warsaw").style.display = "none";
            clicked = false;
            makeSound("right");
            if (paises.includes("portugal") &&
            paises.includes("espanha") &&
            paises.includes("franca") &&
            paises.includes("paises baixos") &&
            paises.includes("dinamarca") &&
            paises.includes("alemanha") &&
            paises.includes("italia") && 
            paises.includes("roménia") && 
            paises.includes("polónia") &&
            paises.includes("irlanda")
        ) {
            document.getElementById("vitoria").style.display = "flex";
            document.querySelector(".buttondiv").style.display = "none";
            makeSound("victory");
        }
        } else {
            document.getElementById("perguntaWarsaw").style.display = "none";
            document.getElementById("gameOver").style.display = "flex";
            document.querySelector(".buttondiv").style.display = "none";
            makeSound("wrong");
        }
    })
}

function berlin() {
    document.getElementById("perguntaBerlin").style.display = "flex";

    document.querySelector(".berlin-btn").addEventListener("click", function () {
        var respostaBerlin = document.getElementById("ansBerlin").value;
        if (respostaBerlin.toLowerCase() === "Munique".toLowerCase()) {
            paises.push("alemanha");
            document.getElementById("perguntaBerlin").style.display = "none";
            document.getElementById("berlin").style.display = "none";
            clicked = false;
            makeSound("right");
            if (paises.includes("portugal") &&
            paises.includes("espanha") &&
            paises.includes("franca") &&
            paises.includes("paises baixos") &&
            paises.includes("dinamarca") &&
            paises.includes("alemanha") &&
            paises.includes("italia") && 
            paises.includes("roménia") && 
            paises.includes("polónia") &&
            paises.includes("irlanda")
        ) {
            document.getElementById("vitoria").style.display = "flex";
            document.querySelector(".buttondiv").style.display = "none";
            makeSound("victory");
        }
        } else {
            document.getElementById("perguntaBerlin").style.display = "none";
            document.getElementById("gameOver").style.display = "flex";
            document.querySelector(".buttondiv").style.display = "none";
            makeSound("wrong");
        }
    })
}

function copenhagen() {
    document.getElementById("perguntaCopenhagen").style.display = "flex";

    document.querySelector(".copenhagen-btn").addEventListener("click", function () {
        var respostaCopenhagen = document.getElementById("ansCopenhagen").value;
        if (respostaCopenhagen.toLowerCase() === "hans christian andersen".toLowerCase()) {
            paises.push("dinamarca");
            document.getElementById("perguntaCopenhagen").style.display = "none";
            document.getElementById("copenhagen").style.display = "none";
            clicked = false;
            makeSound("right");
            if (paises.includes("portugal") &&
            paises.includes("espanha") &&
            paises.includes("franca") &&
            paises.includes("paises baixos") &&
            paises.includes("dinamarca") &&
            paises.includes("alemanha") &&
            paises.includes("italia") && 
            paises.includes("roménia") && 
            paises.includes("polónia") &&
            paises.includes("irlanda")
        ) {
            document.getElementById("vitoria").style.display = "flex";
            document.querySelector(".buttondiv").style.display = "none";
            makeSound("victory");
        }
        } else {
            document.getElementById("perguntaCopenhagen").style.display = "none";
            document.getElementById("gameOver").style.display = "flex";
            document.querySelector(".buttondiv").style.display = "none";
            makeSound("wrong");
        }
    })
}

function bucharest() {
    document.getElementById("perguntaBucharest").style.display = "flex";

    document.querySelector(".bucharest-btn").addEventListener("click", function () {

        if (document.getElementById("romanico").checked == true) {
            paises.push("roménia");
            document.getElementById("perguntaBucharest").style.display = "none";
            document.getElementById("bucharest").style.display = "none";
            clicked = false;
            makeSound("right");
            if (paises.includes("portugal") &&
            paises.includes("espanha") &&
            paises.includes("franca") &&
            paises.includes("paises baixos") &&
            paises.includes("dinamarca") &&
            paises.includes("alemanha") &&
            paises.includes("italia") && 
            paises.includes("roménia") && 
            paises.includes("polónia") &&
            paises.includes("irlanda")
        ) {
            document.getElementById("vitoria").style.display = "flex";
            document.querySelector(".buttondiv").style.display = "none";
            makeSound("victory");
        }
        } else {
            document.getElementById("perguntaBucharest").style.display = "none";
            document.getElementById("gameOver").style.display = "flex";
            document.querySelector(".buttondiv").style.display = "none"
            makeSound("wrong");
        }
    })
}

function makeSound(sound) {
    var audio = new Audio("sounds/" + sound + ".wav");
    audio.play();
}