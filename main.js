// !Menu-Item
const menuItem = document.querySelectorAll('.menu-item');

// !Messages
const messages = document.querySelector('.messages');
const messageNotification = document.querySelector('#message-notification');
const message = document.querySelectorAll(".message");
const messageSearch = document.getElementById("message-search");

// !Theme 
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const closeBtn = document.querySelector(".close");
const fontSize = document.querySelectorAll(".choose-size span")
const root = document.querySelector(":root");


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

//!====================Message============================


//Searching a chat mechanism

const searchChat = () => {
  let val = messageSearch.value.toLowerCase();
  message.forEach( chat => {
  let name = chat.querySelector("h5").textContent.toLowerCase();
  console.log(name.indexOf(val))
  if(name.indexOf(val) != -1){
    chat.style.display = "flex"
  }
  else {
    chat.style.display = "none";
  }
})
}
messageSearch.addEventListener("keyup", searchChat);


// Highlighting the message box to focus it..
messageNotification.addEventListener('click', () => {
  messages.style.boxShadow = '0 0 2rem var(--color-primary)';
  setInterval(() => {
    messages.style.boxShadow = "none";
  }, 2000)

  document.querySelector("#message-notification .notification-count").style.display= "none";

});


// !==================Theme Custimization=====================

// Opening the modal function
const openModal = () => {
  themeModal.style.display = "grid";
  console.log(themeModal.style.display)
}

// Closing the modal function
const closeModal = (e) => {
  if(e.target.classList.contains("customize-theme")){
   themeModal.style.display = "none"
   console.log(themeModal.style.display)
  
  } else {
    themeModal.style.display = "grid"
  }
}

closeBtn.addEventListener("click" , ()=> {
  themeModal.style.display = "none";
  console.log(themeModal.style.display)
 })

// CloseModal
themeModal.addEventListener("click" ,  closeModal);

// openModal
theme.addEventListener("click" , openModal)

// Changing the font size
fontSize.forEach( size => {
  let font_size;
  size.addEventListener("click",() => {

    if(size.classList.contains("font-size-1")){
      font_size = "10px";
      root.style.setProperty("----sticky-top-left", "5.4rem")
      root.style.setProperty("----sticky-top-right", "5.4rem")
    }
  
    else if (size.classList.contains("font-size-2")) {
      font_size = "13px"
      root.style.setProperty("----sticky-top-left", "5.4rem")
      root.style.setProperty("----sticky-top-right", "-7rem")
    }
    else if (size.classList.contains("font-size-3")) {
      font_size = "16px"
      root.style.setProperty("----sticky-top-left", "-2rem")
      root.style.setProperty("----sticky-top-right", "-17rem")
    }
    else if (size.classList.contains("font-size-4")) {
      font_size = "19px"
      root.style.setProperty("----sticky-top-left", "-5rem")
      root.style.setProperty("----sticky-top-right", "-25rem")
    }
    else if (size.classList.contains("font-size-5")) {
      font_size = "22px"
      root.style.setProperty("----sticky-top-left", "-12rem")
      root.style.setProperty("----sticky-top-right", "-35rem")
    }
  console.log(size)
  document.querySelector("html").style.fontSize = font_size;
  })
  
  
})