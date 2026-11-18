const menu = document.querySelector('.menu');
menu?.addEventListener('click', () => {
  const links = document.querySelector('.navlinks');
  const open = links.style.display === 'flex';
  links.style.display = open ? 'none' : 'flex';
  if (!open) Object.assign(links.style, {position:'absolute',top:'70px',left:'0',right:'0',padding:'22px',background:'#11151a',border:'1px solid #252b32',flexDirection:'column',gap:'20px'});
});
