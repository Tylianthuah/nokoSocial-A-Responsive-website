// !Menu-Item
const menuItem = document.querySelectorAll('.menu-item');

// !menu-item Active
const nonActiveMenu = () => {
  menuItem.forEach((item) => {
    item.classList.remove('active');
  });
};
menuItem.forEach((item) => {
  item.addEventListener('click', () => {
    nonActiveMenu();
    item.classList.add('active');

    if (item.id != 'notifications') {
      document.querySelector('.notifications-popup').style.display = 'none';
    } else {
      document.querySelector('.notifications-popup').style.display = 'block';
      document.querySelector(
        '#notifications .notification-count'
      ).style.display = 'none';
    }
  });
});

//!Message
const message = document.querySelector('.messages');
console.log(message);
const messageNotification = document.querySelector('#message-notification');
messageNotification.addEventListener('click', () => {
  message.style.boxShadow = '0 0 2rem var(--color-primary)';
  setInterval(() => {
    message.style.boxShadow = "none";
  }, 2000)
});
