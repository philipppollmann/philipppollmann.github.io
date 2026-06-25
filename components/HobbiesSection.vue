<template>
  <section id="life" class="relative py-24 md:py-32 px-6 life-bg">
    <div class="max-w-5xl mx-auto">
      <div class="reveal mb-14 md:mb-16">
        <p class="eyebrow" style="color: var(--c-amber)">Beyond work</p>
        <h2 class="mt-4 text-4xl md:text-5xl text-[var(--ink)] leading-tight">Off the clock</h2>
        <p class="mt-5 text-lg text-[var(--ink-soft)] max-w-2xl">
          The things that keep me curious and balanced when I step away from the keyboard.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">

        <!-- Coffee -->
        <article class="hobby hobby--coffee sm:col-span-2 lg:col-span-3 reveal" style="--c: #6f4e37">
          <span class="steam"><i></i><i></i><i></i></span>
          <div class="hobby-body">
            <span class="hobby-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M10 2v2.5M14 2v2.5M6 2v2.5"/>
                <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/>
              </svg>
            </span>
            <h3 class="hobby-title">Coffee &amp; home barista</h3>
            <p class="hobby-desc">
              Dialing in beans, chasing the perfect espresso, slowly getting better at latte art —
              a small daily ritual I genuinely love.
            </p>
          </div>
        </article>

        <!-- Formula 1 -->
        <article class="hobby hobby--f1 sm:col-span-2 lg:col-span-3 reveal" style="--c: #d33a2c; transition-delay: .05s">
          <span class="streaks"><i></i><i></i><i></i></span>
          <div class="hobby-body">
            <span class="hobby-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 21V4"/>
                <path d="M5 4.5c3-1.6 6 1.4 9 0 1.6-.7 3.2-.7 4.5-.2v8c-1.3-.5-2.9-.5-4.5.2-3 1.4-6-1.6-9 0"/>
              </svg>
            </span>
            <h3 class="hobby-title">Formula 1</h3>
            <p class="hobby-desc">
              I rarely miss a race weekend — the engineering, the strategy, the tenths of a second.
              And yes, my heart's with Ferrari.
            </p>
          </div>
        </article>

        <!-- Football -->
        <article class="hobby lg:col-span-2 reveal" style="--c: #3f9e5a; transition-delay: .05s">
          <div class="hobby-body">
            <span class="hobby-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="9.5"/>
                <path d="m12 7 4.1 3-1.6 4.8H9.5L7.9 10z"/>
              </svg>
            </span>
            <h3 class="hobby-title">Football</h3>
            <p class="hobby-desc">On the pitch myself — and a loyal Fortuna Düsseldorf &amp; AC Milan fan. Forza!</p>
          </div>
        </article>

        <!-- Running -->
        <article class="hobby lg:col-span-2 reveal" style="--c: #e2862f; transition-delay: .1s">
          <div class="hobby-body">
            <span class="hobby-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="13" cy="4" r="1.6"/>
                <path d="M4 17l5 1 .9-1.8"/>
                <path d="M15 21v-4l-4-3 1-6"/>
                <path d="M7 12V9l5-1 3 3 3 1"/>
              </svg>
            </span>
            <h3 class="hobby-title">Running</h3>
            <p class="hobby-desc">Clearing my head, one kilometer at a time.</p>
          </div>
        </article>

        <!-- Road cycling -->
        <article class="hobby lg:col-span-2 reveal" style="--c: #b1557f; transition-delay: .15s">
          <div class="hobby-body">
            <span class="hobby-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="18.5" cy="17.5" r="3.5"/>
                <circle cx="5.5" cy="17.5" r="3.5"/>
                <circle cx="15" cy="5" r="1"/>
                <path d="M12 17.5V14l-3-3 4-3 2 3h2"/>
              </svg>
            </span>
            <h3 class="hobby-title">Road cycling</h3>
            <p class="hobby-desc">Long rides and endless horizons.</p>
          </div>
        </article>

        <!-- Travel — featured -->
        <article class="hobby hobby--travel sm:col-span-2 lg:col-span-4 reveal" style="--c: #3a93c9">
          <svg class="flight" viewBox="0 0 300 120" aria-hidden="true">
            <path d="M10,95 C70,25 200,20 290,55" fill="none" stroke="currentColor" stroke-width="1.5" stroke-dasharray="3 6" opacity="0.4"/>
          </svg>
          <span class="plane"></span>
          <div class="hobby-body">
            <span class="hobby-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="9.5"/>
                <path d="M2.5 12h19M12 2.5c2.6 2.6 4 6 4 9.5s-1.4 6.9-4 9.5c-2.6-2.6-4-6-4-9.5s1.4-6.9 4-9.5Z"/>
              </svg>
            </span>
            <h3 class="hobby-title">Travelling</h3>
            <p class="hobby-desc max-w-md">
              Easily my favourite way to recharge. From spontaneous road trips to far-flung cities —
              new places, new cultures and new perspectives are what I crave most.
            </p>
          </div>
        </article>

        <!-- Padel -->
        <article class="hobby lg:col-span-2 reveal" style="--c: #2f9e87; transition-delay: .05s">
          <div class="hobby-body">
            <span class="hobby-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="9.5"/>
                <path d="M5.5 5.5a10 10 0 0 1 0 13"/>
                <path d="M18.5 5.5a10 10 0 0 0 0 13"/>
              </svg>
            </span>
            <h3 class="hobby-title">Padel tennis</h3>
            <p class="hobby-desc">Fast rallies, sharp angles, good company on court.</p>
          </div>
        </article>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HobbiesSection',
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
    this.$el.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }
};
</script>

