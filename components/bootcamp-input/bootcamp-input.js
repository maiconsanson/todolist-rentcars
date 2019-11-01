export default {
  name: 'bootcamp-input',
  data() {
    return {
      valueInput: '',
      state: 'default',
      txtPlaceholder: 'Type some fanny tasks!',
      errorMessage: 'No more items, please!',
    }
  },
  props: {
    itemsList: {
      type: Object,
      required: true,
    },
  },
  watch: {
    itemsList(newValue) {
      this.state = newValue.length >= 6 ? 'warning' : 'default'
    },
  },
  computed: {
    getMessagePlaceholder() {
      return this.state == 'default' ? this.txtPlaceholder : this.errorMessage
    },
  },
  methods: {
    addItemList() {
      if (this.valueInput.replace(/ /g, '').length) {
        this.$emit('addItemList', this.valueInput)
        this.valueInput = ''
      }
    },
    validateInputValue() {
      return this.valueInput.replace(/ /g, '').length == 0 && this.state == 'warning'
    },
  },
}
