<template>
  <div id="app">
    <div class="wrapper">
      <!-- TopMenu section -->
      <TopMenu msg="Welcome to Your Vue.js App"/>
      <!-- /TopMenu section -->
      <!-- sidebar and main content wrapper -->
      <div class="container-1">
        <left-sidebar></left-sidebar>
        <main-section></main-section>

      </div>
      <!-- /sidebar and main content wrapper -->
    </div>
  </div>
</template>

<script>
import TopMenu from './components/TopMenu.vue'
import LeftSidebar from './components/LeftSidebar.vue'
import MainSection from './components/MainSection.vue'
export default {
  name: 'app',
  components: {
    TopMenu,
    LeftSidebar,
    MainSection
  }
}
</script>

<style lang="less">
@font-face {
  font-family: 'Helvetica';
  src: url('/assets/fonts/Helvetica/HELR45W.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}
body{
  background: #F5F5F5;
  font-family: 'Helvetica', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 0;
  margin: 0;
}
.container-1{
  display: flex;

}
</style>
