const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');

menuBtn.onclick = () => {
  sidebar.classList.add('open');
  overlay.classList.add('active');
};

closeBtn.onclick = () => {
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
};

overlay.onclick = () => {
  sidebar.classList.remove('open');
  overlay.classList.remove('active');
};
