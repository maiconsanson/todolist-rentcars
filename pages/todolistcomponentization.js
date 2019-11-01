import BootcampInput from '~/components/bootcamp-input/bootcamp-input.vue';
import BootcampList from '~/components/bootcamp-list/bootcamp-list.vue';
import { ENETDOWN } from 'constants';

export default {
  data() {
    return {
      i: 1,
      itemsList: [],
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
    },
  },
  methods: {
    addItemList(value) {
      this.itemsList.push({
        id: this.i++,
        text: value,
        status: '1'
      });
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
  },
}
