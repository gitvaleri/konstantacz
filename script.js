// ===== Дані вакансій =====
const JOBS = [
  { id: "VP-2048", cat: "food", tag: "Терміново", hot: true, title: "Комплектувальник продуктового складу", city: "Úžice (біля Праги)", shift: "2 зміни", housing: "Так, 3 800 CZK", lang: "Не потрібна", salary: "36 000 – 42 000" },
  { id: "VP-2046", cat: "auto", tag: "Автодеталі", hot: true, title: "Складальник джгутів проводів", city: "Млада-Болеслав", shift: "3 зміни", housing: "Так, 3 500 CZK", lang: "Не потрібна", salary: "38 000 – 44 000" },
  { id: "VP-2044", cat: "logistics", tag: "Логістика", title: "Водій навантажувача (VZV)", city: "Брно", shift: "2 зміни", housing: "Так, 3 900 CZK", lang: "Не потрібна", salary: "39 000 – 45 000" },
  { id: "VP-2041", cat: "food", tag: "Продуктовий склад", title: "Сортувальник овочів і фруктів", city: "Їглава", shift: "1 зміна", housing: "Так, 3 200 CZK", lang: "Не потрібна", salary: "33 000 – 37 000" },
  { id: "VP-2039", cat: "auto", tag: "Автодеталі", title: "Оператор лінії лиття та пресів", city: "Пльзень", shift: "3 зміни", housing: "Так, безкоштовно", lang: "Не потрібна", salary: "40 000 – 46 000" },
  { id: "VP-2036", cat: "logistics", tag: "Логістика", title: "Комплектувальник логістичного центру", city: "Прага — Říčany", shift: "2 зміни", housing: "Так, 4 000 CZK", lang: "Не потрібна", salary: "34 000 – 39 000" },
  { id: "VP-2033", cat: "food", tag: "Холодильний склад", title: "Працівник холодильного складу (+2 °C)", city: "Острава", shift: "2 зміни", housing: "Так, 3 500 CZK", lang: "Не потрібна", salary: "37 000 – 41 000" },
  { id: "VP-2030", cat: "auto", tag: "Автодеталі", title: "Контролер якості автокомплектуючих", city: "Квасіни", shift: "2 зміни", housing: "Так, 3 800 CZK", lang: "Базова", salary: "40 000 – 46 000" },
  { id: "VP-2027", cat: "construction", tag: "Будівництво", title: "Зварювальник MIG/MAG", city: "Пльзень", shift: "1 зміна", housing: "Так, безкоштовно", lang: "Базова", salary: "48 000 – 56 000" },
  { id: "VP-2024", cat: "auto", tag: "Автодеталі", title: "Оператор ЧПК (CNC)", city: "Ліберець", shift: "2 зміни", housing: "Так, 3 600 CZK", lang: "Базова", salary: "45 000 – 52 000" },
  { id: "VP-2021", cat: "food", tag: "Продуктовий склад", title: "Пакувальник харчової продукції", city: "Пардубіце", shift: "2 зміни", housing: "Так, 3 000 CZK", lang: "Не потрібна", salary: "32 000 – 36 000" },
  { id: "VP-2018", cat: "logistics", tag: "Логістика", title: "Приймальник / відвантажувальник", city: "Градець-Кралове", shift: "2 зміни", housing: "Так, 3 500 CZK", lang: "Базова", salary: "35 000 – 40 000" },
  { id: "VP-2015", cat: "construction", tag: "Будівництво", title: "Арматурник / монолітник", city: "Прага", shift: "1 зміна", housing: "Так, безкоштовно", lang: "Не потрібна", salary: "44 000 – 50 000" },
  { id: "VP-2012", cat: "hospitality", tag: "HoReCa", title: "Покоївка в готелі 5*", city: "Прага 1", shift: "Гнучкий графік", housing: "За бажанням", lang: "Базова EN", salary: "32 000 – 36 000" },
  { id: "VP-2009", cat: "medical", tag: "Медицина", title: "Асистент у будинку для літніх", city: "Пардубіце", shift: "12 годин", housing: "Так, 2 800 CZK", lang: "A2 чеська", salary: "36 000 – 40 000" },
  { id: "VP-2006", cat: "office", tag: "Офіс", title: "Спеціаліст підтримки з UA/EN", city: "Прага 5", shift: "Пн–Пт", housing: "Допомога з пошуком", lang: "UA + EN B2", salary: "48 000 – 55 000" },
];


