<script>

</script>

<template>
  <div class="clavier-global-conteneur">
    <div class="clavier-first-content">
      <div class="number-input">
        <p></p>
      </div>
      <div class="name-contact-find">
        <p></p>
      </div>
    </div>
    <div class="clavier-second-content">
      <div class="number-inputed">
        <p>1</p>
      </div>
      <div class="number-inputed">
        <p>2</p>
        <p>abc</p>
      </div>
      <div class="number-inputed">
        <p>3</p>
        <p>def</p>
      </div>
      <div class="number-inputed">
        <p>4</p>
        <p>ghi</p>
      </div>
      <div class="number-inputed">
        <p>5</p>
        <p>jkl</p>
      </div>
      <div class="number-inputed">
        <p>6</p>
        <p>mno</p>
      </div>
      <div class="number-inputed">
        <p>7</p>
        <p>pqrs</p>
      </div>
      <div class="number-inputed">
        <p>8</p>
        <p>tuv</p>
      </div>
      <div class="number-inputed">
        <p>9</p>
        <p>wxyz</p>
      </div>
      <div class="number-inputed">
        <p>*</p>
      </div>
      <div class="number-inputed">
        <p>0</p>
      </div>
      <div class="number-inputed">
        <p>#</p>
      </div>
      <img src="../assets/appel-icon.png" alt="appel icon">
    </div>
  </div>
</template>

<style scoped>
  .clavier-second-content{
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    justify-items: center;
  }
  .number-inputed{
    width: 50%;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    background-color: grey;
    justify-items: center;
  }
  .number-inputed p{
    font-size: 24px;
    font-weight: bold;
    color: white;
  }
  .clavier-second-content img{
    width: 10%;
    grid-column: 1/-1;
  }
</style>
