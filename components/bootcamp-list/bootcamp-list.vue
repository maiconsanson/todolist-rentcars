<template>
<ul>
  <li v-for="(item, key) in itemsList" :key="key">
    {{ item.text }}
    <span class="options">
      <button @click="actionItemList(item.id, 'delete')">
        -
      </button>
      <button @click="actionItemList(item.id, item.status == 1 ? '2' : '1')">
        v
      </button>
    </span>
  </li>
</ul>
</template>
<script src="./components.js" />
