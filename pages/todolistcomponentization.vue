<template>
  <div class="page--todolist">
    <nuxt-link to="/" class="back-link">Back to Beginning</nuxt-link>
    <div :class="{active: itemsList.length > 0}" class="content">
      <form
        id="todolistbootcamp"
        @submit.prevent="addItemList"
      >
        <bootcamp-input
          :state="stateInput"
          :errorMessageBehavior="true"
          :hasItems="checkItems()"
          :indexMessageError="indexMessageError"
          :createButtton="true"
          :translations="{
            label: 'What will you do?',
            placeholder: 'Type some fanny tasks!',
            errorWarning: 'No more items, please!',
            errorAlert: 'errorAlert',
          }"
          @valueInput="addValueInput"
        />
      </form>
      <bootcamp-list
        v-if="itemsList.length"
        :itemsList="itemsList"
        :statusItemList="statusItemList"
        @actionItemList="actionItemList"
      />
    </div>
  </div>
</template>

<script src="./todolistcomponentization.js"></script>
<style src="./todolistcomponentization.scss" lang="scss"></style>