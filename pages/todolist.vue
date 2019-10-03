<template>
  <div class="page--todolist">
    <nuxt-link to="/" class="back-link">Back to Beginning</nuxt-link>
    <div :class="{active: hasItems()}" class="content">
      <h1 class="title">
        What will you do?
      </h1>
      <!--
        ////////////////////////
        SEARCH BOX
        ////////////////////////
       -->
      <div class="search-box">
        <form @submit.prevent="addItem()">
          <input
            v-model="itemTyped"
            :placeholder="placeholder.text"
            :disabled="noMoreItems"
            :class="{'has-items': hasItems(), 'alert': noMoreItems}"
            ref="itemTyped"
            type="text"
            autocomplete="off"
          />
          <button
            @click.prevent="addItem()"
            :class="{active: hasTypedItem === !null}"
            class="add-item"
          >
            <img class="icon" src="/icon-plus.svg" alt="Add item" />
          </button>
        </form>
      </div>
      <!-- 
        ////////////////////////
        TO-DO LIST
        ////////////////////////
       -->
      <ul v-show="hasItems()" class="list">
        <transition-group name="list-complete">
          <li
            v-for="item in items"
            v-bind:key="item.name"
            :class="{completed: item.completed}"
          >
            {{ item.name }}
            <span class="options">
              <img
                class="icon"
                src="/icon-check.svg"
                alt="Complete task"
                @click="completeItem(item)"
              />
              <img
                class="icon"
                src="/icon-delete.svg"
                alt="Delete task"
                @click="removeItem(item)"
              />
            </span>
          </li>
        </transition-group>
        <!-- <li v-if="noMoreItems" class="alert">No more items, please!</li> -->
      </ul>
    </div>
  </div>
</template>

<script src="./todolist.js"></script>
<style src="./todolist.scss" lang="scss" scoped></style>