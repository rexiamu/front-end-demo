<template>
  <div class="virtual-list">
    <div class="table">
      <div class="thead">
        <div class="thead-item">id</div>
        <div class="thead-item">name</div>
        <div class="thead-item">count</div>
      </div>
      <div class="tbody" @scroll="tbodyScroll">
        <div class="scroll-area"></div>
        <div class="list">
          <div class="trow" v-for="item in visibleData" :key="item.id">
            <div class="trow-item">{{ item.id }}</div>
            <div class="trow-item">{{ item.name }}</div>
            <div class="trow-item">{{ item.count }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VirtualList',
  title: '虚拟列表',
  data() {
    return {
      allData: [],
      visibleData: [],
      visibleHeight: 500,
      itemHeight: 50,
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    // 初始化
    init() {
      let that = this
      // 生成 10 万条数据
      for (let i = 0; i < 100000; i++) {
        this.allData.push({
          id: i + 1,
          name: 'nick' + (Math.random() * 10).toFixed(0),
          count: (Math.random() * 100).toFixed(0)
        })
      }

      // 根据所有数据设置滚动区高度
      document.querySelector('.scroll-area').style.height = this.allData.length * this.itemHeight + 'px'

      // 首次打开渲染数据
      this.updateDomData()
    },
    // 更新数据
    updateDomData(scrollTop = 0) {
      let visibleCount = Math.ceil(this.visibleHeight / this.itemHeight); // 可视区域容纳数据的数量
      let start = Math.floor(scrollTop / this.itemHeight);  // 当前显示数据列表的第一条索引
      let end = start + visibleCount; // 当前显示数据列表的最后一条索引
      this.visibleData = []; // 清空数据
      this.visibleData.push(...this.allData.slice(start, end)); // 从所有数据中筛选当前的数据项

      // 将数据列表移动到可见区域
      document.querySelector('.list').style.top = start * this.itemHeight + 'px';
    },
    // 监听滚动事件
    tbodyScroll(e) {
      this.updateDomData(e.target.scrollTop)
    }
  },
}
</script>

<style lang="scss" scoped>
.virtual-list {
  width: 100%;
  display: flex;
  justify-content: center;

  > .table {
    width: 400px;
    margin: 0 auto;
    border: 1px solid #eee;

    > .thead {
      height: 50px;
      font-weight: bold;
      display: flex;

      > .thead-item {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 3px solid #eee;
      }
    }

    > .tbody {
      height: 500px;
      overflow-y: auto;
      position: relative;

      > .scroll-area {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        z-index: -1;
      }

      > .list {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 500px;

        > .trow {
          display: flex;
          height: 50px;

          > .trow-item {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
}
</style>
