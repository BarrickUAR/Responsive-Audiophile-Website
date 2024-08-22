// HamburgerMenu Start

function toggleMenu() {
  const menuIcon = document.getElementById("menu-icon");
  const menuLinks = document.getElementById("menu-links");

  menuLinks.classList.toggle("show");

  if (menuLinks.classList.contains("show")) {
    menuIcon.innerHTML = "&#x2715;";
  } else {
    menuIcon.innerHTML = "&#9776;";
  }
}

// HamburgerMenu End

// modal start

function showBasket() {
  modal.showModal();
}

function closeBasket() {
  modal.close();
}

// modal 2

document.addEventListener('DOMContentLoaded', function() {
  const modal = document.getElementById('checkout-modal');
  const openModalButton = document.getElementById('pay-button');
  const closeModalButton = document.getElementById('close-checkout-modal');

  // Modal'ı aç
  openModalButton.addEventListener('click', function() {
      modal.showModal();
  });

  // Modal'ı kapat
  closeModalButton.addEventListener('click', function() {
      modal.close();
  });
});


// modal end