const pinIcon = '<svg><use href="#i-pin"/></svg>';
const arrowIcon = '<svg><use href="#i-arrow"/></svg>';

function renderJobs(filter = "all") {
  const list = filter === "all" ? JOBS.slice(0, 9) : JOBS.filter(j => j.cat === filter);
  document.getElementById("jobs").innerHTML = list.map((j, i) => `
    <article class="job" style="animation-delay:${i * 60}ms">
      <div class="job-top"><span class="tag ${j.hot ? "hot" : ""}">${j.tag}</span><span class="job-id">${j.id}</span></div>
      <h3>${j.title}</h3>
      <div class="job-loc">${pinIcon}${j.city}</div>
      <ul class="job-meta">
        <li>Графік <b>${j.shift}</b></li>
        <li>Житло <b>${j.housing}</b></li>
        <li>Мова <b>${j.lang}</b></li>
      </ul>
      <div class="job-foot">
        <div class="job-salary"><small>Брутто / місяць</small>${j.salary} CZK</div>
        <a href="#contact" class="job-btn" data-job="${j.title}" aria-label="Відгукнутися">${arrowIcon}</a>
      </div>
    </article>`).join("");
}
renderJobs();

const filters = document.getElementById("filters");
function setFilter(f) {
  filters.querySelectorAll(".filter").forEach(b => b.classList.toggle("active", b.dataset.f === f));
  renderJobs(f);
}
filters.addEventListener("click", e => { if (e.target.dataset.f) setFilter(e.target.dataset.f); });
document.querySelectorAll("[data-jump]").forEach(el => el.addEventListener("click", () => setFilter(el.dataset.jump)));

// Відгук на вакансію → заповнити повідомлення
document.getElementById("jobs").addEventListener("click", e => {
  const btn = e.target.closest("[data-job]");
  if (btn) document.getElementById("c-msg").value = `Цікавить вакансія: ${btn.dataset.job}`;
});

// Дата оновлення
const d = new Date();
document.getElementById("today").textContent = d.toLocaleDateString("uk-UA", { day: "numeric", month: "long" });
document.getElementById("year").textContent = d.getFullYear();

// ===== Меню =====
const nav = document.getElementById("nav");
document.getElementById("burger").addEventListener("click", () => nav.classList.toggle("open"));
nav.addEventListener("click", e => { if (e.target.tagName === "A") nav.classList.remove("open"); });

// ===== Поява при прокрутці =====
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("visible"); io.unobserve(en.target); } });
}, { threshold: 0.12 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// ===== Лічильники =====
const countIO = new IntersectionObserver(entries => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    const el = en.target, target = +el.dataset.count, start = performance.now(), dur = 1800;
    const tick = now => {
      const p = Math.min((now - start) / dur, 1), eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString("uk-UA");
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
    countIO.unobserve(el);
  });
}, { threshold: 0.5 });
document.querySelectorAll("[data-count]").forEach(el => countIO.observe(el));

// ===== Вкладки документів =====
document.getElementById("tabs").addEventListener("click", e => {
  const id = e.target.dataset.tab;
  if (!id) return;
  document.querySelectorAll(".tab").forEach(t => t.classList.toggle("active", t === e.target));
  document.querySelectorAll(".tab-panel").forEach(p => p.classList.toggle("active", p.id === id));
});

