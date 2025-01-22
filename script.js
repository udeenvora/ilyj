document.getElementById("yes-btn").addEventListener("click", function () {
    const clickSound = document.getElementById("click-sound");
    const loveSong = document.getElementById("love-song");

    clickSound.play();

    document.getElementById("message").classList.add("hidden");
    document.getElementById("celebration-container").classList.remove("hidden");

    for (let i = 0; i < 50; i++) {
        let confetti = document.createElement("div");
        confetti.classList.add("confetti");
        confetti.style.left = `${Math.random() * 100}%`;
        confetti.style.animationDelay = `${Math.random() * 2}s`;
        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 2000);
    }
});

document.getElementById("show-letter-btn").addEventListener("click", function () {
    const loveSong = document.getElementById("love-song");
    loveSong.play();

    document.getElementById("celebration-container").classList.add("hidden");
    document.getElementById("letter-container").classList.remove("hidden");
});

document.getElementById("no-btn").addEventListener("click", function () {
    const clickSound = document.getElementById("click-sound");
    clickSound.play();

    this.classList.add("shrink");

    const message = document.querySelector(".main-text");

    if (message.innerHTML === "Will you be my valentine?") {
        message.innerHTML = "Are you sure?";
    } else if (message.innerHTML === "Are you sure?") {
        message.innerHTML = "Baby, think again...";
    } else if (message.innerHTML === "Baby, think again...") {
        message.innerHTML = "YOU DON’T HAVE A CHOICE 😠";
        document.getElementById("no-btn").style.display = "none";
    }
});
