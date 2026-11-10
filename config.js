/* =====================================================
   config.js — إعدادات + بيانات المنيو الافتراضية + طبقة الحفظ
   ===================================================== */

/* 1) بيانات Firebase تأتي من ملف firebase-config.js (الصقها هناك) */
const _FB = (typeof FIREBASE_CONFIG !== "undefined") ? FIREBASE_CONFIG : {};
const _FBPATH = (typeof FIREBASE_PATH !== "undefined") ? FIREBASE_PATH : "menus/abu-zuhair";

/* 2) رمز دخول لوحة التحكم في الوضع التجريبي فقط (بدون Firebase) */
const LOCAL_PIN = "1234";

/* 3) البيانات الافتراضية */
const DEFAULT_MENU = {
  settings: {
    name: "مطعم وكفي أبو ظهير",
    tagline: "للمأكولات الشعبية والمشاوي",
    logo: "logo.png",
    facebook: "https://www.facebook.com/share/19ocQqy2tq/",
    thanks: "شكراً لاختياركم مطعم أبو ظهير 🌟 صحتين وعافية، بانتظاركم دائماً!",
    branches: [
      { id: "main",     name: "الفرع الرئيسي", address: "", whatsapp: "970592936150", open: true, thanks: "", pay: { bop: "", palpay: "", jawwal: "" } },
      { id: "downtown", name: "فرع وسط البلد", address: "", whatsapp: "",             open: true, thanks: "", pay: { bop: "", palpay: "", jawwal: "" } }
    ]
  },
  categories: [
    { id: "falafel",  name: "الفلافل",           icon: "🧆" },
    { id: "hummus",   name: "حمص وفول ومسبحة",   icon: "🥣" },
    { id: "shawarma", name: "الشاورما",          icon: "🌯" },
    { id: "grill",    name: "المندي والمشاوي",   icon: "🍗" },
    { id: "cold",     name: "المشروبات الغازية", icon: "🥤" },
    { id: "hot",      name: "المشروبات الساخنة", icon: "☕" }
  ],
  items: [
    { id: "i1",  cat: "falafel", name: "فلافل", desc: "حبات فلافل مقرمشة طازجة تُقدَّم مع المخللات والطحينة", price: 5, img: "", emoji: "🧆", available: true, badge: "" },
    { id: "i2",  cat: "falafel", name: "أساور فلافل", desc: "أساور فلافل ذهبية مقرمشة من الخارج وطرية من الداخل", price: 6, img: "", emoji: "🧆", available: true, badge: "" },
    { id: "i3",  cat: "falafel", name: "فرشوحة فلافل", desc: "خبز فرشوحة محشو بالفلافل والخضار والطحينة", price: 6, img: "", emoji: "🥙", available: true, badge: "الأكثر طلباً" },
    { id: "i4",  cat: "falafel", name: "ساندويتش فلافل", desc: "ساندويتش فلافل بالخضار والطحينة", price: 4, img: "", emoji: "🥙", available: true, badge: "" },
    { id: "i5",  cat: "falafel", name: "فرشوحة فلافل دبل", desc: "فرشوحة بحشوة مضاعفة لمحبي الوجبة الكبيرة", price: 10, img: "", emoji: "🥙", available: true, badge: "" },
    { id: "i6",  cat: "falafel", name: "صفيحة فلافل", desc: "صفيحة فلافل كبيرة مناسبة للعائلة والتجمعات", price: 20, img: "", emoji: "🍽️", available: true, badge: "" },

    { id: "i7",  cat: "hummus", name: "حمص", desc: "حمص بالطحينة وزيت الزيتون", price: 6, img: "", emoji: "🥣", available: true, badge: "" },
    { id: "i8",  cat: "hummus", name: "فول", desc: "فول مدمس بزيت الزيتون والكمون والليمون", price: 6, img: "", emoji: "🥣", available: true, badge: "" },
    { id: "i9",  cat: "hummus", name: "مسبحة", desc: "مسبحة شامية بحبات الحمص والطحينة والتتبيلة", price: 7, img: "", emoji: "🥣", available: true, badge: "" },

    { id: "i10", cat: "shawarma", name: "شاورما عادي", desc: "ساندويتش شاورما بالثوم والمخلل", price: 10, img: "", emoji: "🌯", available: true, badge: "" },
    { id: "i11", cat: "shawarma", name: "شاورما دبل", desc: "ساندويتش شاورما بحشوة مضاعفة", price: 18, img: "", emoji: "🌯", available: true, badge: "الأكثر طلباً" },
    { id: "i12", cat: "shawarma", name: "صحن شاورما", desc: "صحن شاورما مع البطاطا والمخللات والثوم", price: 20, img: "", emoji: "🍛", available: true, badge: "" },
    { id: "i13", cat: "shawarma", name: "صفيحة شاورما", desc: "صفيحة شاورما كبيرة تكفي عدة أشخاص", price: 50, img: "", emoji: "🍽️", available: true, badge: "" },

    { id: "i14", cat: "grill", name: "رز مندي مع نصف دجاجة", desc: "رز مندي معطّر مع نصف دجاجة مشوية", price: 25, img: "", emoji: "🍗", available: true, badge: "" },
    { id: "i15", cat: "grill", name: "رز مندي مع دجاجة كاملة", desc: "رز مندي معطّر مع دجاجة كاملة مشوية", price: 45, img: "", emoji: "🍗", available: true, badge: "عرض" },
    { id: "i16", cat: "grill", name: "جناحين", desc: "جناحين دجاج مشوية على الفحم", price: 15, img: "", emoji: "🍗", available: true, badge: "" },
    { id: "i17", cat: "grill", name: "كباب", desc: "أسياخ كباب لحم مشوية على الفحم", price: 25, img: "", emoji: "🍢", available: true, badge: "" },
    { id: "i18", cat: "grill", name: "شيش طاووق", desc: "قطع دجاج متبّلة مشوية على الفحم", price: 25, img: "", emoji: "🍢", available: true, badge: "" },

    { id: "i19", cat: "cold", name: "بيبسي", desc: "مشروب غازي بارد", price: 3, img: "", emoji: "🥤", available: true, badge: "" },
    { id: "i20", cat: "cold", name: "سفن أب", desc: "مشروب غازي بارد", price: 3, img: "", emoji: "🥤", available: true, badge: "" },
    { id: "i21", cat: "cold", name: "ميرندا", desc: "مشروب غازي بارد", price: 3, img: "", emoji: "🥤", available: true, badge: "" },

    { id: "i22", cat: "hot", name: "شاي", desc: "كوب شاي ساخن", price: 2, img: "", emoji: "☕", available: true, badge: "" },
    { id: "i23", cat: "hot", name: "قهوة", desc: "قهوة عربية ساخنة", price: 3, img: "", emoji: "☕", available: true, badge: "" },
    { id: "i24", cat: "hot", name: "نسكافيه", desc: "نسكافيه ساخن", price: 3, img: "", emoji: "☕", available: true, badge: "" },
    { id: "i25", cat: "hot", name: "ينسون", desc: "مشروب ينسون دافئ", price: 2, img: "", emoji: "🍵", available: true, badge: "" }
  ]
};

