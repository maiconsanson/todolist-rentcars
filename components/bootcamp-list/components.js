export default {
  name: 'bootcamp-list',
  props: {
    itemsList: {
      type: Array,
      required: true,
    },
  },
  methods: {
    actionItemList(id, action) {
      this.$emit('actionItemList', [id, action])
    },
  }
}
