// ANYU landing page app.js

const translations = {
  en: {
    nav_safety: "Safety",
    nav_pricing: "Low Pricing",
    nav_how: "How It Works",
    nav_drivers: "Drivers",
    nav_faq: "FAQs",
    nav_cta: "Join Early Access",

    hero_pill: "Pre-launch access is opening soon",
    hero_h1_1: "Safe Rides.",
    hero_h1_2: "Very Fair Prices.",
    hero_h1_3: "ANYU is coming.",
    hero_sub:
      "ANYU is a modern mobility platform built around verified drivers, emergency safety tools, transparent low pricing, and trusted everyday movement.",
    hero_cta1: "Join Early Access",
    hero_cta2: "Become a Driver",
    hero_cta3: "WhatsApp Us",

    trust1_h: "Verified Drivers",
    trust1_p: "Know who is picking you up",
    trust2_h: "Very Fair Prices",
    trust2_p: "Clear fares before you ride",
    trust3_h: "Safety Tools",
    trust3_p: "SOS, trip sharing, ride PIN",

    mock_title: "Driver nearby",
    mock_eta: "Arriving in 3 mins",
    mock_safe: "Verified driver • Trip sharing ready",
    mock_price: "Estimated fare shown before booking",
    mock_btn: "Share Trip",
    badge1: "SOS Ready",
    badge2: "Low fare estimate",

    strip1: "Verified drivers",
    strip2: "SOS & trip sharing",
    strip3: "Low transparent fares",
    strip4: "Cash & mobile money",
    strip5: "Built to scale globally",

    safety_eyebrow: "Safety First",
    safety_h2:
      "Every rider should feel protected before, during, and after every trip.",
    safety_lead:
      "ANYU is being designed to make safety visible. Riders should know who their driver is, where they are going, how to share their trip, and how to request help quickly.",

    safe1_h: "Verified drivers",
    safe1_p:
      "Driver identity, vehicle details, license status, ratings, and plate number should be visible before pickup.",
    safe2_h: "Emergency SOS",
    safe2_p:
      "Riders should have quick access to emergency contacts, live location sharing, and ANYU support.",
    safe3_h: "Share trip",
    safe3_p:
      "Family or trusted contacts can follow trip progress, driver details, vehicle details, and route information.",
    safe4_h: "Ride PIN",
    safe4_p:
      "A ride verification code helps reduce wrong pickups and builds confidence before the ride starts.",
    safe5_h: "Driver profile visibility",
    safe5_p:
      "Riders should clearly see driver photo, rating, vehicle, plate number, and verification badge.",
    safe6_h: "Incident reporting",
    safe6_p:
      "Riders and drivers should be able to report safety, payment, lost item, and service issues quickly.",

    pricing_eyebrow: "Very Fair Pricing",
    pricing_h2: "Low prices should not mean low trust.",
    pricing_lead:
      "Many riders worry about high fares and surprise charges. ANYU is being designed to make pricing feel clear, affordable, and fair before the rider confirms a trip.",
    price1: "Low fare estimates shown before booking",
    price2: "No confusing hidden charges",
    price3: "Cash, mobile money, card, and wallet support where available",
    price4: "Promotions, referrals, and ride credits to help users save more",

    price_card_label: "Example fare preview",
    price_card_route: "Short city ride",
    fare_base: "Base fare",
    fare_distance: "Distance",
    fare_time: "Time",
    fare_total: "Estimated total",
    fare_note:
      "Final prices may vary by route, time, demand, and local market conditions, but riders should always understand the estimate before confirming.",

    how_eyebrow: "How It Works",
    how_h2:
      "Simple enough for daily use. Strong enough for a global platform.",
    step1_h: "Request",
    step1_p:
      "Enter your destination and review your estimated fare before booking.",
    step2_h: "Match",
    step2_p:
      "ANYU finds a nearby driver and shows verified driver and vehicle details.",
    step3_h: "Ride Safely",
    step3_p:
      "Track your driver, share your trip, and access safety tools during the ride.",
    step4_h: "Pay Fairly",
    step4_p:
      "Pay clearly with supported methods and keep your receipt after the ride.",

    app_eyebrow: "Rider App",
    app_h2: "Designed for safety, savings, and confidence.",
    app_lead:
      "The rider app will include ride booking, scheduled rides, rides for someone else, activity, wallet, inbox, account settings, promotions, referrals, and safety tools.",
    tag1: "Schedule rides",
    tag2: "Book for someone else",
    tag3: "Wallet",
    tag4: "Inbox",
    tag5: "Safety Center",
    tag6: "Referrals",
    tag7: "Promotions",
    tag8: "Emergency contacts",

    mini1_h: "Home",
    mini1_p: "Where are you going?",
    mini2_h: "Safety",
    mini2_p: "SOS • Share Trip • Emergency Contacts • Ride PIN",
    mini3_h: "Wallet",
    mini3_p: "Cash • Mobile Money • Card • Credits • Promotions",

    driver_caption: "Driver early interest is open before launch",
    drv_eyebrow: "For Drivers",
    drv_h2: "A safer, fairer platform should also respect drivers.",
    drv_lead:
      "Drivers are central to ANYU. We want a clear, fair, and professional driver experience with transparent earnings, safety tools, and reliable support.",
    perk1_h: "Clear earnings",
    perk1_p:
      "Drivers should understand fares, commissions, wallet balances, and payouts.",
    perk2_h: "Driver safety",
    perk2_p:
      "Incident reporting, rider information, and support tools help protect drivers too.",
    perk3_h: "Respectful onboarding",
    perk3_p:
      "Driver feedback helps shape onboarding, verification, and daily operations.",
    drv_cta: "Register Interest",

    about_eyebrow: "About ANYU",
    about_h2:
      "Built to make everyday movement safer and more affordable.",
    about_lead:
      "ANYU is building a modern mobility platform starting with ride-hailing and expanding over time into a broader ecosystem of transportation, delivery, payments, and local services.",
    about_text:
      "We are starting carefully by listening to riders and drivers before launch. The goal is simple: build a service people can trust, with safety tools they can see and pricing that feels fair.",
    founder_quote:
      "ANYU started from a simple belief: transportation should help people move forward, not create more obstacles. We are building carefully, listening to real riders and drivers, and creating a platform designed for long-term impact.",
    founder_title: "Founder, ANYU",

    wl_eyebrow: "Early Access & Feedback",
    wl_h2a: "Help shape ANYU before launch.",
    wl_h2b: "It takes less than 1 minute.",
    wl_sub:
      "Your answers help us understand what matters most: safety, very fair prices, wait time, payments, support, drivers, and trust.",

    q_intro_title: "Tell us what would make movement better.",
    q_intro_text:
      "We are listening before launch so ANYU can be built around real riders and drivers.",

    wf_name: "Full name",
    wf_email: "Email address",
    wf_phone: "Phone / WhatsApp number",
    wf_interest: "I am interested in",
    wf_city: "City",

    wf_opt1: "Riding with ANYU",
    wf_opt2: "Driving with ANYU",
    wf_opt3: "Both riding and driving",
    wf_opt4: "Business or partnership",

    q_problem_label: "What is the biggest issue with transportation today?",
    q_problem_1: "Long waiting times",
    q_problem_2: "High prices",
    q_problem_3: "Drivers cancelling rides",
    q_problem_4: "Safety concerns",
    q_problem_5: "Payment difficulties",
    q_problem_6: "Poor customer service",
    q_problem_7: "Other",

    q_improve_label: "What should ANYU do better for riders and drivers?",
    q_whatsapp_label:
      "Can we contact you on WhatsApp for early access updates?",
    q_language_label: "Preferred language",

    yes: "Yes",
    no: "No",

    wf_submit: "Send My Feedback",
    wf_note:
      "We only use your information for ANYU feedback, launch updates, and early access.",

    whatsapp_cta_text: "Prefer WhatsApp? You can also message us directly.",
    whatsapp_cta_btn: "Chat with ANYU on WhatsApp",

    faq_eyebrow: "FAQs",
    faq_h2: "Questions before launch.",

    faq1_q: "Is ANYU live yet?",
    faq1_a:
      "ANYU is not live yet. We are preparing the platform, collecting feedback, and building toward early access.",

    faq2_q: "Will ANYU focus on low prices?",
    faq2_a:
      "Yes. ANYU is being designed around very fair pricing, transparent fare estimates, and promotions to help riders save more.",

    faq3_q: "How will ANYU improve safety?",
    faq3_a:
      "ANYU is being designed with verified drivers, visible vehicle details, SOS tools, trip sharing, emergency contacts, ride PIN verification, and incident reporting.",

    faq4_q: "Will ANYU support cash and mobile money?",
    faq4_a:
      "Yes. ANYU is being designed to support cash and digital payment options where available, including mobile money and wallet features.",

    faq5_q: "Can drivers register interest?",
    faq5_a:
      "Yes. Drivers can use the early access form or contact ANYU on WhatsApp before onboarding begins.",

    contact_eyebrow: "Contact",
    contact_h2: "Talk to ANYU.",
    contact_lead:
      "For early access, driver interest, partnerships, or support, contact us directly.",

    footer_tag: "ANYU — Safe Rides. Very Fair Prices.",
    footer_rights: "All rights reserved.",

    ph_name: "Your name",
    ph_email: "you@email.com",
    ph_phone: "+237 ...",
    ph_city: "Douala, Yaoundé, Buea...",
    ph_feedback: "Tell us in your own words. We are listening."
  },

  fr: {
    nav_safety: "Sécurité",
    nav_pricing: "Prix bas",
    nav_how: "Comment ça marche",
    nav_drivers: "Chauffeurs",
    nav_faq: "FAQs",
    nav_cta: "Accès anticipé",

    hero_pill: "L’accès anticipé ouvrira bientôt",
    hero_h1_1: "Trajets sûrs.",
    hero_h1_2: "Prix très justes.",
    hero_h1_3: "ANYU arrive.",
    hero_sub:
      "ANYU est une plateforme de mobilité moderne conçue autour de chauffeurs vérifiés, d’outils de sécurité d’urgence, de prix bas et transparents, et de déplacements quotidiens de confiance.",
    hero_cta1: "Accès anticipé",
    hero_cta2: "Devenir chauffeur",
    hero_cta3: "WhatsApp",

    trust1_h: "Chauffeurs vérifiés",
    trust1_p: "Savoir qui vient vous chercher",
    trust2_h: "Prix très justes",
    trust2_p: "Prix clairs avant le trajet",
    trust3_h: "Outils de sécurité",
    trust3_p: "SOS, partage, code trajet",

    mock_title: "Chauffeur proche",
    mock_eta: "Arrive dans 3 min",
    mock_safe: "Chauffeur vérifié • Partage de trajet prêt",
    mock_price: "Prix estimé affiché avant réservation",
    mock_btn: "Partager le trajet",
    badge1: "SOS prêt",
    badge2: "Prix bas estimé",

    strip1: "Chauffeurs vérifiés",
    strip2: "SOS et partage de trajet",
    strip3: "Prix bas transparents",
    strip4: "Cash et mobile money",
    strip5: "Conçu pour grandir",

    safety_eyebrow: "Sécurité d’abord",
    safety_h2:
      "Chaque passager doit se sentir protégé avant, pendant et après chaque trajet.",
    safety_lead:
      "ANYU est conçu pour rendre la sécurité visible. Les passagers doivent savoir qui est leur chauffeur, où ils vont, comment partager leur trajet et comment demander de l’aide rapidement.",

    safe1_h: "Chauffeurs vérifiés",
    safe1_p:
      "L’identité du chauffeur, le véhicule, les documents, la note et la plaque doivent être visibles avant la prise en charge.",
    safe2_h: "SOS urgence",
    safe2_p:
      "Les passagers doivent accéder rapidement aux contacts d’urgence, au partage de position et au support ANYU.",
    safe3_h: "Partager le trajet",
    safe3_p:
      "La famille ou les contacts de confiance peuvent suivre le trajet, le chauffeur, le véhicule et l’itinéraire.",
    safe4_h: "Code de trajet",
    safe4_p:
      "Un code de vérification aide à éviter les mauvaises prises en charge et renforce la confiance.",
    safe5_h: "Profil chauffeur visible",
    safe5_p:
      "Les passagers doivent voir clairement la photo, la note, le véhicule, la plaque et le badge de vérification.",
    safe6_h: "Signalement d’incident",
    safe6_p:
      "Passagers et chauffeurs doivent pouvoir signaler rapidement les problèmes de sécurité, paiement, objet perdu et service.",

    pricing_eyebrow: "Prix très justes",
    pricing_h2: "Des prix bas ne doivent pas signifier moins de confiance.",
    pricing_lead:
      "Beaucoup de passagers s’inquiètent des prix élevés et des frais surprises. ANYU est conçu pour rendre le prix clair, abordable et juste avant confirmation.",

    price1: "Prix bas estimés avant réservation",
    price2: "Pas de frais cachés confus",
    price3: "Cash, mobile money, carte et wallet selon disponibilité",
    price4: "Promotions, parrainages et crédits pour aider les utilisateurs à économiser",

    price_card_label: "Exemple d’estimation",
    price_card_route: "Petit trajet en ville",
    fare_base: "Prix de base",
    fare_distance: "Distance",
    fare_time: "Temps",
    fare_total: "Total estimé",
    fare_note:
      "Le prix final peut varier selon l’itinéraire, l’heure, la demande et les conditions du marché local, mais le passager doit toujours comprendre l’estimation avant confirmation.",

    how_eyebrow: "Comment ça marche",
    how_h2:
      "Simple pour chaque jour. Solide pour une plateforme mondiale.",
    step1_h: "Demander",
    step1_p:
      "Entrez votre destination et vérifiez le prix estimé avant de réserver.",
    step2_h: "Trouver",
    step2_p:
      "ANYU trouve un chauffeur proche et affiche les détails vérifiés du chauffeur et du véhicule.",
    step3_h: "Rouler en sécurité",
    step3_p:
      "Suivez votre chauffeur, partagez le trajet et utilisez les outils de sécurité pendant le trajet.",
    step4_h: "Payer justement",
    step4_p:
      "Payez clairement avec les moyens disponibles et gardez votre reçu après le trajet.",

    app_eyebrow: "Application passager",
    app_h2: "Conçue pour la sécurité, les économies et la confiance.",
    app_lead:
      "L’application passager inclura réservation, trajets programmés, réservation pour une autre personne, activité, wallet, inbox, compte, promotions, parrainages et sécurité.",
    tag1: "Planifier",
    tag2: "Réserver pour quelqu’un",
    tag3: "Wallet",
    tag4: "Messages",
    tag5: "Centre sécurité",
    tag6: "Parrainage",
    tag7: "Promotions",
    tag8: "Contacts d’urgence",

    mini1_h: "Accueil",
    mini1_p: "Où allez-vous ?",
    mini2_h: "Sécurité",
    mini2_p: "SOS • Partage • Contacts d’urgence • Code trajet",
    mini3_h: "Wallet",
    mini3_p: "Cash • Mobile Money • Carte • Crédits • Promotions",

    driver_caption: "Intérêt chauffeur ouvert avant le lancement",
    drv_eyebrow: "Pour les chauffeurs",
    drv_h2: "Une plateforme plus sûre et plus juste doit aussi respecter les chauffeurs.",
    drv_lead:
      "Les chauffeurs sont au centre d’ANYU. Nous voulons une expérience claire, juste et professionnelle avec revenus transparents, sécurité et support fiable.",

    perk1_h: "Revenus clairs",
    perk1_p:
      "Les chauffeurs doivent comprendre les prix, commissions, wallet et paiements.",
    perk2_h: "Sécurité chauffeur",
    perk2_p:
      "Le signalement d’incidents, les informations passager et le support protègent aussi les chauffeurs.",
    perk3_h: "Onboarding respectueux",
    perk3_p:
      "L’avis des chauffeurs aide à améliorer l’inscription, la vérification et les opérations.",
    drv_cta: "Manifester mon intérêt",

    about_eyebrow: "À propos d’ANYU",
    about_h2:
      "Conçu pour rendre les déplacements quotidiens plus sûrs et plus abordables.",
    about_lead:
      "ANYU construit une plateforme de mobilité moderne qui commence par le transport à la demande et pourra évoluer vers un écosystème plus large de transport, livraison, paiements et services locaux.",
    about_text:
      "Nous commençons prudemment en écoutant les passagers et chauffeurs avant le lancement. L’objectif est simple : construire un service de confiance, avec des outils de sécurité visibles et des prix justes.",
    founder_quote:
      "ANYU est né d’une idée simple : le transport doit aider les gens à avancer, pas créer plus d’obstacles. Nous construisons prudemment, en écoutant de vrais passagers et chauffeurs, avec une vision d’impact à long terme.",
    founder_title: "Fondateur, ANYU",

    wl_eyebrow: "Accès anticipé et avis",
    wl_h2a: "Aidez à construire ANYU avant le lancement.",
    wl_h2b: "Cela prend moins d’une minute.",
    wl_sub:
      "Vos réponses nous aident à comprendre ce qui compte le plus : sécurité, prix très justes, attente, paiements, support, chauffeurs et confiance.",

    q_intro_title: "Dites-nous ce qui améliorerait les déplacements.",
    q_intro_text:
      "Nous écoutons avant le lancement pour construire ANYU autour des vrais passagers et chauffeurs.",

    wf_name: "Nom complet",
    wf_email: "Adresse email",
    wf_phone: "Téléphone / WhatsApp",
    wf_interest: "Je suis intéressé par",
    wf_city: "Ville",

    wf_opt1: "Utiliser ANYU comme passager",
    wf_opt2: "Conduire avec ANYU",
    wf_opt3: "Les deux",
    wf_opt4: "Business ou partenariat",

    q_problem_label: "Quel est le plus grand problème avec le transport aujourd’hui ?",
    q_problem_1: "Temps d’attente trop long",
    q_problem_2: "Prix élevés",
    q_problem_3: "Courses annulées par les chauffeurs",
    q_problem_4: "Sécurité",
    q_problem_5: "Difficultés de paiement",
    q_problem_6: "Service client insuffisant",
    q_problem_7: "Autre",

    q_improve_label:
      "Que devrait améliorer ANYU pour les passagers et les chauffeurs ?",
    q_whatsapp_label:
      "Pouvons-nous vous contacter sur WhatsApp pour les mises à jour ?",
    q_language_label: "Langue préférée",

    yes: "Oui",
    no: "Non",

    wf_submit: "Envoyer mon avis",
    wf_note:
      "Nous utilisons vos informations uniquement pour les avis ANYU, les mises à jour et l’accès anticipé.",

    whatsapp_cta_text:
      "Vous préférez WhatsApp ? Vous pouvez aussi nous écrire directement.",
    whatsapp_cta_btn: "Écrire à ANYU sur WhatsApp",

    faq_eyebrow: "FAQs",
    faq_h2: "Questions avant le lancement.",

    faq1_q: "ANYU est-il déjà lancé ?",
    faq1_a:
      "ANYU n’est pas encore lancé. Nous préparons la plateforme, recueillons les avis et construisons vers l’accès anticipé.",

    faq2_q: "ANYU proposera-t-il des prix bas ?",
    faq2_a:
      "Oui. ANYU est conçu autour de prix très justes, d’estimations transparentes et de promotions pour aider les passagers à économiser.",

    faq3_q: "Comment ANYU améliorera-t-il la sécurité ?",
    faq3_a:
      "ANYU est conçu avec chauffeurs vérifiés, détails véhicule visibles, SOS, partage de trajet, contacts d’urgence, code de trajet et signalement d’incident.",

    faq4_q: "ANYU acceptera-t-il le cash et le mobile money ?",
    faq4_a:
      "Oui. ANYU est conçu pour supporter le cash et les paiements digitaux selon disponibilité, y compris mobile money et wallet.",

    faq5_q: "Les chauffeurs peuvent-ils manifester leur intérêt ?",
    faq5_a:
      "Oui. Les chauffeurs peuvent utiliser le formulaire ou contacter ANYU sur WhatsApp avant l’ouverture de l’inscription.",

    contact_eyebrow: "Contact",
    contact_h2: "Parlez à ANYU.",
    contact_lead:
      "Pour l’accès anticipé, les chauffeurs, les partenariats ou le support, contactez-nous directement.",

    footer_tag: "ANYU — Trajets sûrs. Prix très justes.",
    footer_rights: "Tous droits réservés.",

    ph_name: "Votre nom",
    ph_email: "vous@email.com",
    ph_phone: "+237 ...",
    ph_city: "Douala, Yaoundé, Buea...",
    ph_feedback: "Dites-nous avec vos propres mots. Nous vous écoutons."
  }
};

