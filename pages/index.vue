<template>
  <transition name="page">
    <div :class="{active: hover}" class="page--splash">
      <div class="content">
        <img
          src="https://static-mobile-cdn.rentcars.com/images/logos/rentcars-inverse.svg"
          class="logo"
          width="300"
          alt="rentcars.com"
        />
        <h1 class="title">
          <span>To-do List</span> BootCamp
        </h1>
        <div class="version">
          <span>02/11/2019</span> | <span>Version 1.0</span>
        </div>
        <nuxt-link
          to="/todolistcomponentization"
          @mouseover.native="hover = true"
          @mouseleave.native="hover = false"
          class="button--orange"
        >
          <span>Let's Rock?</span>
          <img class="icon" src="/icon-rock.png" alt="Let's Rock!" />
        </nuxt-link>
      </div>
    </div>
  </transition>
</template>

<script src="./index.js"></script>
<style src="./index.scss" lang="scss"></style>
