const backgroundMusic = document.getElementById("backgroundMusic");
const toggleSoundButton = document.getElementById("toggleSound");
const dontClickButton = document.getElementById("dontClick");

let clickedOnce = false; // Biến để kiểm tra trạng thái nhấn nút "DON'T CLICK THIS BUTTON"

// Tự động phát nhạc khi tải trang
window.addEventListener("load", () => {
    backgroundMusic.play();
});

// Điều khiển bật/tắt âm thanh
toggleSoundButton.addEventListener("click", () => {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        toggleSoundButton.textContent = "🔊"; // Icon bật nhạc
    } else {
        backgroundMusic.pause();
        toggleSoundButton.textContent = "🔇"; // Icon tắt nhạc
    }
});

// Xử lý sự kiện khi nhấn "DON'T CLICK THIS BUTTON"
dontClickButton.addEventListener("click", () => {
    if (!clickedOnce) {
        dontClickButton.textContent = "NOOOOOOO";
        setTimeout(() => {
            dontClickButton.style.display = "none"; // Ẩn nút sau khi hiển thị "NOOOOOOO"
        }, 1000); // Đợi 1 giây rồi ẩn nút
        clickedOnce = true;
    } else {
        // Đổi nhạc nền
        backgroundMusic.src = "assets/Recording.mp4"; // Đường dẫn đến nhạc mới
        backgroundMusic.play(); // Phát nhạc mới ngay lập tức
        clickedOnce = false; // Đặt lại trạng thái để có thể nhấn lại lần nữa nếu nút quay trở lại
    }
});
