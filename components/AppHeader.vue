<template>
  <div class="bg-green-400">
    <nav class="p-5 shadow md:flex md:items-center md:justify-between">
      <div class="flex justify-between items-center">
        <img src="../assets/img/IMG_8048.png" alt="Logo" class="w-20 mr-6">
        <span class="text-2xl font-[Poppins] cursor-pointer">
          <a class="text-3xl font-bold" href="/">Philipp Pollmann</a>
        </span>

        <span class="text-3xl cursor-pointer mx-2 md:hidden block w-12 h-12">
          <img src="https://freeiconshop.com/wp-content/uploads/edd/menu-rounded-solid.png" class="menu" onclick="Menu(this)">
        </span>
      </div>
      <PageButtons></PageButtons>
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