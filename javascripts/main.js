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
  for (var i = 0; i < titleText.innerHTML.length; i ++) {
  let current = titleText.innerHTML[i];
    current = '<span class="draggable" style="animation-delay:'+ ms * i +'ms;">' + current + '</span>';
    result += current;
  }
  titleText.innerHTML = result;
}
