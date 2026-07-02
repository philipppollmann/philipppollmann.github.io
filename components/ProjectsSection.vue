<template>
  <section id="projects" class="relative py-24 md:py-32 px-6">
    <div class="max-w-5xl mx-auto">
      <div class="reveal mb-14 md:mb-16">
        <p class="eyebrow"><span class="no">04</span>Open source</p>
        <h2 class="mt-4 text-4xl md:text-5xl text-[var(--ink)] leading-tight">Built on the side</h2>
        <p class="mt-5 text-lg text-[var(--ink-soft)] max-w-2xl">
          Tools and plugins I build in my spare time — scratching my own itches, then sharing them.
        </p>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <a
          v-for="(repo, i) in repos"
          :key="repo.name"
          :href="`https://github.com/philipppollmann/${repo.name}`"
          target="_blank"
          rel="noopener noreferrer"
          class="repo-card reveal"
          :style="`transition-delay: ${i * 0.05}s`"
        >
          <div class="flex items-start justify-between mb-4">
            <span class="repo-icon" :style="`color: ${repo.iconColor}; background: ${repo.iconBg}`">
              <svg viewBox="0 0 24 24" width="19" height="19" fill="currentColor" aria-hidden="true">
                <path :d="repo.icon"/>
              </svg>
            </span>
            <span class="repo-arrow">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg>
            </span>
          </div>
          <h3 class="repo-name">{{ repo.name }}</h3>
          <p class="repo-desc">{{ repo.description }}</p>
          <div class="repo-meta">
            <span class="flex items-center gap-1.5">
              <span class="lang-dot" :style="`background: ${repo.langColor}`"></span>
              {{ repo.language }}
            </span>
            <span v-if="repo.stars" class="flex items-center gap-1">
              <svg viewBox="0 0 16 16" width="13" height="13" fill="currentColor"><path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Z"/></svg>
              {{ repo.stars }}
            </span>
          </div>
        </a>
      </div>

      <div class="reveal mt-10">
        <a href="https://github.com/philipppollmann?tab=repositories" target="_blank" rel="noopener noreferrer" class="all-repos">
          View all repositories
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script>
/* Brand icon paths from Simple Icons (simpleicons.org, CC0) */
const ICON_BACKSTAGE = 'M19.5188 9.3003a4.5194 4.5194 0 0 0 .7533-.5808 7.0485 7.0485 0 0 0 .1289-.1288 4.6555 4.6555 0 0 0 .4441-.5254 3.5672 3.5672 0 0 0 .354-.6032 2.721 2.721 0 0 0 .2436-.9185c.0835-1.086-.56-2.166-1.995-3.0369L13.6692 0 6.9335 6.454 2.548 10.6558l6.0826 3.6916a6.25 6.25 0 0 0 3.2351.919c1.3958 0 2.7333-.4928 3.7201-1.4388 1.0732-1.0283 1.4294-2.3591.7674-3.4653a2.7568 2.7568 0 0 0-.3809-.4968 4.9944 4.9944 0 0 0 1.0821.1204h.0084a4.7653 4.7653 0 0 0 1.7363-.3243 4.53 4.53 0 0 0 .7197-.3613Zm-5.6317 3.35c-1.0821 1.0367-2.8229 1.189-4.24.3304l-4.2085-2.5546 3.7779-3.6204 4.2796 2.5977c1.542.9348 1.4574 2.2247.391 3.2469zm.5001-4.6051-3.957-2.4023 3.6075-3.4585 3.8854 2.358c1.4529.8804 1.6416 2.0723.591 3.0805a3.3992 3.3992 0 0 1-4.1269.4223Zm1.6725 10.6418c-1.0961 1.0501-2.586 1.6293-4.194 1.6293a6.93 6.93 0 0 1-3.5902-1.0194L2.548 15.8238v1.3817l6.0826 3.6916a6.2506 6.2506 0 0 0 3.2351.9197c1.3958 0 2.7333-.4935 3.7201-1.439.7214-.691 1.1202-1.5195 1.1023-2.3237v-.1003a4.888 4.888 0 0 1-.6284.7354zm0-2.1844c-1.0961 1.0502-2.586 1.6287-4.194 1.6287a6.9345 6.9345 0 0 1-3.5902-1.0188L2.548 13.64v1.3824l6.0826 3.6915a6.2506 6.2506 0 0 0 3.2351.9197c1.3958 0 2.7333-.4934 3.7201-1.4389.7214-.6911 1.1202-1.5195 1.1023-2.3244v-.0997a4.888 4.888 0 0 1-.6284.7354zm0-2.1844c-1.0961 1.0508-2.586 1.6293-4.194 1.6293a6.9345 6.9345 0 0 1-3.5902-1.0188l-5.7275-3.472v1.3823l6.0826 3.6916a6.25 6.25 0 0 0 3.2351.9191c1.3958 0 2.7333-.4929 3.7201-1.4383.7214-.6917 1.1202-1.5195 1.1023-2.3244v-.102a4.8218 4.8218 0 0 1-.6284.7371zm4.688 1.4417a5.2733 5.2733 0 0 1-3.3718 1.4484v1.4988a4.5704 4.5704 0 0 0 2.898-1.253c.784-.7493 1.184-1.5743 1.1761-2.3882v-.1226a5.3164 5.3164 0 0 1-.7023.8205zm-4.688 5.1086c-1.0961 1.0508-2.586 1.6293-4.194 1.6293a6.93 6.93 0 0 1-3.5902-1.0193L2.548 18.007v1.3823l6.0826 3.691A6.2506 6.2506 0 0 0 11.8657 24c1.3958 0 2.7333-.4929 3.7201-1.4389.7214-.6911 1.1202-1.5195 1.1023-2.3238v-.1003a4.833 4.833 0 0 1-.6284.7354zM20.863 9.0987c-.038.0386-.0756.0773-.1148.1154a5.2856 5.2856 0 0 1-.596.4845 5.1165 5.1165 0 0 1-.6496.392 5.2946 5.2946 0 0 1-1.4697.4879 5.4716 5.4716 0 0 1-.7931.088 3.07 3.07 0 0 1 .07.2744 2.9836 2.9836 0 0 1 .0638.672v.5411h.0032a4.7277 4.7277 0 0 0 1.4198-.3108 4.5368 4.5368 0 0 0 1.478-.9421c.0449-.043.084-.0874.1267-.131a4.5972 4.5972 0 0 0 .4441-.5254 3.5712 3.5712 0 0 0 .354-.6016 2.7193 2.7193 0 0 0 .242-.9213c.0046-.0689.0111-.1384.0106-.2073v-.1131q-.0605.0863-.126.173a5.4178 5.4178 0 0 1-.4627.5243zm0 4.3643c-.0386.0392-.0733.079-.112.1176a5.276 5.276 0 0 1-3.3717 1.4484v1.4938a4.5704 4.5704 0 0 0 2.8979-1.253 4.1172 4.1172 0 0 0 .9219-1.2602 2.7198 2.7198 0 0 0 .242-.9208c.0047-.0694.0111-.1383.0106-.2078v-.1226c-.0414.06-.0818.1204-.1272.1798a5.359 5.359 0 0 1-.4615.5248zm0-2.1844c-.0386.0392-.0733.079-.112.1176a5.219 5.219 0 0 1-.5954.4845 5.1321 5.1321 0 0 1-.6513.392 5.3472 5.3472 0 0 1-2.125.5702v1.4955a4.5732 4.5732 0 0 0 2.8979-1.253c.0448-.0431.084-.0873.1266-.131a4.5972 4.5972 0 0 0 .4441-.5254 3.5712 3.5712 0 0 0 .3512-.6026 2.7198 2.7198 0 0 0 .242-.9208c.0047-.0694.0111-.139.0106-.2078v-.1232c-.0414.0604-.0818.121-.1272.1803a5.359 5.359 0 0 1-.4615.5248z';
const ICON_TERRAFORM = 'M1.44 0v7.575l6.561 3.79V3.787zm21.12 4.227l-6.561 3.791v7.574l6.56-3.787zM8.72 4.23v7.575l6.561 3.787V8.018zm0 8.405v7.575L15.28 24v-7.578z';
const ICON_OBSIDIAN = 'M19.355 18.538a68.967 68.959 0 0 0 1.858-2.954.81.81 0 0 0-.062-.9c-.516-.685-1.504-2.075-2.042-3.362-.553-1.321-.636-3.375-.64-4.377a1.707 1.707 0 0 0-.358-1.05l-3.198-4.064a3.744 3.744 0 0 1-.076.543c-.106.503-.307 1.004-.536 1.5-.134.29-.29.6-.446.914l-.31.626c-.516 1.068-.997 2.227-1.132 3.59-.124 1.26.046 2.73.815 4.481.128.011.257.025.386.044a6.363 6.363 0 0 1 3.326 1.505c.916.79 1.744 1.922 2.415 3.5zM8.199 22.569c.073.012.146.02.22.02.78.024 2.095.092 3.16.29.87.16 2.593.64 4.01 1.055 1.083.316 2.198-.548 2.355-1.664.114-.814.33-1.735.725-2.58l-.01.005c-.67-1.87-1.522-3.078-2.416-3.849a5.295 5.295 0 0 0-2.778-1.257c-1.54-.216-2.952.19-3.84.45.532 2.218.368 4.829-1.425 7.531zM5.533 9.938c-.023.1-.056.197-.098.29L2.82 16.059a1.602 1.602 0 0 0 .313 1.772l4.116 4.24c2.103-3.101 1.796-6.02.836-8.3-.728-1.73-1.832-3.081-2.55-3.831zM9.32 14.01c.615-.183 1.606-.465 2.745-.534-.683-1.725-.848-3.233-.716-4.577.154-1.552.7-2.847 1.235-3.95.113-.235.223-.454.328-.664.149-.297.288-.577.419-.86.217-.47.379-.885.46-1.27.08-.38.08-.72-.014-1.043-.095-.325-.297-.675-.68-1.06a1.6 1.6 0 0 0-1.475.36l-4.95 4.452a1.602 1.602 0 0 0-.513.952l-.427 2.83c.672.59 2.328 2.316 3.335 4.711.09.21.175.43.253.653z';
const ICON_STRAVA = 'M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.15-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.463 0l-7 13.828h4.169';
const ICON_VUE = 'M24,1.61H14.06L12,5.16,9.94,1.61H0L12,22.39ZM12,14.08,5.16,2.23H9.59L12,6.41l2.41-4.18h4.43Z';

