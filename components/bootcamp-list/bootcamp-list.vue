<template>
  <ul class="list">
    <transition-group name="list-complete">
      <li
        v-for="item in itemsList"
        v-bind:key="item.text"
        :class="{'list__item--completed': item.status == '2'}"
        class="list__item"
      >
        {{ `${item.text}` }}
        <span class="options">
          <button
            @click="actionItemList('delete', item.id, item.status)"
            class="remove-item"
          >
            <img
              class="icon"
              src="/icon-delete.svg"
              alt="Delete task"
            />
          </button>
          <button
            @click="actionItemList('changeState', item.id, item.status == 1 ? '2' : '1')"
            class="complete-item"
          >
            <img
              class="icon"
              src="/icon-check.svg"
              alt="Complete task"
            />
          </button>
        </span>
      </li>
    </transition-group>
  </ul>
</template>

<script src="./component.js" />
<style src="./component.scss" lang="scss" scoped />
