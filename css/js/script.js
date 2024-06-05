document.addEventListener('DOMContentLoaded', function() {
    var nameInput = document.getElementById('name');
    nameInput.value = "Hai Nama";

    var contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(event) {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var message = document.getElementById('message').value;

        if(name === "" || email === "" || phone === "" || message === "") {
            alert("Harap isi semua kolom formulir.");
            event.preventDefault();
        }
    });

    // Ambil semua elemen tombol di dalam navbar
    var buttons = document.querySelectorAll('.navbar li a');

    // Tambahkan event listener untuk setiap tombol
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Hapus kelas active dari semua tombol
            buttons.forEach(function(btn) {
                btn.classList.remove('active');
            });

            // Tambahkan kelas active ke tombol yang diklik
            button.classList.add('active');
        });
    });
});