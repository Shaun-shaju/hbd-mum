$shy_display = false;

function reset() {
  $("#me").fadeIn("slow");
  $shy_display = false;
  }

$('#top').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
 });

$( "#me" ).hover(function() {
  $( "#me" ).fadeOut("slow", function() {
    if(!$shy_display) {
      alert("If you hadn't noticed, I am shy");
      $shy_display = true;
      }
    });
  });

setTimeout(function () {
  $(".element0 .type").typed({
    strings: ["sudo apt-get install shaun"],
    typeSpeed: 30, // typing speed
    backDelay: 750, // pause before backspacing
    loop: false, // loop on or off (true or false)
    loopCount: 1, // number of loops, false = infinite
    callback: function () {} // call function after typing is done
  });
}, 0);

setTimeout(function () {
  $(".element1").css("display", "inherit");
  $(".element1 .type").typed({
    strings: ["shaun -r /wish"],
    typeSpeed: 30, // typing speed
    backDelay: 750, // pause before backspacing
    loop: false, // loop on or off (true or false)
    loopCount: 1, // number of loops, false = infinite
    callback: function () {} // call function after typing is done
  });
}, 2000);

setTimeout(function () {
  $(".element2").css("display", "inherit");
  $(".element2 .type").typed({
    strings: ["cd /wish"],
    typeSpeed: 30, // typing speed
    backDelay: 750, // pause before backspacing
    loop: false, // loop on or off (true or false)
    loopCount: 1, // number of loops, false = infinite
    callback: function () {} // call function after typing is done
  });
}, 4000);

setTimeout(function () {
  $(".element3").css("display", "inherit");
  $(".element3 .type").typed({
    strings: ["sudo apt-get install docker"],
    typeSpeed: 30, // typing speed
    backDelay: 750, // pause before backspacing
    loop: false, // loop on or off (true or false)
    loopCount: 1, // number of loops, false = infinite
    callback: function () {} // call function after typing is done
  });
}, 6000);

setTimeout(function () {
  $(".element4").css("display", "inherit");
  $(".element4 .type").typed({
    strings: ["sudo docker env-build happy_birthday_mum"],
    typeSpeed: 30, // typing speed
    backDelay: 750, // pause before backspacing
    loop: false, // loop on or off (true or false)
    loopCount: 1, // number of loops, false = infinite
    callback: function () {} // call function after typing is done
  });
}, 10000);

setTimeout(function () {
  $(".element5").css("display", "inherit");
  $(".element5 .type").typed({
    strings: ["sudo docker run --name happy_birthday_mum -it debian"],
    typeSpeed: 30, // typing speed
    backDelay: 750, // pause before backspacing
    loop: false, // loop on or off (true or false)
    loopCount: 1, // number of loops, false = infinite
    callback: function () {} // call function after typing is done
  });
}, 15000);

setTimeout(function () {
  $(".element6").css("display", "inherit");
  $(".element6 .type").typed({
    strings: ["   "],
    typeSpeed: 30, // typing speed
    backDelay: 750, // pause before backspacing
    loop: false, // loop on or off (true or false)
    loopCount: 1, // number of loops, false = infinite
    callback: function () {} // call function after typing is done
  });
}, 20000);

setTimeout(function () {
  $(".element7").css("display", "inherit");
  $(".element7 .type").typed({
    strings: ["**************************************************************"],
    typeSpeed: 30, // typing speed
    backDelay: 750, // pause before backspacing
    loop: false, // loop on or off (true or false)
    loopCount: 1, // number of loops, false = infinite
    callback: function () {} // call function after typing is done
  });
}, 24000);

setTimeout(function () {
  $(".element8").css("display", "inherit");
  $(".element8 .type").typed({
    strings: ["                               🅗🅐🅟🅟🅨 🅑🅘🅡🅣🅗🅓🅐🅨, 🅜🅤🅜."],
    typeSpeed: 30, // typing speed
    backDelay: 750, // pause before backspacing
    loop: false, // loop on or off (true or false)
    loopCount: 1, // number of loops, false = infinite
    callback: function () {} // call function after typing is done
  });
}, 24000);
setTimeout(function () {
  $(".element9").css("display", "inherit");
  $(".element9 .type").typed({
    strings: ["**************************************************************"],
    typeSpeed: 30, // typing speed
    backDelay: 750, // pause before backspacing
    loop: false, // loop on or off (true or false)
    loopCount: 1, // number of loops, false = infinite
    callback: function () {} // call function after typing is done
  });
}, 24000);

setTimeout(function () {
  $(".element10").css("display", "inherit");
  $(".element10 .type").typed({
    strings: ["     "],
    typeSpeed: 30, // typing speed
    backDelay: 750, // pause before backspacing
    loop: false, // loop on or off (true or false)
    loopCount: 1, // number of loops, false = infinite
    callback: function () {} // call function after typing is done
  });
}, 40000);

$(".home-link").mouseup(function() {
  $(".home").fadeOut("slow", function() {
    $(".work").fadeOut("slow", function() {
      $(".project").fadeOut("slow", function() {
        reset();
        $(".home").fadeIn("slow");
        });
      });
    });
  });

$(".work-link").mouseup(function() {
  $(".home").fadeOut("slow", function() {
    $(".work").fadeOut("slow", function() {
      $(".project").fadeOut("slow", function() {
        reset();
        $(".work").fadeIn("slow");
        });
      });
    });
  });

$(".project-link").mouseup(function() {
  $(".home").fadeOut("slow", function() {
    $(".work").fadeOut("slow", function() {
      $(".project").fadeOut("slow", function() {
        reset();
        $(".project").fadeIn("slow");
        });
      });
    });
  });