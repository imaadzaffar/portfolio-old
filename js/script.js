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

function setTheme(theme) {
  document.getElementById('theme-style').href = 'css/' + theme + '.css';
}
