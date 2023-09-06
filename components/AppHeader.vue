<template>
  <div class="bg-green-400">
    <nav class="p-5 shadow md:flex md:items-center md:justify-between">
      <div class="flex justify-between items-center">
        <span class="text-2xl font-[Poppins] cursor-pointer">
          <p class="text-3xl font-bold">Philipp Pollmann</p>
        </span>

        <span class="text-3xl cursor-pointer mx-2 md:hidden block w-12 h-12">
          <img src="https://freeiconshop.com/wp-content/uploads/edd/menu-rounded-solid.png" class="menu" onclick="Menu(this)">
        </span>
      </div>


      <ul class="md:flex md:items-center z-[-1] md:z-auto md:static
      absolute bg-green-400 w-full left-0 md:w-auto md:py-0 py-4
      md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all
      ease-in duration-500">
        <li>
          <NuxtLink to="/" class="m-5 h-14 w-60 bg-orange-600 rounded-lg shadow-xl leading-none flex items-center space-x-5">
            <p class="pl-16 font-bold">HOME</p>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about" class="m-5 h-14 w-60 bg-orange-600 rounded-lg shadow-xl leading-none flex items-center space-x-5">
            <p class="pl-16 font-bold">ABOUT</p>
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/projects" class="m-5 h-14 w-60 bg-orange-600 rounded-lg shadow-xl leading-none flex items-center space-x-5">
            <p class="pl-16 font-bold">PROJECTS</p>
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script lang="js">
function Menu(e){
  let list = document.querySelector('ul');
  e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
}
export { Menu };
export default {
  name: 'AppHeader'
}
</script>