export default {
  name: 'ProjectsSection',
  data() {
    return {
      repos: [
        {
          name: 'backstage-plugin-azure-resources',
          description: 'A Spotify Backstage plugin that brings Azure resources right into your Backstage catalog.',
          language: 'TypeScript',
          langColor: '#3178c6',
          stars: 0,
          icon: ICON_BACKSTAGE,
          iconColor: '#9BF0E1',
          iconBg: '#121212',
        },
        {
          name: 'tfdiff',
          description: 'A small Go CLI that makes Terraform plan output readable at a glance.',
          language: 'Go',
          langColor: '#00ADD8',
          stars: 0,
          icon: ICON_TERRAFORM,
          iconColor: '#844FBA',
          iconBg: 'rgba(132, 79, 186, 0.1)',
        },
        {
          name: 'obsidian-gpx',
          description: 'An Obsidian plugin to view GPX tracks from runs, rides and trips directly in your notes.',
          language: 'TypeScript',
          langColor: '#3178c6',
          stars: 0,
          icon: ICON_OBSIDIAN,
          iconColor: '#7C3AED',
          iconBg: 'rgba(124, 58, 237, 0.1)',
        },
        {
          name: 'obsidian-strava-sync',
          description: 'Syncs Strava activities into Obsidian — training log meets second brain.',
          language: 'TypeScript',
          langColor: '#3178c6',
          stars: 0,
          icon: ICON_STRAVA,
          iconColor: '#FC4C02',
          iconBg: 'rgba(252, 76, 2, 0.1)',
        },
        {
          name: 'QR-Code-Generator',
          description: 'A fast, no-nonsense QR code generator built with Vue.',
          language: 'Vue',
          langColor: '#42b883',
          stars: 4,
          icon: ICON_VUE,
          iconColor: '#42b883',
          iconBg: 'rgba(66, 184, 131, 0.1)',
        },
        {
          name: 'Backstage-Template',
          description: 'A ready-to-run Spotify Backstage template with deployment baked in.',
          language: 'TypeScript',
          langColor: '#3178c6',
          stars: 0,
          icon: ICON_BACKSTAGE,
          iconColor: '#9BF0E1',
          iconBg: '#121212',
        },
      ],
    };
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); observer.unobserve(e.target); }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    this.$el.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  },
};
</script>

