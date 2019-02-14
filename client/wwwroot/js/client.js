$(function(){
    // preload audio
    var toast = new Audio('media/toast.wav');
    // set the key that we are listening for
    var keycode = 27;
    // listen for clicks on the code class
    $('.code').on('click', function(e) {
        // don't refresh the page
        e.preventDefault();
        // first pause the audio (in case it is still playing)
        toast.pause();
        // reset the audio
        toast.currentTime = 0;
        // play audio
        toast.play();

        // set the value of the toast data, this is coming from the HTML, near lines 78,87,96
        $("#product").text($(this).parent().data("product").name);
        $("#code").text($(this).parent().data("code"));

        // show toast
        $("#toast").toast({ autohide: false }).toast("show");
    });

    // listen for keypresses in the body of HTML doc
    // keydown is an event action
    $("body").keydown(function (event) {
        // if the key matches the key defined above, hide the toast
        if (event.originalEvent.keyCode === keycode) {
            $('#toast').toast('hide');
        }
    });
});
