<template lang="html">
  <section class="main-section-wrapper">
    <!-- row 1 -->
    <div class="row1">
      <nav class="navigation">
        <ul class="menu">
          <li class="list-item1">
            <p>My Tasks</p>
          </li>
          <li class="list-item2">
            <div class="search">
              <input type="text" class="srachInput" name="search" value="" placeholder="Search">
              <span class="search-icon">
                <font-awesome-icon icon="search"/>
              </span>
            </div>
          </li>
        </ul>
      </nav>
    </div>
    <!-- /row 1 -->
    <!-- row 2 -->
    <div class="row2">
      <figure class="user-image">
        <img src="" alt="">
      </figure>
      <article class="user-detail">
        <h1>Ashraf Hossain</h1>
        <h4>ashraf@webdev.com</h4>
      </article>
      <nav class="menu-tab">
        <ul class="menu1">
          <li class="list-item" v-for="item in menu1Items" :key="item.id">
            <a href="#">
              <span v-if="item.hasImage">
                <img :class="item.class" :src="item.image" alt="">
                {{item.name}}
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <!-- /row 2 -->
    <!-- row 3 -->
    <div class="row3">
      <section>
        <p>
          <img class="noTaskImage" src="../assets/marged.png" alt="">
        </p>
        <p>
          No Taks Found
        </p>
      </section>
    </div>
    <!-- /row 3 -->
  </section>
</template>

<script>
export default {
  data(){
    return{
      menu1Items:[
        {id:1,name:'Overview',icon:'',class:'test',active:false,icon2:'',image:'../assets/overview.png',hasIcon:false,hasIcon2:false,hasImage:true},
        {id:2,name:'Activities',icon:'',class:'test',active:false,icon2:'',image:'../assets/activities.png',hasIcon:false,hasIcon2:false,hasImage:true},
        {id:3,name:'Pending Tasks',icon:'',class:'test',active:false,icon2:'',image:'../assets/pending-task.png',hasIcon:false,hasIcon2:false,hasImage:true},
        {id:4,name:'Completed Tasks',icon:'',class:'test',active:false,icon2:'',image:'../assets/completed-task.png',hasIcon:false,hasIcon2:false,hasImage:true},
      ]
    }
  },
}
</script>

<style lang="less" scoped>
.main-section-wrapper{
  display: flex;
}
</style>
