const colors = ['#84DCC6', '#FCB97D', '#8B95C9', '#DEC0F1', '#AF125A', '#E34A6F', '#1098F7',
                '#59A5D8'];
let myName = document.getElementById('name-title');

myName.onmouseover = function() {
  let randIndex = Math.floor( Math.random() * colors.length );
  let randColor = colors[randIndex];
  this.style.color = randColor;
}
