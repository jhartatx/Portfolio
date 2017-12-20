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
