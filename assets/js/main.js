/* RS Enterprises — shared header, footer and interactions.
   Edit contact details / menu once here and every page updates. */
(function () {
  var SITE = {
    phone: "+91 99633 33802",
    phoneLink: "+919963333802",
    tel: "040-48544579",
    telLink: "+914048544579",
    email: "inforsebuisness@gmail.com",
    whatsapp: "919963333802",
    address: "Prashanth Enclave, Jeedimetla Village, Quthbullapur, Hyderabad – 500067",
    logo: "images/rse-logo.jpg"
  };
  var NAV = [
    ["index.html", "Home", "home"],
    ["about.html", "About", "about"],
    ["products.html", "Products", "products"],
    ["services.html", "Services", "services"],
    ["contact.html", "Contact", "contact"]
  ];

  var icon = {
    phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.7.7a2 2 0 0 1 1.7 2z"/></svg>',
    mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 6L2 7"/></svg>',
    wa: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1s-.5-.1-.7.2-.8 1-.9 1.1-.3.2-.6.1a8.2 8.2 0 0 1-4-3.5c-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6a1.1 1.1 0 0 0-.8.4 3.4 3.4 0 0 0-1 2.5 5.9 5.9 0 0 0 1.2 3.1 13.5 13.5 0 0 0 5.2 4.6c1.9.8 2.7.9 3.6.7a3.1 3.1 0 0 0 2-1.4 2.5 2.5 0 0 0 .2-1.4c-.1-.2-.3-.3-.6-.4zM12 21.8a9.9 9.9 0 0 1-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4a9.8 9.8 0 1 1 8.3 4.6zm8.4-18.2A11.8 11.8 0 0 0 1.8 17.8L.1 24l6.4-1.7A11.8 11.8 0 0 0 12 23.7 11.8 11.8 0 0 0 20.4 3.6z"/></svg>'
  };

  var page = document.body.getAttribute("data-page");

  // ----- Header -----
  var links = NAV.map(function (n) {
    return '<li><a href="' + n[0] + '"' + (n[2] === page ? ' class="active" aria-current="page"' : "") + ">" + n[1] + "</a></li>";
  }).join("");
  var header =
    '<div class="topbar"><div class="container">' +
      '<div class="tb-left"><a href="tel:' + SITE.phoneLink + '">📞 ' + SITE.phone + '</a><a href="mailto:' + SITE.email + '">✉ ' + SITE.email + "</a></div>" +
      '<div class="tb-right">Authorised channel partner · Tungaloy · Blaser · Hittco · CUMI · Wendt · Sigma</div>' +
    "</div></div>" +
    '<header class="site-header"><div class="container nav">' +
      '<a class="brand" href="index.html" aria-label="RS Enterprises home"><img src="' + SITE.logo + '" alt="RS Enterprises logo" width="80" height="48">' +
      '<span class="brand-text">RS Enterprises<small>Industrial partner</small></span></a>' +
      '<button class="menu-btn" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>' +
      '<ul class="nav-links">' + links + '<li><a class="btn nav-cta" href="contact.html#enquiry">Get a Quote</a></li></ul>' +
    "</div></header>";
  document.body.insertAdjacentHTML("afterbegin", header);

  // ----- Footer -----
  var year = new Date().getFullYear();
  var footer =
    '<footer class="site-footer"><div class="container">' +
      '<div class="footer-grid">' +
        '<div class="f-brand"><img src="' + SITE.logo + '" alt="RS Enterprises"><p>Supplier of cutting tools, customised tooling, grinding and liquid tool solutions for precision manufacturing — Jeedimetla, Hyderabad.</p></div>' +
        "<div><h4>Company</h4><ul>" + NAV.map(function (n) { return '<li><a href="' + n[0] + '">' + n[1] + "</a></li>"; }).join("") + '<li><a href="rscustomised.html">RS Customised Tools</a></li></ul></div>' +
        '<div><h4>Partners</h4><ul><li><a href="https://www.tungaloy.co.jp/in" target="_blank" rel="noopener">Tungaloy</a></li><li><a href="https://www.blaser.com" target="_blank" rel="noopener">Blaser Swisslube</a></li><li><a href="https://www.hittco.com" target="_blank" rel="noopener">Hittco</a></li><li><a href="https://www.cumi-murugappa.com/" target="_blank" rel="noopener">CUMI</a></li><li><a href="https://www.wendtindia.com" target="_blank" rel="noopener">Wendt India</a></li><li><a href="https://sigmatoolings.com/" target="_blank" rel="noopener">Sigma Toolings</a></li></ul></div>' +
        "<div><h4>Get in touch</h4><ul>" +
          '<li><a href="tel:' + SITE.phoneLink + '">' + SITE.phone + "</a></li>" +
          '<li><a href="tel:' + SITE.telLink + '">' + SITE.tel + "</a></li>" +
          '<li><a href="mailto:' + SITE.email + '">' + SITE.email + "</a></li>" +
          "<li>" + SITE.address + "</li>" +
        "</ul></div>" +
      "</div>" +
      '<div class="footer-bottom"><span>© ' + year + " RS Enterprises. All rights reserved.</span><span>Jeedimetla, Hyderabad · India</span></div>" +
    "</div></footer>" +
    '<a class="wa-float" href="https://wa.me/' + SITE.whatsapp + '?text=' + encodeURIComponent("Hello RS Enterprises, I would like a tooling quote.") + '" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">' + icon.wa + "</a>";
  document.body.insertAdjacentHTML("beforeend", footer);

  // ----- Menu + sticky header -----
  var hdr = document.querySelector(".site-header");
  var btn = document.querySelector(".menu-btn");
  btn.addEventListener("click", function () {
    var open = document.body.classList.toggle("menu-open");
    btn.setAttribute("aria-expanded", open);
  });
  document.querySelectorAll(".nav-links a").forEach(function (a) {
    a.addEventListener("click", function () { document.body.classList.remove("menu-open"); });
  });
  function onScroll() { hdr.classList.toggle("scrolled", window.scrollY > 10); }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // ----- Reveal on scroll -----
  var els = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12 });
    els.forEach(function (el) { io.observe(el); });
  } else {
    els.forEach(function (el) { el.classList.add("in"); });
  }

  // ----- Hero slideshow -----
  var slides = document.querySelectorAll(".banner > img, .banner > .banner-slide");
  if (slides.length > 1) {
    var i = 0;
    setInterval(function () {
      slides[i].classList.remove("on");
      i = (i + 1) % slides.length;
      slides[i].classList.add("on");
    }, 4500);
  }

  // ----- Gallery filter + lightbox -----
  var chips = document.querySelectorAll(".chip");
  chips.forEach(function (c) {
    c.addEventListener("click", function () {
      chips.forEach(function (x) { x.classList.remove("active"); });
      c.classList.add("active");
      var f = c.getAttribute("data-filter");
      document.querySelectorAll(".g-item").forEach(function (g) {
        g.classList.toggle("hide", f !== "all" && g.getAttribute("data-cat") !== f);
      });
    });
  });
  var lb = document.querySelector(".lightbox");
  if (lb) {
    var lbImg = lb.querySelector("img"), lbCap = lb.querySelector("figcaption");
    document.querySelectorAll(".g-item").forEach(function (g) {
      g.addEventListener("click", function () {
        var im = g.querySelector("img");
        lbImg.src = im.src; lbImg.alt = im.alt;
        lbCap.textContent = g.querySelector(".cap").innerText.replace(/\n+/g, " · ");
        lb.classList.add("open");
      });
    });
    lb.addEventListener("click", function (e) { if (e.target === lb || e.target.tagName === "BUTTON") lb.classList.remove("open"); });
    document.addEventListener("keydown", function (e) { if (e.key === "Escape") lb.classList.remove("open"); });
  }

  // ----- Enquiry form: opens email or WhatsApp with the details filled in -----
  var form = document.getElementById("enquiry-form");
  if (form) {
    function body() {
      var d = new FormData(form);
      return "Name: " + d.get("name") + "\nCompany: " + d.get("company") + "\nPhone: " + d.get("phone") +
        "\nInterested in: " + d.get("topic") + "\n\n" + d.get("message");
    }
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.reportValidity()) return;
      var subject = "Enquiry from website – " + new FormData(form).get("company");
      window.location.href = "mailto:" + SITE.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body());
    });
    var waBtn = document.getElementById("send-wa");
    if (waBtn) waBtn.addEventListener("click", function () {
      if (!form.reportValidity()) return;
      window.open("https://wa.me/" + SITE.whatsapp + "?text=" + encodeURIComponent(body()), "_blank", "noopener");
    });
  }
})();