/* 4) طبقة الحفظ: Firebase إذا تم ضبطه، وإلا localStorage */
const MenuStore = (() => {
  const KEY = "abz_menu_v1";
  const hasFB = typeof firebase !== "undefined" && _FB.apiKey && !_FB.apiKey.startsWith("PASTE");
  let db = null, auth = null;
  if (hasFB) {
    try {
      firebase.initializeApp(_FB);
      db = firebase.database();
      auth = (typeof firebase.auth === "function") ? firebase.auth() : null;
    } catch (e) { console.error(e); }
  }
  const useFB = !!db;
  const clone = o => JSON.parse(JSON.stringify(o));
  const arr = x => Array.isArray(x) ? x.filter(Boolean) : (x && typeof x === "object" ? Object.values(x) : []);

  const BLANK_BRANCH = { id: "", name: "", address: "", whatsapp: "", open: true, thanks: "", pay: { bop: "", palpay: "", jawwal: "" } };

  /* الفروع: ترحيل تلقائي للبيانات القديمة (رقم واتساب واحد) إلى الفرع الرئيسي */
  function normBranches(s) {
    let b = arr(s.branches).map(x => ({ ...clone(BLANK_BRANCH), ...x, pay: { ...BLANK_BRANCH.pay, ...(x.pay || {}) } })).filter(x => x.id);
    if (!b.length) {
      b = clone(DEFAULT_MENU.settings.branches);
      if (s.whatsapp) b[0].whatsapp = s.whatsapp;
      if (s.pay) b[0].pay = { ...b[0].pay, ...s.pay };
      if (s.open === false) b.forEach(x => x.open = false);
    }
    return b;
  }

  function normalize(d) {
    d = d || {};
    const s = d.settings || {};
    const out = { ...clone(DEFAULT_MENU.settings), ...s, branches: normBranches(s) };
    delete out.whatsapp; delete out.pay; delete out.open;
    return {
      settings: out,
      categories: arr(d.categories),
      items: arr(d.items)
    };
  }
  function readLocal() {
    try { const v = localStorage.getItem(KEY); if (v) return normalize(JSON.parse(v)); } catch (e) {}
    return clone(DEFAULT_MENU);
  }
  return {
    useFB, auth, clone, normalize,
    subscribe(cb) {
      if (useFB) {
        /* عرض فوري من آخر نسخة محفوظة على الجهاز، ثم التحديث من Firebase */
        const CK = "abz_cache_" + _FBPATH;
        let shown = false;
        try { const c = localStorage.getItem(CK); if (c) { cb(normalize(JSON.parse(c))); shown = true; } } catch (e) {}
        db.ref(_FBPATH).on("value", snap => {
          const v = snap.val();
          if (v) { try { localStorage.setItem(CK, JSON.stringify(v)); } catch (e) {} }
          cb(v ? normalize(v) : clone(DEFAULT_MENU));
        }, () => { if (!shown) cb(readLocal()); });
      } else {
        cb(readLocal());
        window.addEventListener("storage", e => { if (e.key === KEY) cb(readLocal()); });
      }
    },
    load() {
      if (useFB) return db.ref(_FBPATH).once("value").then(s => s.val() ? normalize(s.val()) : clone(DEFAULT_MENU));
      return Promise.resolve(readLocal());
    },
    save(data) {
      const clean = JSON.parse(JSON.stringify(data));
      if (useFB) return db.ref(_FBPATH).set(clean);
      localStorage.setItem(KEY, JSON.stringify(clean));
      return Promise.resolve();
    }
  };
})();