// NAVBAR SCROLL EFFECT
const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {
  if (!nav) return;
  nav.classList.toggle("scrolled", window.scrollY > 30);
});

// MOBILE MENU
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

function closeMobileMenu() {
  if (mobileMenu) {
    mobileMenu.classList.remove("open");
  }
}

if (burger && mobileMenu) {
  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });
}

// LANGUAGE SWITCHER + AUTO DETECT
const langBtn = document.getElementById("langBtn");
const langDropdown = document.getElementById("langDropdown");
const langLabel = document.getElementById("langLabel");

if (langBtn && langDropdown) {
  langBtn.addEventListener("click", () => {
    langDropdown.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!e.target.closest("#langSwitcher")) {
      langDropdown.classList.remove("open");
    }
  });
}

function setLang(lang) {
  const dictionary = translations[lang] || translations.en;

  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");

    if (dictionary[key]) {
      el.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");

    if (dictionary[key]) {
      el.setAttribute("placeholder", dictionary[key]);
    }
  });

  document.querySelectorAll("[data-lang]").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  if (langLabel) {
    langLabel.textContent = lang.toUpperCase();
  }

  localStorage.setItem("anyu_lang", lang);
}

document.querySelectorAll("[data-lang]").forEach((btn) => {
  btn.addEventListener("click", () => {
    setLang(btn.dataset.lang);

    if (langDropdown) {
      langDropdown.classList.remove("open");
    }

    closeMobileMenu();
  });
});

const browserLang = (
  navigator.language ||
  navigator.userLanguage ||
  "en"
).toLowerCase();

const defaultLang = browserLang.startsWith("fr") ? "fr" : "en";

setLang(localStorage.getItem("anyu_lang") || defaultLang);

// SCROLL REVEAL
const revealSelectors = [
  ".section__head",
  ".feature-card",
  ".price-card",
  ".step",
  ".mini-screen",
  ".perk",
  ".founder-card",
  ".about__text",
  ".waitlist__head",
  ".waitlist__form",
  ".waitlist__whatsapp",
  ".driver__img-wrap",
  ".contact-card"
];

document.querySelectorAll(revealSelectors.join(", ")).forEach((el) => {
  el.classList.add("reveal");
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 50);

        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

document.querySelectorAll(".reveal").forEach((el) => {
  observer.observe(el);
});

// NETLIFY FORM HANDLER
const form = document.getElementById("waitlistForm");

if (form) {
  form.addEventListener("submit", () => {
    const submitBtn = form.querySelector(".wf__submit");

    if (submitBtn) {
      submitBtn.innerHTML =
        document.documentElement.lang === "fr" ? "Envoi..." : "Sending...";

      submitBtn.disabled = true;
    }
  });
}