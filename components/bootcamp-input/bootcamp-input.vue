<template>
  <div>
    <label class="title" for="input">
      {{ `${translations.label}` }}
    </label>
    <div class="input-box">
      <input
        id="input"
        :class="{'has-items': hasItems, 'alert': getStateError()}"
        v-model="valueInput"
        :type="typeInput"
        :placeholder="txtPlaceholder"
        :autocomplete="autocomplete"
        :disabled="getStateError()"
      >
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

<script src="./bootcamp-input.js" />
<style src="./bootcamp-input.scss" lang="scss" scoped />