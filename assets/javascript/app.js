$(".navT").on("click", function(){
  $(this).toggleClass("active");
  $("#menu").toggleClass("open");
  $(".content").toggleClass("shift");
});

function submitMessage(){
    event.preventDefault();
    $.ajax({
        url: "https://formspree.io/jhartatx@gmail.com",
        method: "POST",
        data: {
            name: $('#name').val(),
            email: $('#email').val(),
            message: $('#message').val()
        },
        dataType: 'json'
    }).done(function(){
        $('#name, #email, #message').val('');
        $('#thankYou, #contactSubmit').toggle('slow');
    })
}

$(".extreme").on("click", function(){
  window.open("https://github.com/jhartatx/Extreme-Capitalism", "_blank");
});

$(".on-tap").on("click", function(){
  window.open("https://jhartatx.github.io/On-Tap-ATX/", "_blank");
});

$(".gt").on("click", function(){
  window.open("https://jhartatx.github.io/Giftastic/", "_blank");
});

$(".hm").on("click", function(){
  window.open("https://jhartatx.github.io/Hangman-Game/", "_blank");
});
