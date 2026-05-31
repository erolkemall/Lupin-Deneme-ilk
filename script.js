// =========================================
// 1. SLIDER (ATLI KARINCA) DÜZENLEMELERİ
// =========================================
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let index = 0;
let sliderInterval;

function showSlide(i) {
    if (slides.length === 0) return; 
    slides.forEach(s => s.classList.remove("active"));
    dots.forEach(d => d.classList.remove("active"));
    
    slides[i].classList.add("active");
    if (dots[i]) dots[i].classList.add("active");
}

function nextSlide() { 
    if (slides.length === 0) return;
    index = (index + 1) % slides.length; 
    showSlide(index); 
}

function prevSlide() { 
    if (slides.length === 0) return;
    index = (index - 1 + slides.length) % slides.length; 
    showSlide(index); 
}

function goToSlide(i) { 
    index = i; 
    showSlide(index); 
}

if (slides.length > 0) {
    sliderInterval = setInterval(nextSlide, 5000);
}

// =========================================
// 2. SEKMELER (TABS)
// =========================================
function openTab(evt, tabName) {
    const tabContent = document.querySelectorAll(".tab-content");
    const tabLinks = document.querySelectorAll(".tab-link");
    
    if (tabContent.length > 0) {
        tabContent.forEach(c => c.classList.remove("active"));
        tabLinks.forEach(l => l.classList.remove("active"));
        
        const targetTab = document.getElementById(tabName);
        if (targetTab) targetTab.classList.add("active");
        
        if (evt && evt.currentTarget) {
            evt.currentTarget.classList.add("active");
        }
    }
}

// =========================================
// 3. MOBİL MENÜ (HAMBURGER)
// =========================================
function toggleMenu() {
    const menu = document.querySelector(".menu");
    if (menu) {
        menu.classList.toggle("active");
    }
}

// =========================================
// 4. ÇOKLU DİL DESTEĞİ (TR/EN) - GÜNCEL
// =========================================
let currentLang = "tr";
const translations = {
    tr: {
        "nav-home": "Anasayfa",
        "nav-about": "Hakkımızda",
        "nav-program": "Programlar",
        "nav-contact": "İletişim",
        "nav-product": "Ürünler",
        "cta-btn": "Bilgi Al",
        "banner-title": "Geleceğin Mutlu Çocuklarını Birlikte Büyütüyoruz",
        "banner-desc": "Lupin Preschool ile oyun ve eğitim iç içe.",
        "about-banner-title": "Biz Kimiz?",
        "about-banner-desc": "Lupin Preschool'da çocukların hayal dünyasını yeşertiyoruz."
    },
    en: {
        "nav-home": "Home",
        "nav-about": "About Us",
        "nav-program": "Programs",
        "nav-contact": "Contact",
        "nav-product": "Products",
        "cta-btn": "Get Info",
        "banner-title": "Growing Future's Happy Children Together",
        "banner-desc": "Play and education intertwined at Lupin Preschool.",
        "about-banner-title": "Who Are We?",
        "about-banner-desc": "We nurture the imagination of children at Lupin Preschool."
    }
};

function changeLang() {
    currentLang = currentLang === "tr" ? "en" : "tr";
    
    for (let key in translations[currentLang]) {
        const el = document.getElementById(key);
        if (el !== null && el !== undefined) {
            el.innerText = translations[currentLang][key];
        }
    }
    
    const langBtn = document.querySelector(".lang-btn");
    if (langBtn) {
        langBtn.innerText = currentLang === "tr" ? "EN" : "TR";
    }
}

// =========================================
// 5. MODAL VE POPUP YÖNETİMİ
// =========================================
function openInfoModal() {
  const modal = document.getElementById("info-modal");
  if (modal) modal.classList.add("show");
}

function closeInfoModal() {
  const modal = document.getElementById("info-modal");
  if (modal) modal.classList.remove("show");
}

