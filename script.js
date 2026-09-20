const content = document.getElementById("content");
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

const clickSound = document.getElementById("clickSound");
function playClick() {
    clickSound.currentTime = 0;
    clickSound.play();
}
document.addEventListener("click", function (event) {

    if (event.target.tagName === "BUTTON") {
        playClick();
    }

});

const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

let musicPlaying = false;

musicButton.addEventListener("click", function () {

    if (musicPlaying) {

        music.pause();
        musicPlaying = false;
        musicButton.classList.remove("playing");

    } else {

        music.play();
        musicPlaying = true;
        musicButton.classList.add("playing");

    }

});

// ==========================================
// BOTÓN "NO"
// ==========================================

yesButton.addEventListener("click", function () {

    content.innerHTML = `
        <h1>♡</h1>

        <p class="message">
            damn it
        </p>
    `;
});


// ==========================================
// BOTÓN "SÍ, BUENO, SERÁ MEJOR QUE NO"
// ==========================================

noButton.addEventListener("click", function () {

    content.innerHTML = `
        <h1>♡</h1>

        <p class="message">
            que es bromaaa, chill out
        </p>

        <div class="buttons">
            <button id="secondYes">siiii</button>
            <button id="secondNo">nop</button>
        </div>
    `;


    // SEGUNDO "SÍ"
    document.getElementById("secondYes").addEventListener("click", function () {
                music.play();
        musicPlaying = true;
        musicButton.classList.add("playing");

        content.innerHTML = `
            <h1>♡</h1>

            <p class="message">
                ou yea
            </p>

            <p class="birthday-intro">
                por ciertooo...
            </p>

            <button id="birthdayButton" class="birthday-button">
                Feliz cumpleaños :)
            </button>
        `;

        createHearts(50);

        document
            .getElementById("birthdayButton")
            .addEventListener("click", showBirthday);
    });


    // SEGUNDO "NO"
    document.getElementById("secondNo").addEventListener("click", function () {

        content.innerHTML = `
            <h1>♡</h1>

            <p class="message">
                es de entender
            </p>
        `;
    });
});


// ==========================================
// PANTALLA DE CUMPLEAÑOS
// ==========================================

function showBirthday() {

    document.body.classList.add("birthday-screen");

    content.innerHTML = `

        <div class="stars">
            ☆　★　　☆　　 ★　　☆
            ★　　 ☆　　★　　 ☆
            ☆　　★　　 ☆　　★
        </div>

        <div class="birthday-layout">

            <!-- FOTO IZQUIERDA -->
            <div class="birthday-image">
                <img src="foto1.jpg" alt="Foto izquierda">
            </div>


            <!-- TEXTO CENTRAL -->
            <div class="birthday-text">

                <h1>
                    FELIZ CUMPLEAÑOS<br>
                    DE 18 AÑOSSS!!!
                </h1>

                <p>
                    ya eres oficialmente un adulto, que aunque no lo diga
                    en documentos es tu día.
                </p>

                <p>
                    espero te lo pases bien, que uno no cumple 18 años
                    todos los días.
                </p>

                <p>
                    espero que te vaya bien todo y que sigas cumpliendo
                    más años al igual que tus metas, que sé que eres capaz
                    de conseguirlas con lo listo que eres.
                
                </p>

                    - Para Joshua
                    de anonimo001 :)
                </p>

            </div>


            <!-- FOTO DERECHA -->
            <div class="birthday-image">
                <img src="foto2.jpg" alt="Foto derecha">
            </div>

        </div>

    `;
}


// ==========================================
// CORAZONES
// ==========================================

function createHearts(amount) {

    for (let i = 0; i < amount; i++) {

        const heart = document.createElement("div");

        heart.className = "floating-heart";
        heart.innerHTML = "♡";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.animationDuration =
            (3 + Math.random() * 4) + "s";

        heart.style.animationDelay =
            Math.random() * 2 + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 8000);
    }
}