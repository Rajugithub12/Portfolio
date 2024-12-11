/*!
=========================================================
* Meyawo Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});


document.getElementById('ContactMe').addEventListener('click', function() {
    var contactDetailsDiv = document.getElementById('contactDetails');
    contactDetailsDiv.innerHTML = `
    Contact Details:
     <div class="social-links text-right m-auto ml-sm-auto">
                 <a href="https://www.instagram.com/raju_hankare_/" class="link"><i class="ti-instagram"></i></a>
                <a href="https://www.linkedin.com/in/raju-hankare" class="link"><i class="ti-linkedin"></i></a>
     </div>
        <p>WhatsApp No: +91 8766734708</p>
        <p>Email Id: <a href="mailto:rajuofficial272@gmail.com">rajuofficial272@gmail.com</a></p>
    `;
    contactDetailsDiv.classList.add('alert', 'alert-info');
});