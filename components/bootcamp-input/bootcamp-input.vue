<template>
  <div>
    <label class="title" for="input">
      {{ `${translations.label}` }}
    </label>
    <div class="input-box">
      <input
        id="input"
        :class="{'has-items': hasItems}"
        v-model="valueInput"
        :type="typeInput"
        :placeholder="txtPlaceholder"
        :autocomplete="autocomplete"
      >
      <!-- 
        :disabled="quando cai no warning"
        :class="{'has-items': hasItems(), 'alert': quando cai o warning}"
      -->
      <button
        v-show="showButtonInput"
        :class="{active: hasTypedItem()}"
        class="add-item"
      >
        <img class="icon" src="/icon-plus.svg" alt="Add item" />
      </button>
    </div>
  </div>
</template>

<script src="./component.js" />
<style src="./component.scss" lang="scss" scoped />