function handleInfoSubmit(event) {
  event.preventDefault();
  closeInfoModal(); 
  const successPopup = document.getElementById('success-popup');
  if (successPopup) successPopup.classList.add('show');
  const minimalForm = document.querySelector('.modal-minimal-form');
  if (minimalForm) minimalForm.reset();
}

function closePopup() {
  const successPopup = document.getElementById('success-popup');
  if (successPopup) {
    successPopup.classList.remove('show');
  }
}

// =========================================
// SEPET ÇEKMECESİ ANA SİSTEM FONKSİYONLARI
// =========================================
function toggleCartSidebar() {
  const cartSidebar = document.getElementById("cart-sidebar");
  if (cartSidebar) {
    cartSidebar.classList.toggle("active");
  }
}

function updateCartUI() {

  const cartData = JSON.parse(localStorage.getItem("lupinCartItems") || "[]");

  const cartBadge = document.getElementById("cart-count");
  const itemsContainer = document.getElementById("cart-sidebar-items");
  const totalPriceElement = document.getElementById("cart-total-price");

  if (cartBadge) cartBadge.innerText = cartData.length;

  if (!itemsContainer) return;

  itemsContainer.innerHTML = "";

  let total = 0;

  cartData.forEach((item, i) => {
    total += item.price;

    itemsContainer.innerHTML += `
      <div class="cart-item">
        <img src="${item.img}" class="cart-item-img">
        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <span>${item.price} TL</span>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${i})">X</button>
      </div>
    `;
  });

  if (totalPriceElement) {
    totalPriceElement.innerText = total + " TL";
  }
}
  
  if (totalPriceElement) {
    totalPriceElement.innerText = totalSum + " TL";
  }


function addToCart(itemName, itemPrice, itemImg) {

  const cartData = JSON.parse(localStorage.getItem("lupinCartItems") || "[]");

  cartData.push({
    name: itemName,
    price: Number(itemPrice),
    img: itemImg
  });

  localStorage.setItem("lupinCartItems", JSON.stringify(cartData));

  updateCartUI();

  const cartSidebar = document.getElementById("cart-sidebar");
  if (cartSidebar) cartSidebar.classList.add("active");
}

function removeFromCart(itemIndex) {
  const cartData = JSON.parse(localStorage.getItem("lupinCartItems") || "[]");
  cartData.splice(itemIndex, 1);
  localStorage.setItem("lupinCartItems", JSON.stringify(cartData));
  updateCartUI();
}

// Dom Ayarları
document.addEventListener("DOMContentLoaded", function() {
  updateCartUI(); 

  const contactForm = document.querySelector('.lupin-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const successPopup = document.getElementById('success-popup');
      if (successPopup) successPopup.classList.add('show');
      this.reset();
    });
  }

  if (!localStorage.getItem("videoPopupWatchedKalicis")) {
    setTimeout(openVideoPopup, 1500);
  }
});

window.addEventListener("click", function(e) {
  const infoModal = document.getElementById("info-modal");
  const successPopup = document.getElementById("success-popup");
  const videoPopup = document.getElementById("video-announcement-popup");

  if (e.target === infoModal) closeInfoModal();
  if (e.target === successPopup) closePopup();
  if (e.target === videoPopup) closeVideoPopup();
});

// Video Ayarları
function openVideoPopup() {
  const videoPopup = document.getElementById("video-announcement-popup");
  if (videoPopup) videoPopup.classList.add("show");
}

function closeVideoPopup() {
  const videoPopup = document.getElementById("video-announcement-popup");
  if (videoPopup) {
    videoPopup.classList.remove("show");
    const iframe = videoPopup.querySelector("iframe");
    if (iframe) {
      const iframeSrc = iframe.src;
      iframe.src = iframeSrc;
    }
    localStorage.setItem("videoPopupWatchedKalicis", "true");
  }
}

if (!localStorage.getItem("lupinCartItems")) {
  localStorage.setItem("lupinCartItems", "[]");
}

document.addEventListener("DOMContentLoaded", function() {
  updateCartUI();
});