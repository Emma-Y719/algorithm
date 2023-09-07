用flex实现一个布局：
section1 高度为50px
section2, section3 在其下， section2 宽度为100px
其余尺寸随页面大小自适应，撑满整个屏幕


**html**
<div class="container">
  <header class="section1">section1</header>
  <div class="container2">
    <div class="section2">section2</div>
    <div class="section3">section3</div>
  </div>
</div> 

**css**
.container {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.section1 {
  background-color: yellow;
  height: 50px;
}

.container2 {
  display: flex;
  flex: auto; 
  /* auto会伸缩，默认值initial会缩不伸 */
}

.section2 {
  background-color: red;
  width: 100px;
}

.section3 {
  background-color: green;
  flex: auto;
}