	
// tooltip
$(document).ready(function(){
$('[data-toggle="tooltip"]').tooltip(); 
});


// hide onscrool
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
			
var currentScrollpos = window.pageYOffset;
if (prevScrollpos > currentScrollpos) {
	document.getElementById("navbar2").style.top = "0";
}else {
	document.getElementById("navbar2").style.top = "-40px";
}
	prevScrollpos = currentScrollpos;

}


// dropdown
$(document).ready(function(){
$("#nav li").hover(
function(){
	$(this).children('ul').hide();
	$(this).children('ul').fadeIn('slow');
},
function () {
	$('ul', this).fadeOut('slow');            
});
});

// $( function() {
//     $( "#menu" ).menu();
//   } );

	

// back to top
        var $backToTop = $('#button');
        $backToTop.hide();

        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 20) {
                $backToTop.fadeIn();
            } else {
                $backToTop.fadeOut();
            }
        });

        $backToTop.on('click', function () {
            $("html, body").animate({scrollTop: 0}, 2000);
        });



//slick
$('.autoplay').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
});


$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 6,
  slidesToScroll: 1
});



// coutdown (hitung mundur)
$(document).ready(function() {
	var detik = 0;
	var menit = 6;
	var jam = 0;

	function hitung() {
		setTimeout(hitung,1000);
		$('#tampilkan').html(jam+" : "+ menit +" : "+ detik);
		detik --;
			if(detik < 0) {
				detik = 59;
				menit --;
			if (menit < 5) {
				function warning() {
				$('#tampilkan').fadeOut();
				$('#tampilkan').fadeIn();
				}
				setInterval(warning, 1000);
				}
			if(menit < 0) {
				menit = 0;
				jam --;
			if(jam < 0){
				jam = 0;
				menit = 0;
				detik = 0;
			}
			}
			}
		}
hitung();

});



// Responsive
$(window).resize(function() {
  var width = $(window).width();
  if (width < 1300){
    alert('Layar Anda Terlalu Kecil');
    $('#blink').html('<h1>MAAF LAYAR ANDA TERLALU KECIL JADI TIDAK BISA DIBUKA HALAMAN INI</h1>')

    function kelapKelip() {
	$('#blink h1').fadeOut();
	$('#blink h1').fadeIn();
	}
	setInterval(kelapKelip, 500);
  }
});


