<template>
  <div class="unfold-poker">
    <div class="box">
      <div class="card">1</div>
      <div class="card">2</div>
      <div class="card">3</div>
      <div class="card">4</div>
      <div class="card">5</div>
      <div class="card">6</div>
      <div class="card">7</div>
      <div class="card">8</div>
      <div class="card">9</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UnfoldPoker',
  title: '扑克展开'
}
</script>

<style lang="scss" scoped>
.unfold-poker {
  width: 100%;
  display: flex;
  justify-content: center;

  .box {
    position: relative;
    width: 300px;
    height: 400px;
    margin-top: 100px;
  }

  .card {
    width: 300px;
    height: 400px;
    position: absolute;
    font-size: 30px;
    font-weight: bold;
    box-sizing: border-box;
    padding: 5px 10px;
    background-color: #6a4e9e;
    color: #fff;
    box-shadow: 1px 1px 5px #999;
    transform-origin: center bottom;
    transition: all 1s;
  }

  .card:hover {
    background-color: #4b317a;
  }

  .box:hover .card:nth-child(1) {
    transform: rotate(-40deg);
  }

  .box:hover .card:nth-child(2) {
    transform: rotate(-30deg);
  }

  .box:hover .card:nth-child(3) {
    transform: rotate(-20deg);
  }

  .box:hover .card:nth-child(4) {
    transform: rotate(-10deg);
  }

  .box:hover .card:nth-child(5) {
    transform: rotate(0deg);
  }

  .box:hover .card:nth-child(6) {
    transform: rotate(10deg);
  }

  .box:hover .card:nth-child(7) {
    transform: rotate(20deg);
  }

  .box:hover .card:nth-child(8) {
    transform: rotate(30deg);
  }

  .box:hover .card:nth-child(9) {
    transform: rotate(40deg);
  }
}
</style>