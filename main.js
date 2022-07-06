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
const fontSize = document.querySelectorAll(".choose-size span");
const root = document.querySelector(":root");
const color = document.querySelectorAll(".choose-color span");
const bg1 = document.querySelector(".bg-1");
const bg2 = document.querySelector(".bg-2");
const bg3 = document.querySelector(".bg-3");


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
}

// Closing the modal function
const closeModal = (e) => {
  
  if(e.target.classList.contains("customize-theme")){
      themeModal.style.display = "none"
  } else {
    themeModal.style.display = "grid"
  }
}

// CloseModal
themeModal.addEventListener("click" ,  closeModal);

// openModal
theme.addEventListener("click" , openModal)


// Changing the font size
const nonActiveFontSize = () => {
  fontSize.forEach(size => {
    size.classList.remove("active");
  })
}
fontSize.forEach( size => {
  size.addEventListener("click",() => {
    let font_size;
    nonActiveFontSize();
    size.classList.add("active")
    if(size.classList.contains("font-size-1")){
      font_size = "10px";
      root.style.setProperty("--sticky-top-left", "5.4rem")
      root.style.setProperty("--sticky-top-right", "5.4rem")
    }
  
    else if (size.classList.contains("font-size-2")) {
      font_size = "13px"
      root.style.setProperty("--sticky-top-left", "5.4rem")
      root.style.setProperty("--sticky-top-right", "-7rem")
    }
    else if (size.classList.contains("font-size-3")) {
      font_size = "16px"
      root.style.setProperty("--sticky-top-left", "-2rem")
      root.style.setProperty("--sticky-top-right", "-17rem")
    }
    else if (size.classList.contains("font-size-4")) {
      font_size = "19px"
      root.style.setProperty("--sticky-top-left", "-5rem")
      root.style.setProperty("--sticky-top-right", "-25rem")
    }
    else if (size.classList.contains("font-size-5")) {
      font_size = "22px"
      root.style.setProperty("--sticky-top-left", "-12rem")
      root.style.setProperty("--sticky-top-right", "-35rem")
    }
  document.querySelector("html").style.fontSize = font_size;
  })
})

// Changing the colour
const nonActiveColour = () => {
  color.forEach(color => {
    color.classList.remove("active");
  })
}

color.forEach((color) => {
  color.addEventListener("click", () => {
    nonActiveColour();
    color.classList.add("active");
    if(color.classList.contains("color-1")){
      root.style.setProperty("--color-primary", "hsl(252, 75%, 60%)")
    }
    else if(color.classList.contains("color-2")) {
      root.style.setProperty("--color-primary", "hsl(52, 75%, 60%)")
    }

    else if(color.classList.contains("color-3")) {
      root.style.setProperty("--color-primary", "hsl(352, 75%, 60%)")
    }

    else if(color.classList.contains("color-4")) {
      root.style.setProperty("--color-primary", "hsl(152, 75%, 60%)")
    }

    else if(color.classList.contains("color-5")) {
      root.style.setProperty("--color-primary", "hsl(202, 75%, 60%)")
    }
  })
})

// Changing the background
let lightColorLightness;
let darkColorLightness;
let whiteColorLightness;

const changeBg = () => {
  root.style.setProperty("--light-color-lightness" , lightColorLightness)
  root.style.setProperty("--dark-color-lightness" , darkColorLightness)
  root.style.setProperty("--white-color-lightness" , whiteColorLightness)
}


bg1.addEventListener("click" , () => {
  lightColorLightness = "95%";
  darkColorLightness = "17%";
  whiteColorLightness = "100%";


  bg2.classList.remove("active");
  bg1.classList.add("active");
  bg3.classList.remove("active");

  changeBg();
})


bg2.addEventListener("click", () => {
  lightColorLightness = "15%";
  darkColorLightness = "95%";
  whiteColorLightness = "20%"

  bg2.classList.add("active");
  bg1.classList.remove("active");
  bg3.classList.remove("active");
  changeBg();
})

bg3.addEventListener("click", () => {
  lightColorLightness = "0%";
  darkColorLightness = "95%";
  whiteColorLightness = "10%"

  bg2.classList.remove("active");
  bg1.classList.remove("active");
  bg3.classList.add("active");

  changeBg();
})