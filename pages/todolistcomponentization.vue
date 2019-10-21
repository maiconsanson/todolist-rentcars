<template>
  <div>
    <form
      id="todolist"
      @submit.prevent="addItemList()"
    >
      <bootcamp-input
        state="default"
        autocomplete="on"
        :createButtton="true"
        :translations="{
          label: 'What will you do?',
          placeholder: 'Type some fanny tasks!',
          errorWarning: 'errorWarning',
          errorAlert: 'errorAlert',
        }"
        @valueInput="addValueInput"
      />
    </form>
    <!-- :itemsList="itemsList" -->
    <bootcamp-list
      v-if="itemsList.length"
      :itemsList="itemsList"
      :statusItemList="statusItemList"
      @actionItemList="actionItemList"
    />
  </div>
</template>
<script src="./todolistcomponentization.js"></script>
