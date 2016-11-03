$('<img/>').attr('src', 'images/forest.jpg')[0].onload = function() {
  debugger;
  $(this).remove(); // prevent memory leaks as @benweet suggested
  var loader = document.getElementsByClassName('loader')[0].style.display = 'none';
  document.getElementById('bodySection').removeAttribute('hidden');
  makeTextDraggable('#title', 50);
  makeTextDraggable('#description', 10);
  makeTextDraggable('#headerTitle', 50);
};


function makeTextDraggable(name, ms) {
  var titleText = $(name);
  var result = ''
  for (var i = 0; i < titleText.innerHTML.length; i ++) {
  let current = titleText.innerHTML[i];
    current = '<span class="draggable" style="animation-delay:'+ ms * i +'ms;">' + current + '</span>';
    result += current;
  }
  titleText.innerHTML = result;
}
