<template>
  <footer class="border-t border-[var(--line)] py-14 px-6 bg-[var(--bg-tint)]">
    <div class="max-w-5xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        <div>
          <p class="text-lg font-semibold tracking-tight text-[var(--ink)] mb-2">Philipp Pollmann</p>
          <p class="text-[var(--ink-soft)] text-sm leading-relaxed">
            DevOps Engineer &amp; Product Owner<br>
            Deutsche Telekom AG · Cologne
          </p>
        </div>
        <div>
          <p class="footer-label">Navigation</p>
          <ul class="space-y-2.5">
            <li><a href="#about" class="footer-link">About</a></li>
            <li><a href="#cv" class="footer-link">CV</a></li>
            <li><a href="#stack" class="footer-link">Stack</a></li>
            <li><a href="#life" class="footer-link">Life</a></li>
            <li><a href="#contact" class="footer-link">Contact</a></li>
          </ul>
        </div>
        <div>
          <p class="footer-label">Connect</p>
          <ul class="space-y-2.5">
            <li>
              <a href="https://github.com/philipppollmann" target="_blank" rel="noopener noreferrer" class="footer-link flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://de.linkedin.com/in/philipp-pollmann-5a3754206" target="_blank" rel="noopener noreferrer" class="footer-link flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://codeberg.org/PhilippPollmann" target="_blank" rel="noopener noreferrer" class="footer-link flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10.25" stroke="currentColor" stroke-width="1.5"/><path d="M3 17.5 11.4 6.9a.75.75 0 0 1 1.2 0L21 17.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                Codeberg
              </a>
            </li>
            <li>
              <a href="mailto:contact@philipppollmann.de" class="footer-link flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/></svg>
                E-Mail
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="pt-6 border-t border-[var(--line)] text-[var(--ink-faint)] text-xs text-center">
        © {{ new Date().getFullYear() }} Philipp Pollmann — made with care in Cologne
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer-label {
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-faint);
  margin-bottom: 1rem;
}

.footer-link {
  color: var(--ink-soft);
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.footer-link:hover {
  color: var(--accent);
}
</style>