// ===== Відгуки =====
const slides = [...document.querySelectorAll(".t-slide")];
let cur = 0, timer;
function show(i) {
  cur = (i + slides.length) % slides.length;
  slides.forEach((s, k) => s.classList.toggle("active", k === cur));
  document.getElementById("tCount").textContent = `0${cur + 1} / 0${slides.length}`;
}
function auto() { clearInterval(timer); timer = setInterval(() => show(cur + 1), 7000); }
document.getElementById("tPrev").onclick = () => { show(cur - 1); auto(); };
document.getElementById("tNext").onclick = () => { show(cur + 1); auto(); };
auto();

// ===== FAQ =====
function setFaqHeight(item) {
  const a = item.querySelector(".faq-a");
  a.style.maxHeight = item.classList.contains("open") ? a.scrollHeight + "px" : 0;
}
document.querySelectorAll(".faq-item").forEach(item => {
  setFaqHeight(item);
  item.querySelector(".faq-q").addEventListener("click", () => {
    const wasOpen = item.classList.contains("open");
    document.querySelectorAll(".faq-item").forEach(i => { i.classList.remove("open"); setFaqHeight(i); });
    if (!wasOpen) { item.classList.add("open"); setFaqHeight(item); }
  });
});

// ===== Форми =====
[["quickForm", "quickSuccess"], ["contactForm", "contactSuccess"]].forEach(([f, s]) => {
  document.getElementById(f).addEventListener("submit", e => {
    e.preventDefault();
    document.getElementById(s).classList.add("show");
    e.target.querySelectorAll("input:not([type=checkbox]), textarea").forEach(i => (i.value = ""));
  });
});

// ===== Кнопка нагору =====
const toTop = document.getElementById("toTop");
addEventListener("scroll", () => toTop.classList.toggle("show", scrollY > 900), { passive: true });
toTop.onclick = () => scrollTo({ top: 0, behavior: "smooth" });

