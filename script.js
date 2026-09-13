/* =====================================
   ❤️ BIRTHDAY WEBSITE DATA
===================================== */

const birthdayData = {

    girlfriendName: "sipra",

    yourName: "Sumanta",

    nickname: "geluuuuu",

    birthday: "2026-09-16",

    loveMessage: `
You make my world brighter every day.

I am so lucky to have you in my life.

Your smile, your kindness and your presence
make every moment special.

I hope this birthday brings you
all the happiness you deserve.

Happy Birthday, my love. ❤️

I will always be there for you.
    `,

    photos: [
        "photos/photo1.jpg",
        "photos/photo2.jpg",
        "photos/photo3.jpg",
        "photos/photo4.jpg"
    ],

    music: "music/birthday.mp3"

};


/* =====================================
   LOAD INFORMATION
===================================== */

document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("displayName").textContent =
        birthdayData.girlfriendName;

    document.getElementById("displayNickname").textContent =
        birthdayData.nickname;

    document.getElementById("finalName").textContent =
        birthdayData.girlfriendName;

    document.getElementById("signatureName").textContent =
        birthdayData.yourName;

    document.getElementById("finalYourName").textContent =
        birthdayData.yourName;

    document.getElementById("letterText").textContent =
        birthdayData.loveMessage;


    /* =====================================
       LOAD PHOTOS
    ===================================== */

    const gallery =
        document.getElementById("photoGallery");

    birthdayData.photos.forEach(function (photo) {

        const img = document.createElement("img");

        img.src = photo;

        img.alt =
            birthdayData.girlfriendName + " memory";

        gallery.appendChild(img);

    });


    /* =====================================
       LOAD MUSIC
    ===================================== */

    const music =
        document.getElementById("birthdayMusic");

    music.src = birthdayData.music;

    document.getElementById("songName").textContent =
        "A special song for " +
        birthdayData.girlfriendName +
        " ❤️";


    /* =====================================
       START COUNTDOWN
    ===================================== */

    startCountdown();


    /* =====================================
       START FLOATING HEARTS
    ===================================== */

    createHearts();

});


/* =====================================
   COUNTDOWN
===================================== */

function startCountdown() {

    function updateCountdown() {

        const now = new Date();

        let birthday =
            new Date(birthdayData.birthday);

        /*
        If birthday has already passed,
        use next year.
        */

        if (birthday < now) {

            birthday.setFullYear(
                now.getFullYear() + 1
            );

        }

        const difference =
            birthday - now;


        if (difference <= 0) {

            document.getElementById("days")
                .textContent = "00";

            document.getElementById("hours")
                .textContent = "00";

            document.getElementById("minutes")
                .textContent = "00";

            document.getElementById("seconds")
                .textContent = "00";

            document.getElementById("birthdayStatus")
                .textContent =
                "🎉 Happy Birthday! 🎉";

            launchConfetti();

            return;
        }


        const days =
            Math.floor(
                difference /
                (1000 * 60 * 60 * 24)
            );

        const hours =
            Math.floor(
                (difference /
                    (1000 * 60 * 60)) % 24
            );

        const minutes =
            Math.floor(
                (difference /
                    (1000 * 60)) % 60
            );

        const seconds =
            Math.floor(
                (difference / 1000) % 60
            );


        document.getElementById("days")
            .textContent =
            String(days).padStart(2, "0");

        document.getElementById("hours")
            .textContent =
            String(hours).padStart(2, "0");

        document.getElementById("minutes")
            .textContent =
            String(minutes).padStart(2, "0");

        document.getElementById("seconds")
            .textContent =
            String(seconds).padStart(2, "0");

    }


    updateCountdown();

    setInterval(updateCountdown, 1000);

}


/* =====================================
   START SURPRISE
===================================== */

function startSurprise() {

    launchConfetti();

    const music =
        document.getElementById("birthdayMusic");

    music.play().catch(function () {
        console.log("Music requires user interaction.");
    });


    document.querySelector(".countdown-section")
        .scrollIntoView({
            behavior: "smooth"
        });

}


/* =====================================
   GIFT
===================================== */

function openGift() {

    const message =
        document.getElementById("surpriseMessage");

    message.style.display = "block";

    const gift =
        document.getElementById("giftBox");

    gift.style.transform =
        "scale(1.2) rotate(5deg)";

    launchConfetti();

}


/* =====================================
   MUSIC
===================================== */

function toggleMusic() {

    const music =
        document.getElementById("birthdayMusic");

    if (music.paused) {

        music.play();

    } else {

        music.pause();

    }

}


/* =====================================
   MUSIC BUTTON
===================================== */

document.getElementById("musicButton")
    .addEventListener("click", function () {

        toggleMusic();

    });


/* =====================================
   FLOATING HEARTS
===================================== */

function createHearts() {

    const container =
        document.getElementById("hearts");


    setInterval(function () {

        const heart =
            document.createElement("div");

        heart.className =
            "floating-heart";

        heart.innerHTML =
            ["❤️", "💕", "💗", "💖", "💘"]
            [Math.floor(Math.random() * 5)];


        heart.style.left =
            Math.random() * 100 + "%";


        heart.style.fontSize =
            (15 + Math.random() * 25) + "px";


        heart.style.animationDuration =
            (5 + Math.random() * 6) + "s";


        container.appendChild(heart);


        setTimeout(function () {

            heart.remove();

        }, 12000);


    }, 600);

}


/* =====================================
   CONFETTI
===================================== */

function launchConfetti() {

    const container =
        document.getElementById("confetti");


    for (let i = 0; i < 100; i++) {

        const piece =
            document.createElement("div");

        piece.className =
            "confetti-piece";


        piece.style.left =
            Math.random() * 100 + "%";


        piece.style.animationDuration =
            (2 + Math.random() * 3) + "s";


        piece.style.animationDelay =
            Math.random() * 1.5 + "s";


        piece.style.transform =
            `rotate(${Math.random() * 360}deg)`;


        container.appendChild(piece);


        setTimeout(function () {

            piece.remove();

        }, 6000);

    }

}