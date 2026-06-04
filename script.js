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
// 4. DEVASA ÇOKLU DİL SÖZLÜĞÜ SİSTEMİ (TR/EN)
// =========================================
const translations = {
    tr: {
        // Navigasyon & Ortak Alanlar
        "nav-home": "Anasayfa",
        "nav-about": "Hakkımızda",
        "nav-contact": "İletişim",
        "nav-product": "Ürünler",
        "cta-btn": "Bilgi Al",
        "cart-title": "Sepetim",
        "cart-total-text": "Toplam:",
        "cart-checkout-btn": "Alışverişi Tamamla",
        "footer-brand-text": "Çocukların sevgiyle büyüdüğü, doğayla iç içe, oyun temelli mutlu bir gelecek hazırlıyoruz.",
        "footer-links-title": "Hızlı Bağlantılar",
        "footer-contact-title": "İletişim",
        "footer-copyright": "© 2026 Lupin Preschool. Tüm hakları saklıdır.",
        
        // Hızlı Bilgi Al Modali
        "modal-q-title": "Hızlı İletişim",
        "modal-q-sub": "Bizimle doğrudan iletişime geçebilir veya formu doldurarak sizi aramamızı isteyebilirsiniz.",
        "m-list-1": "Telefon", "m-list-2": "E-Posta", "m-list-3": "Konum",
        "m-list-3-val": "Uludağ Üni. Görükle Kampüsü",
        "modal-f-title": "Bilgi Talep Formu",
        "lbl-m-name": "Adınız Soyadınız", "lbl-m-phone": "Telefon Numaranız", "lbl-m-age": "Çocuğunuzun Yaşı",
        "opt-m-select": "Seçiniz...", "opt-m-age4": "4 Yaş Grubu", "opt-m-age5": "5 Yaş Grubu", "opt-m-age6": "6 Yaş Grubu",
        "m-submit-btn": "Beni Arayın ✨",

        // Başarı Pop-up & Video Pop-up
        "pop-success-title": "Mesajınız Alındı!",
        "pop-success-desc": "Lupin Preschool ailesine gösterdiğiniz ilgi için teşekkür ederiz. En kısa sürede sizinle iletişime geçeceğiz.",
        "pop-success-btn": "Harika!",
        "pop-video-title": "Tanıtım Videomuz Yayınlandı!",
        "pop-video-desc": "Lupin Preschool'un neşeli dünyasını, eğitim alanlarimizi ve mutlu çocuklarımızı yakından tanımak için videomuzu izleyin.",
        "pop-video-btn": "Harika, Keşfetmeye Başla! ✨",

        // INDEX.HTML ÖZEL
        "tab-text-1": "Eğitimimiz", "tab-text-2": "Yemek Menüsü", "tab-text-3": "Etkinlikler",
        "tab-h-1": "Modern Eğitim Yaklaşımı", "tab-p-1": "Lorem ipsum dolor sit amet..",
        "tab-h-2": "Sağlıklı Beslenme", "tab-p-2": "Diyetisyen onaylı, tamamen organik ve taze ürünlerle hazırlanan günlük menülerimiz.",
        "th-days": "Günler", "th-breakfast": "Sabah Kahvaltısı 🥛", "th-lunch": "Öğle Yemeği 🍲", "th-snack": "İkindi Ara Öğün 🍎",
        "td-pzt": "Pazartesi", "td-sal": "Salı", "td-crs": "Çarşamba", "td-prs": "Perşembe", "td-cum": "Cuma",
        "td-pzt-1": "Haşlanmış Yumurta, Beyaz Peynir, Zeytin, Tam Buğday Ekmeği, Ihlamur",
        "td-pzt-2": "Tel Şehriye Çorbası, Fırın Köfte, Patates Püresi, Yoğurt",
        "td-pzt-3": "Mevsim Meyveleri Tabağı, Kavrulmamış Kuruyemiş",
        "td-sal-1": "Peynirli Omlet, Çeri Domates, Salatalık, Süt",
        "td-sal-2": "Tarhana Çorbası, Tavuklu Pilav, Mevsim Salata",
        "td-sal-3": "Ev Yapımı Havuçlu Kek, Süt",
        "td-crs-1": "Krep, Bal ve Tereyağı, Kaşar Peyniri, Taze Sıkılmış Meyve Suyu",
        "td-crs-2": "Süzme Mercimek Çorbası, Kıymalı Makarna, Ayran",
        "td-crs-3": "Yoğurtlu Meyve Salatası",
        "td-prs-1": "Yulaf Ezmesi, Muz Dilimleri, Süt, Ceviz İçi",
        "td-prs-2": "Yayla Çorbası, Etli Mevsim Türlüsü, Bulgur Pilavı",
        "td-prs-3": "Peynirli Ev Poğaçası, Bitki Çayı",
        "td-cum-1": "Menemen, Zeytin, Peynir Tabağı, Süt",
        "td-cum-2": "Ezogelin Çorbası, Fırında Somon, Yeşil Salata",
        "td-cum-3": "Sütlaç",
        "tab-h-3": "Eğlenceli Etkinlikler", "tab-p-3": "Yüzme, drama, robotik kodlama ve satranç derslerimizle çok yönlü gelişim.",
        "g-text-1": "Oyun Alanımız", "g-text-2": "Eğitim Sınıfları", "g-text-3": "Sanat Atölyesi", "g-text-4": "Yemekhane",

        // HAKKIMIZDA ÖZEL
        "about-banner-title": "Biz Kimiz?",
        "about-banner-desc": "Lupin Preschool'da çocukların hayal dünyasını yeşertiyoruz.",
        "story-title": "Hikayemiz",
        "story-p1": "Lupin Preschool olarak, her çocuğun içindeki potansiyeli sevgiyle ortaya çıkarmak için yola çıktık. Amacımız sadece akademik bir temel atmak değil; kendine güvenen, doğayı seven, sorgulayan ve mutlu bireyler yetiştirmektir.",
        "story-p2": "Modern eğitim yaklaşımlarını, geleneksel aile sıcaklığı ile harmanlıyor; çocuklarımızın ikinci evi olmaktan gurur duyuyoruz. Senin de aileni bu yeşil ve mutlu yuvada görmekten mutlu duyarız.",
        "values-main-title": "Neden Lupin Preschool?",
        "val-card-t1": "Oyun Temelli Öğrenme", "val-card-d1": "Çocuklar en iyi oynarken öğrenir. Müfredatımız, keşfetmeye ve merak etmeye dayalı oyunlarla doludur.",
        "val-card-t2": "Doğa ile İç İçe", "val-card-d2": "Yeşili ve doğayı seven çocuklar yetiştiriyoruz. Açık hava etkinlikleriyle fiziksel gelişimlerini destekliyoruz.",
        "val-card-t3": "Güvenli Gelecek", "val-card-d3": "Fiziksel ve duygusal güvenliği en üst planda tutarak, özgürce hareket edebilecekleri modern sınıflar sunuyoruz.",

        // İLETİŞİM ÖZEL
        "contact-banner-title": "Bizimle İletişime Geçin",
        "contact-banner-desc": "Sorularınız, önerileriniz veya kayıt bilgi talepleriniz için her zaman buradayız.",
        "contact-main-title": "Sizi Dinlemek İçin Sabırsızlanıyoruz",
        "contact-main-desc": "Lupin Preschool ailesine katılmak, eğitim modelimiz hakkında detaylı bilgi almak veya kampüsümüzü ziyaret etmek için randevu oluşturabilirsiniz.",
        "c-card-t1": "Adresimiz", "c-card-t2": "Telefon", "c-card-t3": "E-Posta",
        "c-form-title": "Mesaj Gönderin",
        "lbl-c-name": "Adınız Soyadınız", "lbl-c-mail": "E-Posta Adresiniz", "lbl-c-phone": "Telefon Numaranız", "lbl-c-subject": "Konu", "lbl-c-msg": "Mesajınız",
        "c-submit-btn": "Mesajı Gönder",

        // ÜRÜNLER ÖZEL
        "prod-banner-title": "Eğitim Materyalleri & Ürünlerimiz",
        "prod-banner-desc": "Çocuklarımızın gelişimini destekleyen, doğallığı ve pedagojiyi buluşturan özel seçkimiz.",
        "badge-w1": "Doğal Ahşap", "badge-w2": "Denge Oyunu", "badge-b1": "Doğa Serisi", "badge-k1": "Duyusal Oyun",
        "prod-t1": "Ahşap Gürgen Set", "prod-d1": "İnce motor becerilerini ve uzamsal zekayı destekleyen, organik gürgen ağacından el yapımı set.",
        "prod-t2": "Akif Kuri Kitap Seti", "prod-d2": "Okul öncesi yaş grubuna özel; çevre bilinci, yardımlaşma ve doğa sevgisini aşılayan hikayeler.",
        "prod-t3": "Duyusal Keşif Kiti", "prod-d3": "Çocukların dokunma, koku ve görme algılarını harmanlayarak dünyayı keşfetmesini sağlayan özel materyal.",
        "prod-t4": "Ahşap Denge Blokları", "prod-d4": "Odaklanma süresini uzatan, çocukların el-göz koordinasyonunu zirveye çıkaran eğlenceli denge blokları.",
        "prod-btn1": "Sepete Ekle", "prod-btn2": "Sepete Ekle", "prod-btn3": "Sepete Ekle", "prod-btn4": "Sepete Ekle"
    },
    en: {
        // Navigation & Shared Areas
        "nav-home": "Home",
        "nav-about": "About Us",
        "nav-contact": "Contact",
        "nav-product": "Products",
        "cta-btn": "Get Info",
        "cart-title": "My Cart",
        "cart-total-text": "Total:",
        "cart-checkout-btn": "Checkout Now",
        "footer-brand-text": "We prepare a happy future built on love, nature, and play-based learning for our children.",
        "footer-links-title": "Quick Links",
        "footer-contact-title": "Contact",
        "footer-copyright": "© 2026 Lupin Preschool. All rights reserved.",
        
        // Info Modal
        "modal-q-title": "Quick Contact",
        "modal-q-sub": "You can contact us directly or fill out the form so we can call you back.",
        "m-list-1": "Phone", "m-list-2": "Email", "m-list-3": "Location",
        "m-list-3-val": "Uludag Uni. Gorukle Campus",
        "modal-f-title": "Information Request Form",
        "lbl-m-name": "Your Full Name", "lbl-m-phone": "Your Phone Number", "lbl-m-age": "Child's Age",
        "opt-m-select": "Select...", "opt-m-age4": "Age 4 Group", "opt-m-age5": "Age 5 Group", "opt-m-age6": "Age 6 Group",
        "m-submit-btn": "Call Me ✨",

        // Popups
        "pop-success-title": "Message Received!",
        "pop-success-desc": "Thank you for your interest in the Lupin Preschool family. We will contact you as soon as possible.",
        "pop-success-btn": "Great!",
        "pop-video-title": "Our Promo Video is Out!",
        "pop-video-desc": "Watch our video to closely discover the joyful world of Lupin Preschool, our educational areas, and happy children.",
        "pop-video-btn": "Great, Start Exploring! ✨",

        // INDEX.HTML
        "tab-text-1": "Education", "tab-text-2": "Food Menu", "tab-text-3": "Activities",
        "tab-h-1": "Modern Educational Approach", "tab-p-1": "Lorem ipsum dolor sit amet..",
        "tab-h-2": "Healthy Nutrition", "tab-p-2": "Our daily menus are nutritionist-approved, completely organic, and prepared with fresh products.",
        "th-days": "Days", "th-breakfast": "Breakfast 🥛", "th-lunch": "Lunch 🍲", "th-snack": "Snack 🍎",
        "td-pzt": "Monday", "td-sal": "Tuesday", "td-crs": "Wednesday", "td-prs": "Thursday", "td-cum": "Friday",
        "td-pzt-1": "Boiled Egg, Feta Cheese, Olives, Whole Wheat Bread, Linden Tea",
        "td-pzt-2": "Noodle Soup, Baked Meatballs, Mashed Potatoes, Yogurt",
        "td-pzt-3": "Seasonal Fruit Platter, Raw Nuts",
        "td-sal-1": "Cheese Omelet, Cherry Tomatoes, Cucumber, Milk",
        "td-sal-2": "Tarhana Soup, Chicken Rice, Seasonal Salad",
        "td-sal-3": "Homemade Carrot Cake, Milk",
        "td-crs-1": "Crepe, Honey & Butter, Cashar Cheese, Fresh Squeezed Juice",
        "td-crs-2": "Lentil Soup, Pasta with Minced Meat, Ayran",
        "td-crs-3": "Yogurt Fruit Salad",
        "td-prs-1": "Oatmeal, Banana Slices, Milk, Walnuts",
        "td-prs-2": "Yayla Soup, Seasonal Stew with Meat, Bulgur Rice",
        "td-prs-3": "Homemade Pastry with Cheese, Herbal Tea",
        "td-cum-1": "Menemen (Scrambled Eggs with Veggies), Olives, Cheese Platter, Milk",
        "td-cum-2": "Ezogelin Soup, Baked Salmon, Green Salad",
        "td-cum-3": "Rice Pudding",
        "tab-h-3": "Fun Activities", "tab-p-3": "Multidimensional development through swimming, drama, robotic coding, and chess lessons.",
        "g-text-1": "Our Playground", "g-text-2": "Classrooms", "g-text-3": "Art Studio", "g-text-4": "Dining Hall",

        // HAKKIMIZDA
        "about-banner-title": "Who Are We?",
        "about-banner-desc": "We nurture the imagination of children at Lupin Preschool.",
        "story-title": "Our Story",
        "story-p1": "As Lupin Preschool, we set out with love to bring out the potential within every child. Our goal is not just to lay an academic foundation, but to raise self-confident, nature-loving, inquiring, and happy individuals.",
        "story-p2": "We blend modern educational approaches with traditional family warmth; we are proud to be the second home of our children. We would be delighted to see your family in this green and happy nest.",
        "values-main-title": "Why Lupin Preschool?",
        "val-card-t1": "Play-Based Learning", "val-card-d1": "Children learn best while playing. Our curriculum is full of games based on discovery and curiosity.",
        "val-card-t2": "Intertwined with Nature", "val-card-d2": "We raise children who love green and nature. We support their physical development with outdoor activities.",
        "val-card-t3": "Safe Future", "val-card-d3": "By prioritizing physical and emotional safety, we offer modern classrooms where they can move freely.",

        // İLETİŞİM
        "contact-banner-title": "Get in Touch",
        "contact-banner-desc": "We are always here for your questions, suggestions, or registration requests.",
        "contact-main-title": "We Can't Wait to Hear From You",
        "contact-main-desc": "You can make an appointment to join the Lupin Preschool family, get detailed information about our education model, or visit our campus.",
        "c-card-t1": "Our Address", "c-card-t2": "Phone", "c-card-t3": "Email",
        "c-form-title": "Send a Message",
        "lbl-c-name": "Your Full Name", "lbl-c-mail": "Your Email Address", "lbl-c-phone": "Your Phone Number", "lbl-c-subject": "Subject", "lbl-c-msg": "Your Message",
        "c-submit-btn": "Send Message",

        // ÜRÜNLER
        "prod-banner-title": "Educational Materials & Products",
        "prod-banner-desc": "Our special selection that supports the development of our children, bringing together naturalness and pedagogy.",
        "badge-w1": "Natural Wood", "badge-w2": "Balance Game", "badge-b1": "Nature Series", "badge-k1": "Sensory Play",
        "prod-t1": "Beech Wood Set", "prod-d1": "A handmade set made of organic beech wood supporting fine motor skills and spatial intelligence.",
        "prod-t2": "Akif Kuri Book Set", "prod-d2": "Stories specially written for the preschool age group that instill environmental awareness, cooperation, and love of nature.",
        "prod-t3": "Sensory Discovery Kit", "prod-d3": "A special material that allows children to explore the world by blending their senses of touch, smell, and sight.",
        "prod-t4": "Wooden Balance Blocks", "prod-d4": "Fun balance blocks that extend focus time and maximize children's hand-eye coordination.",
        "prod-btn1": "Add to Cart", "prod-btn2": "Add to Cart", "prod-btn3": "Add to Cart", "prod-btn4": "Add to Cart"
    }
};

