const menu = document.querySelector('.navbar #menu');
const nav = document.querySelector('.navbar .navbar-nav');

menu.addEventListener('click', function() {
    nav.classList.toggle('active')
});

// Fungsi untuk menampilkan atau menyembunyikan teks tambahan
function toggleMore() {
    var moreText = document.querySelector(".more");
    var btnText = document.getElementById("readMoreBtn");
  
    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      btnText.textContent = "Read Less";
    } else {
      moreText.style.display = "none";
      btnText.textContent = "Read More";
    }
  }
  
  // Menghubungkan fungsi dengan tombol "Read More"
  document.getElementById("readMoreBtn").addEventListener("click", toggleMore);
  
  