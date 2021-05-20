<template>
  <div class="home-button">
    <a href="#">
      <div>
        <p>Home</p>
        <img src="@/assets/Images/Icons/home-icon.png" alt="Home button" />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "HomeButton"
};
</script>

<style lang="scss" scoped>
a {
  margin: 0;

  div {
    display: inline-block;
    margin-top: 8vh;
    width: 250px;
    height: 70px;
    background-color: #405c6a;
    position: relative;
    border-radius: 5px;

    p {
      color: #ffffff;
      font-weight: bold;
      font-size: 30px;
      text-align: left;
      padding: 10px 20px;
    }

    img {
      position: absolute;
      top: 0;
      right: 0;
      margin: 15px;
      width: 16%;
    }

    &:hover {
      background-color: #423048;
      transform: scale(1.1);
      transition-duration: 50ms;
    }
  }
}

@media only screen and (min-device-width: 600px) and (max-device-width: 1280px) and (orientation: landscape) {
  a {
    div {
      width: 175px;
      height: 50px;

      p {
        font-size: 25px;
        padding: 7px 20px;
      }

      img {
        top: -4px;
      }
    }
  }
}
</style>
