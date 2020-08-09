console.log('JavaScript is working :)');

let theme = localStorage.getItem('theme');
if (theme == null) {
  setTheme('light');
} else {
  setTheme(theme);
}

let themeDots = document.getElementsByClassName('theme-dot');
for (var themeDot of themeDots) {
  let theme = themeDot.dataset.theme;
  themeDot.addEventListener('click', function(){
    setTheme(theme);
  })
}

function setTheme(theme) {
  document.getElementById('theme-style').href = theme + '.css';
  localStorage.setItem('theme', theme);
}