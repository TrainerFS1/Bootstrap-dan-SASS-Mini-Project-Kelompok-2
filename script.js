
$(document).ready(function() {
  $("#askNowBtn").click(function(e) {
    e.preventDefault();
    $("#formModal").modal("show");
  });

  // Contoh: Tambahkan event handler untuk form submit
  $("form").submit(function(e) {
      e.preventDefault(); // Hentikan submission form default
      // Lakukan validasi atau kirim data
      alert("Pertanyaan Anda telah dikirim. Kami akan segera menjawabnya!");
      $('#formModal').modal('hide'); // Tutup modal setelah submit
  });
});
$(document).ready(function(){
  // Fungsi untuk menambahkan efek fade-in saat elemen masuk ke dalam view saat digulir
  function fadeInOnScroll() {
    $('.fade-in').each(function(){
      var bottom_of_element = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if( bottom_of_window > bottom_of_element ){
        $(this).addClass('show');
      }
    });
  }

  // Panggil fungsi fadeInOnScroll saat dokumen dimuat dan di-scroll
  fadeInOnScroll();
  $(window).scroll(function() {
    fadeInOnScroll();
  });
});
$(document).ready(function() {
  $("form").submit(function(e) {
    e.preventDefault(); // Mencegah pengiriman form standar

    // Simulasi pengiriman data
    var name = $("#nama").val();
    var email = $("#email").val();
    var message = $("#pesan").val();

    // Tambahkan validasi atau pengiriman data ke server di sini

    // Tampilkan pesan sukses atau lakukan reset form
    alert("Pesan telah dikirim! Terima kasih, " + name + ".");
    $('#formModal').modal('hide'); // Tutup modal setelah pengiriman
  });
});

  
  $(document).ready(function() {
    $(".card-img-top").click(function() {
        var produkJudul = $(this).closest(".card").find(".menu-title").text();
        var produkDeskripsi = $(this).closest(".card").find(".card-text:not(:has(strong))").text();
        var produkHarga = $(this).closest(".card").find(".harga").last().text();
        var produkGambar = $(this).attr("src");

        var modalContent = '<div class="modal-dialog modal-dialog-centered">' +
            '<div class="modal-content">' +
            '<div class="modal-header">' +
            '<h5 class="modal-title">' + produkJudul + '</h5>' +
            '<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>' +
            '</div>' +
            '<div class="modal-body">' +
            '<img src="' + produkGambar + '" class="img-fluid mb-2 modal-product-image" alt="' + produkJudul + '">' +
            '<p><strong>Deskripsi:</strong> ' + produkDeskripsi + '</p>' +
            '<p><strong>Harga:</strong> ' + produkHarga + '</p>' +
            '</div>' +
            '</div>' +
            '</div>';

        $(".modal").remove();
        $("body").append('<div class="modal fade" id="detailProdukModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">' + modalContent + '</div>');
        $("#detailProdukModal").modal("show");
    });
});



document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) { // Ubah angka 50 untuk sensitivitas
      document.querySelector('.navbar').classList.add('scrolled');
    } else {
      document.querySelector('.navbar').classList.remove('scrolled');
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const subscribeButton = document.querySelector('.subscribe-button');
  subscribeButton.addEventListener('click', function(e) {
    e.preventDefault();
    const emailInput = document.querySelector('.form-newslatter input[type="email"]');
    const email = emailInput.value;
    if (email === '') {
      alert('Silakan masukkan email Anda terlebih dahulu.');
    } else {
      alert(`Terima kasih telah berlangganan dengan email: ${email}`);
      emailInput.value = '';
    }
  });
});


window.addEventListener('scroll', () => {
  const homeContent = document.querySelector('.home-content');
  const homeImg = document.querySelector('.home-img');
  const position = homeContent.getBoundingClientRect().top;
  const screenPosition = window.innerHeight / 1.3;

  if (position < screenPosition) {
      homeContent.style.animation = 'fadeIn 2s ease-out forwards';
      homeImg.style.animation = 'fadeIn 2s ease-out forwards';
  }
});

