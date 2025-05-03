document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('loader').style.display = 'none';
	console.log('页面html已加载完成');
});

document.fonts.ready.then(() => {
  console.log('所有字体加载完成');
  document.documentElement.classList.add('fonts-loaded');
});
