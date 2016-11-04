$('<img/>').attr('src', 'images/forest.jpg')[0].onload = function() {
  $(this).remove(); // prevent memory leaks as @benweet suggested
  $('.loader')[0].style.display = 'none';
  $('#bodySection')[0].removeAttribute('hidden');
  makeTextDraggable('#title', 50);
  makeTextDraggable('#description', 10);
  makeTextDraggable('#headerTitle', 50);
};


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