// ==========================================================
// ШЛЯХ КАНДИДАТА — анімація, керована прокруткою
// ==========================================================
(() => {
  const story = document.getElementById("story");
  if (!story) return;
  const N = 4;
  const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));
  const range = (t, a, b) => clamp((t - a) / (b - a));
  const q = (sel, root = story) => [...root.querySelectorAll(sel)];

  const scenes = q(".scene"), words = q(".bigword"), texts = q(".story-text"), navItems = q(".story-nav li");
  const s1Items = q("[data-k]", scenes[0]);
  const docs = q(".doc", scenes[1]), callouts = q(".callout", scenes[1]);
  const tripPhoto = story.querySelector(".trip-photo");
  const route = document.getElementById("routePath"), routeDot = document.getElementById("routeDot");
  const routeLen = route.getTotalLength();
  route.style.strokeDasharray = routeLen;
  const tripKm = document.getElementById("tripKm");
  const jhPhoto = story.querySelector(".jh-photo"), jhCards = q(".jh-card", scenes[3]);
  const salary = document.getElementById("salaryCount"), salaryBar = document.getElementById("salaryBar");
  const snNum = document.getElementById("snNum"), snBar = document.getElementById("snBar");
  const glow = story.querySelector(".story-glow"), hint = story.querySelector(".story-hint");
  const mobile = matchMedia("(max-width: 1100px)");

  // Розкладка «розібраного» пакета документів: [x, y, rotate]
  const DOC_POS = [[-190, -40, -13], [20, 10, 3], [200, -120, 11], [170, 130, -7]];

  function progress() {
    const r = story.getBoundingClientRect();
    return clamp(-r.top / (r.height - innerHeight));
  }

  // М'які криві без «мертвих» ділянок на кінцях — рух не завмирає
  const sine = t => .5 - Math.cos(Math.PI * t) / 2;
  const smooth = t => t * t * (3 - 2 * t);

  function render(P) {
    let best = 0, bestVis = -1;

    for (let i = 0; i < N; i++) {
      const t = P * N - i;
      // Широке перекриття: наступна сцена з'являється, поки попередня ще йде
      const inn = i === 0 ? 1 : sine(range(t, -.32, .22));
      const out = i === N - 1 ? 0 : sine(range(t, .78, 1.32));
      const vis = inn * (1 - out);
      if (vis > bestVis) { bestVis = vis; best = i; }
      const tt = clamp(t);
      const drift = clamp(t, -.4, 1.4) - .5; // постійний легкий рух усієї сцени

      // Сцена: в'їзд знизу, виїзд — наближення до глядача
      const sc = scenes[i];
      sc.style.opacity = vis;
      sc.style.visibility = vis < .01 ? "hidden" : "visible";
      sc.style.transform = `translate(-50%, calc(-50% + ${(1 - inn) * 110 - drift * 36}px)) scale(${.88 + .12 * inn + out * .3})`;

      // Великі слова їдуть у протилежні боки
      const w = words[i], shift = (t - .5) * 34;
      const wIn = i === 0 ? 1 : sine(range(t, -.2, .14)), wOut = i === N - 1 ? 0 : sine(range(t, .86, 1.2));
      w.style.opacity = wIn * (1 - wOut);
      w.children[0].style.transform = `translateX(${-shift}vw)`;
      w.children[1].style.transform = `translateX(${shift}vw)`;

      // Тексти
      // Тексти змінюються послідовно (без накладання): старий іде вгору, новий підіймається знизу
      const tIn = i === 0 ? 1 : sine(range(t, -.06, .16)), tOut = i === N - 1 ? 0 : sine(range(t, .84, 1.06));
      const tx = texts[i], y = (1 - tIn) * 40 - tOut * 40, tv = tIn * (1 - tOut);
      tx.style.opacity = tv;
      tx.style.transform = mobile.matches ? `translateY(${y}px)` : `translateY(calc(-50% + ${y}px))`;
      tx.classList.toggle("on", tv > .6);

      if (vis < .01) continue;

      if (i === 0) {
        const b = range(tt, 0, .85);
        const card = scenes[0].firstElementChild;
        card.style.transform = `translate(-50%, -50%) perspective(1200px) rotateY(${(.5 - tt) * 18}deg) rotateX(${(1 - b) * 10}deg)`;
        s1Items.forEach((el, k) => {
          const e = smooth(range(b, k * .15, k * .15 + .4));
          el.style.opacity = e;
          el.style.transform = `translateX(${(1 - e) * (k % 2 ? 80 : -80)}px)`;
        });
      }

      if (i === 1) {
        const s = smooth(range(tt, 0, .7)), f = drift * 30;
        docs.forEach((d, k) => {
          const [x0, y0, r] = DOC_POS[k], m = innerWidth < 680 ? .62 : 1, x = x0 * m, yy = y0 * m * 1.3;
          d.style.transform = `translate(${x * s}px, ${yy * s + f * (k % 2 ? 1 : -1)}px) rotate(${r * s + (k - 1.5) * 3 * (1 - s)}deg)`;
        });
        callouts.forEach((c, k) => {
          const e = smooth(range(tt, .35 + k * .08, .6 + k * .08));
          c.style.opacity = e;
          c.style.transform = `translateX(${(1 - e) * (k % 2 ? 20 : -20)}px)`;
        });
      }

      if (i === 2) {
        const r = smooth(range(tt, 0, .6));
        tripPhoto.style.clipPath = `circle(${r * 150}% at 10% 35%)`;
        const d = smooth(range(tt, .05, .92));
        route.style.strokeDashoffset = routeLen * (1 - d);
        const p = route.getPointAtLength(routeLen * d);
        routeDot.setAttribute("transform", `translate(${p.x} ${p.y})`);
        tripKm.textContent = Math.round(1340 * d).toLocaleString("uk-UA");
      }

      if (i === 3) {
        const r = smooth(range(tt, 0, .55));
        jhPhoto.style.clipPath = `inset(${(1 - r) * 50}% 0 ${(1 - r) * 50}% 0)`;
        const m = smooth(range(tt, .2, .9));
        salary.textContent = Math.round(42000 * m).toLocaleString("uk-UA");
        salaryBar.style.width = m * 100 + "%";
        jhCards.forEach((c, k) => {
          const e = smooth(range(tt, .25 + k * .12, .55 + k * .12));
          c.style.opacity = e;
          c.style.transform = `translateY(${(1 - e) * 50 - tt * 30 * (k % 2 ? 1 : -1)}px) scale(${.9 + .1 * e})`;
        });
      }
    }

    navItems.forEach((li, k) => li.classList.toggle("on", k === best));
    snNum.textContent = "0" + (best + 1);
    snBar.style.width = P * 100 + "%";
    glow.style.transform = `translate(${-30 + Math.sin(P * Math.PI * 2) * 25}%, ${-50 + Math.cos(P * Math.PI * 2) * 12}%)`;
    hint.style.opacity = 1 - range(P, 0, .04);
  }

  // Клік по пункту навігації → прокрутка до сцени
  navItems.forEach((li, k) => li.addEventListener("click", () => {
    const top = story.offsetTop + ((k + .45) / N) * (story.offsetHeight - innerHeight);
    scrollTo({ top, behavior: "smooth" });
  }));

  // ----- Частинки, що падають (швидшають від прокрутки) -----
  const cvs = document.getElementById("storyParticles"), ctx = cvs.getContext("2d");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let W, H, dpr, parts = [], lastY = scrollY, boost = 0;
  function resize() {
    dpr = Math.min(devicePixelRatio || 1, 2);
    W = cvs.clientWidth; H = cvs.clientHeight;
    cvs.width = W * dpr; cvs.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round(Math.min(140, W / 9));
    parts = Array.from({ length: n }, () => spawn(true));
  }
  function spawn(any) {
    return {
      x: W * (.5 + (Math.random() - .5) * (Math.random() < .6 ? .35 : 1)),
      y: any ? Math.random() * H : -10,
      r: Math.random() * 1.8 + .4,
      v: Math.random() * .6 + .25,
      a: Math.random() * .6 + .2,
      blue: Math.random() < .7,
      sway: Math.random() * Math.PI * 2,
    };
  }
  function drawParticles() {
    const dy = scrollY - lastY; lastY = scrollY;
    boost += (Math.min(Math.abs(dy), 120) * .06 - boost) * .06; // плавне прискорення без ривків
    ctx.clearRect(0, 0, W, H);
    for (const p of parts) {
      p.sway += .01;
      p.y += p.v * (1 + boost);
      p.x += Math.sin(p.sway) * .2;
      if (p.y > H + 10) Object.assign(p, spawn(false));
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = p.blue ? `rgba(79,134,255,${p.a})` : `rgba(244,246,251,${p.a * .7})`;
      ctx.fill();
    }
  }

  // Інерційне згладжування: анімація плавно «доганяє» прокрутку
  let active = false, cur = progress(), last = performance.now();
  function loop(now) {
    if (!active) return;
    const dt = Math.min((now - last) / 1000, .05); last = now;
    const target = progress();
    cur += (target - cur) * (1 - Math.exp(-dt * 7));
    if (Math.abs(target - cur) < .0002) cur = target;
    render(cur);
    if (!reduce) drawParticles();
    requestAnimationFrame(loop);
  }
  new IntersectionObserver(([en]) => {
    const was = active; active = en.isIntersecting;
    if (active && !was) { lastY = scrollY; cur = progress(); last = performance.now(); requestAnimationFrame(loop); }
  }).observe(story);
  addEventListener("resize", resize);
  resize();
  render(cur);
})();

