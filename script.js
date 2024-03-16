const helloWorld = document.getElementById('helloWorld');
const letters = [' ', 'G', 'C', 'A', 'M'];
const delay = 200;

let index = 0;
let direction = 1;

function animate() {
    helloWorld.textContent = letters.slice(0, index + 1).join('');
    index += direction;

    if (index === letters.length - 1 || index === 0) {
        direction *= -1;
    }
}

setInterval(animate, delay);


window.onscroll = function () {
    scrollFunction()
};

function scrollFunction() {
    var scrollButton = document.getElementById("scrollBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollButton.style.display = "block"; // Tampilkan tombol saat pengguna telah menggulir cukup jauh ke bawah
    } else {
        scrollButton.style.display = "none"; // Sembunyikan tombol saat pengguna sudah di bagian atas halaman
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    }); // Menggulir halaman ke atas secara halus
}

// AOS Animasi
AOS.init();