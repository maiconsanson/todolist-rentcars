import BootcampInput from '~/components/bootcamp-input/bootcamp-input.vue';
import BootcampList from '~/components/bootcamp-list/bootcamp-list.vue';
import { ENETDOWN } from 'constants';

export default {
  data() {
    return {
      i: 1,
      stateInput: 'default',
      itemsList: [],
      limiteItemsList: 6,
      valueInput: '',
      indexMessageError: '',
      statusItemList: {
        '1': 'checked',
        '2': 'unchecked',
      },
    }
  },
  components: {
    BootcampInput,
    BootcampList,
  },
  watch:{
    itemsList: {
      handler: function(newValue) {
        if (this.itemsList.length < this.limiteItemsList) {
          this.stateInput = 'default'
        }
      },
      deep: true
    }
  },
  methods: {
    addValueInput(value) {
      this.valueInput = value;
    },
    addItemList(event) {
      if (this.validateInputValue()) {
        this.itemsList.push({
          id: this.i++,
          text: this.valueInput,
          status: '1'
        });
      }
      setTimeout(() => {
        event.target.querySelector('input').form.reset()
      }, 10)
    },
    validateInputValue() {
      if (this.valueInput.replace(/ /g, '').length) {
        if (this.itemsList.length >= this.limiteItemsList) {
          this.errorLimiteItemsList()
          return false
        }
        return true
      }
    },
    errorLimiteItemsList() {
      this.stateInput = 'warning'
      this.indexMessageError = 'errorWarning'
    },
    actionItemList(value) {
      if (value.action == 'delete') {
        this.deleteItemList(value)
      }
      if (value.action == 'changeState') {
        this.changeStateItemList(value)
      }
    },
    deleteItemList(value) {
      this.itemsList.map((i, k) => {
        if (i.id == value.id) {
          this.itemsList.splice(k, 1)
        }
      })
    },
    changeStateItemList(value) {
      let itemsList = this.itemsList.find((i) => {
        return i.id == value.id
      })
      itemsList.status = value.status
    },
    checkItems() {
      return this.itemsList.length > 0
    }
  },
}
