if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  console.log('dark')
  setTheme('dark')
} else {
  console.log('light')
  setTheme('light')
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  const mode = e.matches ? 'dark' : 'light'
  console.log(mode)
  setTheme(mode)
})

// let theme = localStorage.getItem('theme');
// if (theme == null) {
//   setTheme('light');
// } else {
//   setTheme(theme);
// }

// let themeDots = document.getElementsByClassName('theme-dot');
// for (let themeDot of themeDots) {
//   let theme = themeDot.dataset.theme;
//   themeDot.addEventListener('click', function(){
//     setTheme(theme);
//   })
// }

function setTheme(theme) {
  document.getElementById('theme-style').href = 'css/' + theme + '.css';
  localStorage.setItem('theme', theme);
}
