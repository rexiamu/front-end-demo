<template>
  <div class="menu">
    <el-input
      v-model="keyword"
      placeholder="输入关键字搜索"
      size="small"
      suffix-icon="el-icon-search"
      class="filter"
      clearable
    ></el-input>
    <el-scrollbar style="height: 100%">
      <router-link
        v-for="menu in showMenuList"
        :to="menu.path"
        :key="menu.title"
        :title="menu.title"
        :class="{ active: path === menu.path }"
      >
        {{ menu.title }}
      </router-link>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      keyword: ''
    }
  },
  computed: {
    menuList() {
      return this.$router.options.routes
    },
    showMenuList() {
      return this.menuList.filter(menu => menu.path != '*' && menu.title.includes(this.keyword))
    },
    path() {
      return this.$route.path
    },
  }
}
</script>

<style lang="scss" scoped>
.menu {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;

  a {
    text-decoration: none;
    font-size: 18px;
    line-height: 2em;
    transition: color 0.3s;
    overflow: hidden; //超出的文本隐藏
    text-overflow: ellipsis; //溢出用省略号显示
    white-space: nowrap; //溢出不换行

    &:link {
      color: gray;
    }
    &:visited {
      color: gray;
    }
    &:hover {
      color: pink;
    }
    &:active {
      color: pink;
    }

    &.active {
      color: pink;
    }
  }

  .filter {
    margin-bottom: 20px;
  }
}

::v-deep .el-scrollbar__view {
  display: flex;
  flex-direction: column;
}
</style>