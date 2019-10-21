import BootcampInput from '~/components/bootcamp-input/bootcamp-input.vue';
import BootcampList from '~/components/bootcamp-list/bootcamp-list.vue';

export default {
  data() {
    return {
      i: 1,
      itemsList: [],
      valueInput: '',
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
  methods: {
    addValueInput(value) {
      this.valueInput = value;
    },
    addItemList() {
      if (this.validateValueInput()) {
        this.itemsList.push({
          id: this.i++,
          text: this.valueInput,
          status: '1'
        });
      }
    },
    validateValueInput() {
      if (this.valueInput.length) {
        return true;
      } else {
        console.log('input com string vazia');
        return false;
      }
    },
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
    actionItemList(value) {
      let x = this.itemsList.filter(i => i.id == value[0])
      console.log(x);
    },
  },
}
