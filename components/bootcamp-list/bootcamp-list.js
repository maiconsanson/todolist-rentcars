export default {
  name: 'bootcamp-list',
  props: {
    itemsList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    actionItemList(action, id, status) {
      // this.actionButton.action = action
      // this.actionButton.id = id
      // this.actionButton.status = status
      this.actionButton = {
        action,
        id,
        status
      }
      this.$emit('actionItemList', this.actionButton)
    },
  }
}