// Ürün Veri Sözlüğü (Sepet Dinamikleri İçin)
const productDetails = {
    1: { tr: "Ahşap Gürgen Set", en: "Beech Wood Set", price: 450, img: "img/urun1.jpg" },
    2: { tr: "Akif Kuri Kitap Seti", en: "Akif Kuri Book Set", price: 380, img: "img/urun2.jpg" },
    3: { tr: "Duyusal Keşif Kiti", en: "Sensory Discovery Kit", price: 620, img: "img/urun3.jpg" },
    4: { tr: "Ahşap Denge Blokları", en: "Wooden Balance Blocks", price: 510, img: "img/galeri1.jpg" }
};

function applyLanguage() {
    let currentLang = localStorage.getItem("lupinLang") || "tr";
    
    // Tüm standart metinleri ID üzerinden eşle
    for (let key in translations[currentLang]) {
        const el = document.getElementById(key);
        if (el) { 
            el.innerText = translations[currentLang][key];
        }
    }
    
    // Dil buton metnini ayarla
    const langBtn = document.querySelector(".lang-btn");
    if (langBtn) {
        langBtn.innerText = currentLang === "tr" ? "EN" : "TR";
    }

    // Aktif sayfa linkinin rengini koru (TR/EN geçişinde yeşil renk kaybolmasın)
    const activeNavs = ["nav-home", "nav-about", "nav-contact", "nav-product"];
    activeNavs.forEach(id => {
        const el = document.getElementById(id);
        if (el && el.style.color === "rgb(107, 203, 119)") {
            el.style.color = "#6BCB77";
        }
    });

    // Sepet arayüzünü güncel dil yapısına göre tazele
    updateCartUI();
}

