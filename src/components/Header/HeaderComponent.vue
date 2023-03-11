<template>
    <div class="header">  
        <div>
          <router-link to="/"><LogoComponent /></router-link>
        </div>
        <div class="header__links">
          <router-link class="header__links-item" to="/">Наши продукты</router-link>
          <router-link class="header__links-item" to="/games">Игры</router-link>
          <router-link class="header__links-item" to="/">Донат</router-link>
          <router-link class="header__links-item" to="/">О нас</router-link>
          <router-link class="header__links-item" to="/">Партнёры</router-link>
          <router-link class="header__links-item" to="/">Сообщества</router-link>
          <router-link class="header__links-item support-link" to="/">Поддержка</router-link>
        </div>
        <div class="header__language">
          <select class="header__language-select">
            <option value="ru">RU</option>
            <option value="eng">ENG</option>
          </select>
        </div>
        <div class="header__auth">
            <router-link v-if="!isAuth"  class="header__links-item" to="/login">
              <button class="header__auth-btn">
                Войти
              </button>
            </router-link>
            <router-link v-else-if="isAuth" class="header__links-item" to="/">
              <button @click="logOut" class="header__auth-btn">
                Выйти
              </button>
            </router-link>
        </div>
        <div class="header__burger" @click="openBurgerMenu()">
          <div class="header__burger-bar1"></div>
          <div class="header__burger-bar2"></div>
          <div class="header__burger-bar3"></div>
        </div>
    </div>
</template>
  
<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import LogoComponent from "../UI/Logo/LogoComponent.vue";

export default defineComponent({
  name: 'HeaderComponent',
  setup() {
    const store = useStore();
    const isAuth = store.state.isAuth;
    console.log(isAuth);
    return {
      store,
      isAuth
    }
  },
  components: {
    LogoComponent,
  },
  methods: {
    logOut() {
      this.store.dispatch('logOut');
      window.location.reload();
    },  
    openBurgerMenu() {
      const burgerMenuBtn = document.getElementsByClassName("header__burger")[0];
      const changeClass = burgerMenuBtn.classList.toggle("change");
      return changeClass;
    }
  }
});
</script>

<style scoped lang="scss">
  .header {
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(34, 34, 40, 1);
    border: 1px solid rgba(63, 63, 74, 0.6);
    font-family: 'Arial';
    color: #FFFFFF;
  }
  .header__links {
    margin: 0 40px;
  }
  .header__links-item {
    margin: 0 10px;
    color: #FFFFFF;
    text-decoration: none;
    transition: 0.3s;
  }
  .header__links-item:hover {
    cursor: pointer;
    color: #a5a5a3;
    transition: 0.3s;
  }
  .header__language-select {
    background: transparent;
    border: 0;
    color: #FFFFFF;
    outline: 0;
  }
  .header__language-select > option {
    color: #000000;
  }
  .header__language-select:hover, .header__language-select > option:hover {
    cursor: pointer;
  }
  .header__auth {
    margin: 0 40px;
  }
  .header__auth-btn {
    background: #79109D;
    padding: 8px 20px;
    color: #FFFFFF;
    border: 0;
    border-radius: 10px;
    font-family: 'Arial';
    transition: 0.3s;
  }
  .header__auth-btn:hover {
    cursor: pointer;
    transform: scale(1.03);
    transition: 0.3s;
  }
  @media screen and (max-width: 1121px) {
    .header__links-item:nth-child(7) {
      display: none;
    }
  }
  @media screen and (max-width: 1030px) {
    .header__links {
      margin: 0 40px;
    }
    .header__auth {
      margin: 0 20px;
    }
  }
  @media screen and (max-width: 963px) {
    .header__links-item:nth-child(6), .header__links-item:nth-child(5) {
      display: none;
    }
  }
  @media screen and (max-width: 845px) {
    .header__links-item:nth-child(4) {
      display: none;
    }
  }
  @media screen and (max-width: 665px) {
    .header__links-item:nth-child(3) {
      display: none;
    }
    .header__links {
      margin: 0 20px;
    }
  }
  @media screen and (max-width: 591px) {
    .header__links-item:nth-child(2) {
      display: none;
    }
  }
  @media screen and (max-width: 497px) {
    .header__links-item:nth-child(1) {
      display: none;
    }
    .header {
      justify-content: space-around;
    }
  }
.header__burger {
  display: inline-block;
  cursor: pointer;
}
.header__burger-bar1, .header__burger-bar2, .header__burger-bar3 {
  width: 35px;
  height: 4px;
  background-color: #ffffff;
  margin: 6px 0;
  transition: 0.4s;
}
.change .header__burger-bar1 {
  transform: translate(0, 10px) rotate(-45deg);
}
.change .header__burger-bar2 {
  opacity: 0;
}
.change .header__burger-bar3 {
  transform: translate(0, -10px) rotate(45deg);
}
</style>
  