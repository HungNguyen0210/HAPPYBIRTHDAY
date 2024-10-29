const giftBox = document.getElementById("giftBox");
const hoverImage = document.getElementById("hoverImage");
const birthdayForm = document.getElementById("birthdayForm");
const birthdayInput = document.getElementById("birthdayInput");
const birthdaySound = document.getElementById("birthdaySound");

const correctBirthday = "30/10/2003";

// Khi nhấp vào hộp quà
giftBox.addEventListener("click", function() {
    giftBox.style.display = "none";
    hoverImage.style.display = "block";
    birthdaySound.currentTime = 0;
    birthdaySound.play();

    setTimeout(() => {
        hoverImage.style.display = "none";
        birthdayForm.style.display = "flex";
    }, 4000);
});

// Xử lý khi người dùng submit form
birthdayForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const enteredBirthday = birthdayInput.value.trim();

    if (enteredBirthday === correctBirthday) {
        window.location.href = "newpage.html"; // Chuyển đến trang có background
    } else {
        alert("Ngày sinh không đúng! Vui lòng thử lại.");
    }
});
