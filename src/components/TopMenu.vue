<template>
  <header>
    <nav class="navbar">
      <!-- left menu -->
      <ul class="left-menu">
        <li class="list-item">
          <a href="#">
            <img src="../assets/wordpress-brands.svg" class="logo" alt="">
          </a>
        </li>
        <li class="list-item">
          <a href="#">
            <font-awesome-icon class="faicon1" icon="home" />
            Project Manager
          </a>
        </li>
        <li class="list-item">
          <a href="#">
            <font-awesome-icon class="faicon1" icon="sync-alt" />
            2
          </a>
        </li>
        <li class="list-item">
          <a href="#">
            <font-awesome-icon class="faicon1" icon="comment-alt" />
            0
          </a>
        </li>
        <li class="list-item">
          <a href="#">
            <font-awesome-icon class="faicon2" icon="plus" />
            New
          </a>
        </li>
      </ul>
      <!-- /left menu -->
      <!-- right menu -->
      <ul class="right-menu">
        <li class="list-item"><a href="">
          Debug
        </a></li>
        <li class="list-item"><a href="">
          Howdy,admin
        </a></li>
        <li class="list-item"><a href="">
          <font-awesome-icon class="faicon3" icon="user" />

        </a></li>
      </ul>
      <!-- /right menu -->
    </nav>
  </header>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>


<style lang="less" scoped>
//

// variable
@navbarDefaultColor: #24282D;
@textColor:white;
@faColor:#9EA3A8;
@fontSize: 13px;
@navbarDefaultHeight: 32px;
@defaultListHeight: 32px;
@defaultListWidth: 35px;
@defaultImageHeight: 28px;
@defaultImageWidth: 15px;

// mixins
// commonRole
.commonRole{
  display: flex;
}
.commonAnchorRole{
  text-decoration: none;
  color: @textColor;
  align-items: center;
  font-size: @fontSize;
  padding: 0 7px;
}

.navbar{
  background-color: @navbarDefaultColor;
  height: @navbarDefaultHeight;

  .commonRole;
}
.left-menu{
  list-style: none;
  height: @navbarDefaultHeight;
  margin-top: 0px;
  margin-left: -2.5rem;
  .commonRole;
  li.list-item{
    .commonRole;
    height: @defaultListHeight;
    a{
      .commonRole;
      .commonAnchorRole;
      .faicon1,.faicon2{
        color: @faColor;
        margin-right: 6px;
      }
    }
  }
  img{
    width: @defaultImageWidth;
    height: @defaultImageHeight;
    margin-right: 6px;
  }
}
.right-menu{
  list-style: none;
  margin-left: auto;
  margin-top: 0px;
  height: @navbarDefaultHeight;
  .commonRole;
  li.list-item{
    .commonRole;
    height: @defaultListHeight;
    a{
      .commonRole;
      .commonAnchorRole;
      .faicon3{
        color: #9EA3A8;
      }
    }
  }
}

</style>
