$('<img/>').attr('src', 'images/forest.jpg')[0].onload = function() {
  $(this).remove(); // prevent memory leaks as @benweet suggested
  $('.loader')[0].style.display = 'none';
  $('#bodySection')[0].removeAttribute('hidden');
  callTyped("#mainTitle", "Agustín Falco Developer^500");

};

$('.container').click(function() {
  options = $('.media-options');
  if (options.hasClass('cls')) {
    options.addClass('active-somked-container');
  } else {
    options.removeClass('active-smoked-container');
  }
});

function makeTextDraggable(name, ms) {
  var titleText = $(name)[0];
  var result = ''
  var randomValue;
  var randomTime;
  for (var i = 0; i < titleText.innerHTML.length; i ++) {
    randomTime = Math.random() * 100 || 100;
    randomValue = i ? i * Math.random() * 10 : -100;
    randomValue = i / 2 ? randomValue : - randomValue;
    var current = titleText.innerHTML[i];
    current = '<span class="draggable" style="animation-delay:'+ randomTime +'ms;left: ' + randomValue + 'vw;">' + current + '</span>';
    result += current;
  }
  titleText.innerHTML = result;
}

function callTyped(target, string) {
  $(target).typed({
    strings: [string],
    typeSpeed: 30,
    loop: false,
    contentType: 'html', // or text
    callback: function(){

      $(".typed-cursor").remove();
      $("#title").typed({
        strings: ["Greetings! I'm Agustín^1000"],
        typeSpeed: 30,
        loop: false,
        contentType: 'html', // or text
        callback: function(){
          $(".typed-cursor").remove();
          $("#description").typed({
            strings: ["Programer by definition,^500 if you have something interesting to code,^250 what are you waiting for? =) "],
            typeSpeed: 20,
            loop: false,
            contentType: 'html', // or text
            callback: function(){
            },
            resetCallback: function() { }
          });
        },
        resetCallback: function() { }
      });
    },
    resetCallback: function() { }
  });
}
