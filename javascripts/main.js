$('<img/>').attr('src', 'images/forest.jpg')[0].onload = function() {
  $(this).remove(); // prevent memory leaks as @benweet suggested
  $('.loader')[0].style.display = 'none';
  $('#bodySection')[0].removeAttribute('hidden');
  callTyped("#mainTitle", "Agustín Falco - Senior Software Engineer^500");

};

$('.container').click(function() {
  options = $('.media-options');
  if (options.hasClass('cls')) {
    options.addClass('active-smoked-container');
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
    typeSpeed: 15,
    loop: false,
    contentType: 'html', // or text
    callback: function(){

      $(".typed-cursor").remove();
      $("#title").typed({
        strings: ["Greetings! I'm Agustín^700"],
        typeSpeed: 10,
        loop: false,
        contentType: 'html', // or text
        callback: function(){
          $(".typed-cursor").remove();
          $("#description").typed({
            strings: ["Engineer by definition,^250 if you have something interesting to code,^125 what are you waiting for? =) "],
            typeSpeed: 5,
            loop: false,
            contentType: 'html', // or text
            callback: function(){
              $('.media-options').addClass('active-smoked-container');
              beginLinkSequence();
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

function beginLinkSequence() {
  var githubContainer = $('.github-container').addClass('animation-left');
  githubContainer.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
    function(e) {
      var linkedinContainer = $('.linkedin-container').addClass('animation-right');
      linkedinContainer.one('webkitanimationend oanimationend msanimationend animationend',
        function(e){
          var twitterContainer = $('.twitter-container').addClass('animation-left');
          twitterContainer.one('webkitanimationend oanimationend msanimationend animationend',
            function(e) {
              var emailContainer = $('.email-container').addClass('animation-right');
            });
        });

    });
}
