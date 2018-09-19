<template lang="html">
  <aside class="left-sidebar">
    <nav class="side-menu">
      <!-- menue 1 -->
      <ul class="menu1">
        <li class="list-item">
          <font-awesome-icon class="faicon3" icon="tachometer-alt" />
          Dashboard
      </li>
      <li class="list-item" @click="showDropdown2 = !showDropdown2">
          <img src="../assets/icons8-flow-chart-32.png" alt="" class="small-icon">
          Project Manager
      </li>
      <!-- dropdown sectioni -->
      <ul class="dropdown-content" v-if="showDropdown2">
        <li class="list-item" v-for="item in dropdown2Items" :key="item.id">
          {{item.name}}
        </li>
      </ul>
      <!-- /dropdown sectioni -->
      </ul>
      <!-- /menue 1 -->

      <!-- menue 3 -->
      <ul class="menu3">
        <li class="list-item" v-for="item in menue3Items" :key="item.id">
            <span v-if="item.hasIcon && item.hasIcon2">
              <font-awesome-icon :icon="item.icon"/>
              <font-awesome-icon :icon="item.icon2"/>
            </span>
            <span v-else-if="item.hasIcon">
              <font-awesome-icon :icon="item.icon"/>
            </span>
            <span v-else-if="item.hasIcon2">
              <font-awesome-icon :icon="item.icon2"/>
            </span>
            <span v-else-if="item.hasImage">
              <img :src="item.image" alt="" >
            </span>
            <span v-else>
              {{item.name}}
            </span>
            {{item.name}}
        </li>
      </ul>
      <!-- /menue 3 -->
      <!-- menue 4 -->
      <ul class="menu4">
        <li class="list-item" v-for="item in menue4Items" :key="item.id">
            <span v-if="item.hasIcon && item.hasIcon2">
              <font-awesome-icon :icon="item.icon"/>
              <font-awesome-icon :icon="item.icon2"/>
            </span>
            <span v-else-if="item.hasIcon">
              <font-awesome-icon :icon="item.icon"/>
            </span>
            <span v-else-if="item.hasIcon2">
              <font-awesome-icon :icon="item.icon2"/>
            </span>
            <span v-else-if="item.hasImage">
              <img :src="item.image" alt="" >
            </span>
            <span v-else>
              {{item.name}}
            </span>
            {{item.name}}
        </li>
      </ul>
      <!-- /menue 4 -->
    </nav>
  </aside>
</template>

<script>
export default {
  data(){
    return {
      showDropdown2:false,
      menu1Items:[
        {id:1,name:'Dashboard',icon:'tachometer-alt',class:'test',active:false,icon2:'',image:'',hasIcon:true,hasIcon2:false,hasImage:false},
        {id:2,name:'Project Manager',icon:'',class:'test',active:false,icon2:'',image:'../assets/icons8-flow-chart-32.png',hasIcon:false,hasIcon2:false,hasImage:true}
      ],
      dropdown2Items:[
        {id:1,name:'Projects',class:'test',active:false},
        {id:2,name:'Categories',class:'test',active:false},
        {id:3,name:'My Tasks',class:'test',active:false},
        {id:4,name:'Calender',class:'test',active:false},
        {id:5,name:'Add-ons',class:'test',active:false},
        {id:6,name:'Reposts',class:'test',active:false},
        {id:7,name:'Progress',class:'test',active:false},
        {id:8,name:'Settings',class:'test',active:false},
        {id:9,name:'Modules',class:'test',active:false}
      ],
      menue3Items:[
        {id:1,name:'Posts',icon:'thumbtack',class:'test',active:false,icon2:'',image:'',hasIcon:true,hasIcon2:false,hasImage:false},
        {id:2,name:'Media',icon:'camera',class:'test',active:false,icon2:'music',image:'',hasIcon:true,hasIcon2:true,hasImage:false},
        {id:3,name:'Pages',icon:'',class:'test',active:false,icon2:'',image:'../assets/paste.png',hasIcon:false,hasIcon2:false,hasImage:true},
        {id:4,name:'Comments',icon:'comment-alt',class:'test',active:false,icon2:'',image:'',hasIcon:true,hasIcon2:false,hasImage:false},
        {id:5,name:'Email Log',icon:'',class:'test',active:false,icon2:'',image:'../assets/mail-envelope-closed_314900.svg',hasIcon:false,hasIcon2:false,hasImage:true}
      ],
      menue4Items:[
        {id:1,name:'Appearance',icon:'brush',class:'test',active:false,icon2:'',image:'',hasIcon:true,hasIcon2:false,hasImage:false},
        {id:2,name:'Plugins',icon:'plug',class:'test',active:false,icon2:'',image:'',hasIcon:true,hasIcon2:false,hasImage:false},
        {id:3,name:'Users',icon:'user',class:'test',active:false,icon2:'',image:'',hasIcon:true,hasIcon2:false,hasImage:false},
        {id:4,name:'Tools',icon:'wrench',class:'test',active:false,icon2:'',image:'',hasIcon:true,hasIcon2:false,hasImage:false},
      ],
    }
  },
}
</script>

<style lang="less" scoped>
@asideDefaultBackColor:#24282D;
@asideDefaultWidth:160px;
@asideDefaultFontColor:white;
@asideDefaultFontSize:14px;
@asideDefaultFontWeight:400;
@asideDefaultLineHeight:18px;
@dropdownBackColor:#32373C;
@hoverColor: #191E23;
@defaultPadding:8px 0;
@listPadding:8px 8px;

// common class
.list-hover-effect{
  &:hover{
    background-color: @hoverColor;
    cursor: pointer;
    &:after{
      content: "";
      position: absolute;
      // left: 0;
      right: 0;
      top: 9px;
      width: 0;
      height: 0;
      // background: #800080;
      z-index: 10;
      border-top: solid transparent 15px;
      border-left: solid transparent 15px;
      border-right: solid #F5F5F5 15px;
      border-bottom: solid transparent 15px;
    }

  }
}
.commonAnchorRole{
  text-decoration: none;
  color: @asideDefaultFontColor;
  align-items: center;
  font-size: @asideDefaultFontSize;
  font-weight: @asideDefaultFontWeight;
  height: 34px;
}
.left-sidebar{
  background-color: @asideDefaultBackColor;
  font-size: @asideDefaultFontSize;
  color: @asideDefaultFontColor;
  display: flex;
  .list-item{
    padding: @listPadding;
    position: relative;
    height: 32px;
    width: @asideDefaultWidth;
    .list-hover-effect;
  }
  .menu1{
    .dropdown-content{
      background-color: #32373C;
      list-style: none;
      padding: 0;
      li > a{
        .commonAnchorRole;
      }
    }
    list-style: none;

    padding: @defaultPadding;
  }
  .menu3,.menu4{
    list-style: none;
    padding: @defaultPadding;
  }

}
.small-icon{
  width: 15px;
  height: 15px;
}
</style>
