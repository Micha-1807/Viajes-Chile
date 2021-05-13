
/* smooth scroll (nav) */
$("a").click(function(event){
    if (this.hash !== "") {
        event.preventDefault();

        var gato = this.hash;

        $ ("html, body").animate({
            scrollTop: $(gato).offset().top
        }, 800, function(){
            window.location.hash = gato;
        });
    }
});

/* tooltips (icons) */
$(function () {
    $('[data-toggle="popover"]').popover()
  })


  