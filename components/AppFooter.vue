<template>
  <footer class="bg-[#f7f8fa] border-t border-black/6 py-12 px-6">
    <div class="max-w-5xl mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <div>
          <p class="text-[#0f0f0f] font-semibold mb-2">Philipp Pollmann</p>
          <p class="text-[#9ca3af] text-sm leading-relaxed">
            DevOps Engineer &amp; Product Owner<br>
            Deutsche Telekom AG
          </p>
        </div>
        <div>
          <p class="text-black/35 text-xs font-semibold tracking-[0.15em] uppercase mb-4">Navigation</p>
          <ul class="space-y-2">
            <li><a href="#home" class="text-[#9ca3af] hover:text-[#0f0f0f] text-sm transition-colors">Home</a></li>
            <li><a href="#about" class="text-[#9ca3af] hover:text-[#0f0f0f] text-sm transition-colors">About me</a></li>
            <li><a href="#cv" class="text-[#9ca3af] hover:text-[#0f0f0f] text-sm transition-colors">CV</a></li>
            <li><a href="#projects" class="text-[#9ca3af] hover:text-[#0f0f0f] text-sm transition-colors">Projects</a></li>
            <li><a href="#contact" class="text-[#9ca3af] hover:text-[#0f0f0f] text-sm transition-colors">Contact</a></li>
          </ul>
        </div>
        <div>
          <p class="text-black/35 text-xs font-semibold tracking-[0.15em] uppercase mb-4">Connect</p>
          <ul class="space-y-2">
            <li>
              <a href="https://github.com/philipppollmann" target="_blank" rel="noopener noreferrer"
                 class="text-[#9ca3af] hover:text-[#0f0f0f] text-sm transition-colors flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/philipppollmann" target="_blank" rel="noopener noreferrer"
                 class="text-[#9ca3af] hover:text-[#0f0f0f] text-sm transition-colors flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:contact@philipppollmann.de"
                 class="text-[#9ca3af] hover:text-[#0f0f0f] text-sm transition-colors flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
                E-Mail
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="pt-6 border-t border-black/6 text-[#9ca3af] text-xs text-center">
        &copy; {{ new Date().getFullYear() }} Philipp Pollmann
      </div>
    </div>
  </footer>
</template>

<style scoped>
a {
  transition: color 0.2s ease;
}
</style>
