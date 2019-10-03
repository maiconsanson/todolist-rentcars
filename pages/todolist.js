export default {
  transition: 'page',

  data() {
    return {
      hasTypedItem: false,
      items: [],
      itemTyped: '',
      noMoreItems: false,
      placeholder: {
        text: '',
        default: 'Type some funny tasks!',
        alert: 'No more items, please!'
      }
    }
  },

  watch: {
    // Verifica se o usuário digitou algo no campo
    itemTyped(item) {
      if (item) {
        this.hasTypedItem = true
      } else {
        this.hasTypedItem = false
      }
    }
  },

  mounted() {
    // Define o placeholder padrão
    this.placeholder.text = this.placeholder.default
  },

  methods: {
    // Adiciona o item ao array de objetos
    addItem() {
      // Limita o número máximo de itens adicionados e
      // proíbe itens vazios de serem criados
      if (this.items.length < 6 && this.hasTypedItem == true) {
        this.items.push({
          name: this.itemTyped,
          completed: false
        })
        this.itemTyped = ''
        this.$refs.itemTyped.focus()
      } else {
        this.noMoreItems = true
        this.itemTyped = ''
        this.$refs.itemTyped.blur()
        // Mostra a mensagem de alerta
        this.placeholder.text = this.placeholder.alert
      }
    },

    // Seta como true/false a propriedade 'completed' do objeto
    completeItem(item) {
      item.completed = !item.completed
    },

    // Remove o item do array de objetos
    removeItem(item) {
      this.items.splice(this.items.indexOf(item), 1)
      this.noMoreItems = false
      // Reseta a mensagem de alerta
      this.placeholder.text = this.placeholder.default
    },

    // Verifica se há items adicionados ao array de objetos
    // para animações condicionais
    hasItems() {
      return this.items.length > 0
    }
  }
}