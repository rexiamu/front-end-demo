<template>
  <div class="css-cube">
    <div class="box">
      <div class="up">上</div>
      <div class="down">下</div>
      <div class="left">左</div>
      <div class="right">右</div>
      <div class="forward">前</div>
      <div class="back">后</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CssCube',
  title: 'CSS立方体',
}
</script>

<style lang="scss" scoped>
.css-cube {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
}

.box {
  width: 300px;
  height: 300px;
  transform-style: preserve-3d;
  position: relative;
  animation: run infinite 10s;
}

@keyframes run {
  0% {
    transform: rotateX(0deg) rotateY(0deg);
  }

  100% {
    transform: rotateX(360deg) rotateY(360deg);
  }
}

.box > div {
  width: 100%;
  height: 100%;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
}

.up {
  background-color: rgba(0, 0, 255, 0.2);
  transform: rotateX(90deg) translateZ(150px);
}

.down {
  background-color: rgba(0, 0, 125, 0.2);
  transform: rotateX(90deg) translateZ(-150px);
}

.left {
  background-color: rgba(0, 255, 0, 0.2);
  transform-origin: left;
  transform: rotateY(90deg) translateX(-150px);
}

.right {
  background-color: rgba(0, 125, 0, 0.2);
  transform-origin: right;
  transform: rotateY(90deg) translateX(150px);
}

.forward {
  background-color: rgba(255, 0, 0, 0.2);
  transform: translateZ(150px);
}

.back {
  background-color: rgba(125, 0, 0, 0.2);
  transform: translateZ(-150px);
}
</style>