function changeLang() {
    let currentLang = localStorage.getItem("lupinLang") || "tr";
    currentLang = currentLang === "tr" ? "en" : "tr";
    localStorage.setItem("lupinLang", currentLang); 
    applyLanguage();
}

// Ürünler sayfasından sepet dil senkronizasyonlu ekleme fonksiyonu
function addCustomProduct(id) {
    let currentLang = localStorage.getItem("lupinLang") || "tr";
    const prod = productDetails[id];
    if (prod) {
        // Ürün adı eklenirken o anki seçili dile göre eklenir
        const name = currentLang === "tr" ? prod.tr : prod.en;
        addToCart(name, prod.price, prod.img);
    }
}

// Çok dilli sepet tamamlama uyarısı
function checkoutAlert() {
    let currentLang = localStorage.getItem("lupinLang") || "tr";
    if (currentLang === "tr") {
        alert("Satın alma entegrasyonu bir sonraki aşamadır! ✨");
    } else {
        alert("Checkout integration is the next step! ✨");
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
    successPopup.classList.remove("show");
  }
}

// =========================================
// 6. SEPET ÇEKMECESİ ANA SİSTEM FONKSİYONLARI
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
  let currentLang = localStorage.getItem("lupinLang") || "tr";

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
          <span>${item.price} ${currentLang === 'tr' ? 'TL' : 'USD'}</span>
        </div>
        <button class="cart-item-remove" onclick="removeFromCart(${i})">X</button>
      </div>
    `;
  });

  if (totalPriceElement) {
    totalPriceElement.innerText = total + (currentLang === 'tr' ? ' TL' : ' USD');
  }
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

// =========================================
// 7. VIDEO AYARLARI VE POPUP YÖNETİMİ
// =========================================
function openVideoPopup() {
  const videoPopup = document.getElementById("video-announcement-popup");
  if (videoPopup) {
    videoPopup.classList.add("show");
    videoPopup.classList.add("active");
  }
}

function closeVideoPopup() {
  const videoPopup = document.getElementById("video-announcement-popup");
  if (videoPopup) {
    videoPopup.classList.remove("show");
    videoPopup.classList.remove("active");
    const iframe = videoPopup.querySelector("iframe");
    if (iframe) {
      const iframeSrc = iframe.src;
      iframe.src = iframeSrc; 
    }
    localStorage.setItem("videoPopupWatchedKalicis", "true");
  }
}

// =========================================
// 8. DOM AYARLARI VE EVENT LISTENERS
// =========================================
document.addEventListener("DOMContentLoaded", function() {
  if (!localStorage.getItem("lupinCartItems")) {
    localStorage.setItem("lupinCartItems", "[]");
  }
  
  // Önce dili uygula, sepet arayüzü otomatik tetiklenecek
  applyLanguage();

  const contactForm = document.querySelector('.lupin-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const successPopup = document.getElementById('success-popup');
      if (successPopup) successPopup.classList.add('show');
      this.reset();
    });
  }

  const isIndexPage = document.getElementById("video-announcement-popup");
  if (isIndexPage && !localStorage.getItem("videoPopupWatchedKalicis")) {
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