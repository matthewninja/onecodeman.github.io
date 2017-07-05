const colors = ['#84DCC6', '#FCB97D', '#8B95C9', '#DEC0F1', '#AF125A', '#E34A6F', '#1098F7',
                '#59A5D8'];
let myName = document.getElementById('name-title');

myName.onmouseover = function() {
  let randIndex = Math.floor( Math.random() * colors.length );
  let randColor = colors[randIndex];
  this.style.color = randColor;
}

/*
var statusDescription = document.getElementById('status-description');
var d = new Date();

var currentHour = d.getHours();

if (currentHour >= 6 && currentHour <= 17) {
  statusDescription.innerHTML = 'Currently training in the dungeon';
} else if (currentHour > 17 && currentHour <= 18) {
  statusDescription.innerHTML = 'Eating a big, nutritious meal.';
} else if (currentHour > 18 && currentHour < 20) {
  statusDescription.innerHTML = 'Healing for the next day.';
} else if (currentHour <= 6 && currentHour >= 20) {
  statusDescription.innerHTML = 'Sleeping. zzz';
}
*/