<style scoped>
.life-bg {
  background: linear-gradient(180deg, var(--bg) 0%, var(--bg-tint) 100%);
}

.hobby {
  position: relative;
  overflow: hidden;
  background: color-mix(in srgb, var(--c, var(--accent)) 6%, var(--surface));
  border: 1px solid color-mix(in srgb, var(--c, var(--accent)) 18%, var(--line));
  border-radius: 2rem;
  padding: 1.9rem;
  transition: border-color 0.3s ease, transform 0.4s var(--spring), box-shadow 0.3s ease;
}

.hobby-body { position: relative; z-index: 2; }

/* top accent bar grows on hover */
.hobby::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: var(--c, var(--accent));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s var(--spring);
  z-index: 3;
}

.hobby:hover {
  transform: translateY(-5px);
  border-color: color-mix(in srgb, var(--c, var(--accent)) 50%, transparent);
  box-shadow: 0 18px 38px color-mix(in srgb, var(--c, var(--accent)) 20%, transparent);
}

.hobby:hover::before { transform: scaleX(1); }

.hobby-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 46px;
  height: 46px;
  border-radius: 13px;
  color: var(--c, var(--accent));
  background: color-mix(in srgb, var(--c, var(--accent)) 16%, white);
  transition: transform 0.45s var(--spring), box-shadow 0.3s ease;
}

.hobby:hover .hobby-icon {
  transform: scale(1.1) rotate(-6deg);
  box-shadow: 0 8px 20px color-mix(in srgb, var(--c, var(--accent)) 30%, transparent);
}

.hobby-icon svg { width: 23px; height: 23px; }

.hobby-title {
  margin-top: 1.1rem;
  font-size: 1.3rem;
  font-weight: 500;
  color: var(--ink);
}

.hobby-desc {
  margin-top: 0.5rem;
  color: var(--ink-soft);
  line-height: 1.6;
  font-size: 0.97rem;
}

/* featured cards get a touch more room */
.hobby--coffee, .hobby--f1, .hobby--travel { min-height: 200px; }
.hobby--travel { min-height: 220px; }

/* ---- Coffee: rising steam ---- */
.steam {
  position: absolute;
  top: 1.5rem; right: 1.9rem;
  width: 40px; height: 60px;
  z-index: 1;
  pointer-events: none;
}
.steam i {
  position: absolute;
  bottom: 0;
  width: 4px;
  height: 34px;
  border-radius: 4px;
  background: linear-gradient(to top, color-mix(in srgb, var(--c) 32%, transparent), transparent);
  opacity: 0;
  animation: steam 4.5s ease-in-out infinite;
}
.steam i:nth-child(1) { left: 6px;  animation-delay: 0s; }
.steam i:nth-child(2) { left: 18px; animation-delay: 1.4s; height: 42px; }
.steam i:nth-child(3) { left: 30px; animation-delay: 2.6s; }
@keyframes steam {
  0% { transform: translateY(8px) scaleY(0.6); opacity: 0; }
  35% { opacity: 0.9; }
  100% { transform: translateY(-22px) scaleY(1.1); opacity: 0; }
}

/* ---- F1: passing speed streaks ---- */
.streaks {
  position: absolute;
  inset: 0;
  z-index: 1;
  pointer-events: none;
  overflow: hidden;
}
.streaks i {
  position: absolute;
  height: 2px;
  width: 80px;
  right: -90px;
  border-radius: 2px;
  background: linear-gradient(to left, color-mix(in srgb, var(--c) 50%, transparent), transparent);
  animation: streak 3.2s linear infinite;
}
.streaks i:nth-child(1) { top: 26%; animation-delay: 0s; }
.streaks i:nth-child(2) { top: 52%; width: 110px; animation-delay: 1.1s; }
.streaks i:nth-child(3) { top: 74%; width: 64px; animation-delay: 2s; }
@keyframes streak {
  0% { transform: translateX(0); opacity: 0; }
  20% { opacity: 1; }
  100% { transform: translateX(-130%); opacity: 0; }
}

/* ---- Travel: dashed flight path + travelling marker ---- */
.hobby--travel .flight {
  position: absolute;
  top: 0.5rem; left: 0;
  width: 300px;
  height: 120px;
  color: var(--c);
  z-index: 1;
  pointer-events: none;
}
.plane {
  position: absolute;
  top: 0.5rem; left: 0;
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--c);
  box-shadow: 0 0 9px color-mix(in srgb, var(--c) 60%, transparent);
  z-index: 1;
  pointer-events: none;
  offset-path: path("M10,95 C70,25 200,20 290,55");
  offset-rotate: 0deg;
  animation: fly 9s ease-in-out infinite;
  opacity: 0;
}
@keyframes fly {
  0% { offset-distance: 0%; opacity: 0; }
  12% { opacity: 1; }
  88% { opacity: 1; }
  100% { offset-distance: 100%; opacity: 0; }
}

.reveal {
  opacity: 0;
  transform: translateY(28px) scale(0.97);
  transition: opacity 0.7s var(--spring), transform 0.7s var(--spring);
}
.reveal.in { opacity: 1; transform: translateY(0) scale(1); }

@media (prefers-reduced-motion: reduce) {
  .hobby, .hobby-icon, .reveal { transition: none; }
  .reveal { opacity: 1; transform: none; }
  .steam i, .streaks i, .plane { animation: none; opacity: 0; }
}
</style>
