<template>
  <div>
    <label>{{ `${translations.label}` }}</label>
    <input
      v-model="valueInput"
      :type="typeInput"
      :placeholder="txtPlaceholder"
      :autocomplete="autocomplete"
    >
    <button
      v-if="showButtonInput"
    >
      +
    </button>
    <span v-if="getStateError() && !errorMessageBehavior" >
      {{ errorMessage }}
    </span>
  </div>
</template>
<script src="./components.js" />