<style scoped>
.repo-card {
  display: flex;
  flex-direction: column;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 1.25rem;
  padding: 1.5rem;
  transition: border-color 0.25s ease, transform 0.35s var(--spring), box-shadow 0.25s ease;
}

.repo-card:hover {
  transform: translateY(-3px);
  border-color: color-mix(in srgb, var(--accent) 40%, var(--line));
  box-shadow: 0 1px 2px rgba(22, 22, 22, 0.04), 0 14px 32px rgba(22, 22, 22, 0.07);
}

.repo-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  color: var(--accent);
  background: var(--accent-soft);
}

.repo-arrow {
  color: var(--ink-faint);
  opacity: 0;
  transform: translate(-4px, 4px);
  transition: opacity 0.25s ease, transform 0.35s var(--spring), color 0.2s ease;
}

.repo-card:hover .repo-arrow {
  opacity: 1;
  transform: translate(0, 0);
  color: var(--accent);
}

.repo-name {
  font-size: 1.02rem;
  font-weight: 600;
  color: var(--ink);
  letter-spacing: -0.01em;
  word-break: break-word;
}

.repo-desc {
  margin-top: 0.45rem;
  font-size: 0.9rem;
  color: var(--ink-soft);
  line-height: 1.55;
  flex-grow: 1;
}

.repo-meta {
  display: flex;
  align-items: center;
  gap: 1.1rem;
  margin-top: 1.1rem;
  font-size: 0.78rem;
  font-weight: 500;
  color: var(--ink-faint);
}

.lang-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
}

.all-repos {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--ink);
  padding-bottom: 3px;
  border-bottom: 1.5px solid var(--line);
  transition: color 0.2s ease, border-color 0.2s ease;
}

.all-repos:hover {
  color: var(--accent);
  border-color: var(--accent);
}

.all-repos svg {
  transition: transform 0.35s var(--spring);
}

.all-repos:hover svg { transform: translateX(3px); }

.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s var(--spring), transform 0.7s var(--spring);
}
.reveal.in { opacity: 1; transform: translateY(0); }

@media (prefers-reduced-motion: reduce) {
  .reveal { opacity: 1; transform: none; transition: none; }
}
</style>
