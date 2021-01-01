<template>
  <div class="calculator">
    <Display :value="displayValue" />
    <Button label="AC" triple @onClickCalc="clearMemory" />
    <Button label="/" operation @onClickCalc="setOperation" />
    <Button label="7" @onClickCalc="addDigit" />
    <Button label="8" @onClickCalc="addDigit" />
    <Button label="9" @onClickCalc="addDigit" />
    <Button label="*" operation @onClickCalc="setOperation" />
    <Button label="4" @onClickCalc="addDigit" />
    <Button label="5" @onClickCalc="addDigit" />
    <Button label="6" @onClickCalc="addDigit" />
    <Button label="-" operation @onClickCalc="setOperation" />
    <Button label="1" @onClickCalc="addDigit" />
    <Button label="2" @onClickCalc="addDigit" />
    <Button label="3" @onClickCalc="addDigit" />
    <Button label="+" operation @onClickCalc="setOperation" />
    <Button label="0" double @onClickCalc="addDigit" />
    <Button label="." @onClickCalc="addDigit" />
    <Button label="=" operation @onClickCalc="setOperation" />
  </div>
</template>

<script>
import Button from '../components/Button'
import Display from '../components/Display'

export default {
  data: function() {
    return {
      displayValue: "0",
      clearDisplay: false,
      operation: null,
      values: [0, 0],
      current: 0
    }
  },
  components: { Button, Display }, //exportando componentes para serem utilizados no template
  methods: {
    clearMemory() {
      Object.assign(this.$data, this.$options.data()) //faz objeto voltar ao estado inicial
    },
    setOperation(operation) {
      if (this.current === 0) {
        this.operation = operation
        this.current = 1
        this.clearDisplay = true
      } else {
        const equals = operation === "="
        const currentOperation = this.operation

        try {
          this.values[0] = eval(
            `${this.values[0]} ${currentOperation} ${this.values[1]}`
          )
        } catch(e) {
          this.$emit('onError', e)
        }

        this.values[1] = 0
        this.displayValue = this.values[0]
        this.operation = equals ? null : operation
        this.current = equals ? 0 : 1
        this.clearDisplay = !equals
      }
    },
    addDigit(n) {
      if(n === "." && this.displayValue.includes(".")) {
        return 
      }

      const clearDisplay = this.displayValue === "0" || this.clearDisplay
      const currentValue = clearDisplay ? "" : this.displayValue
      const displayValue = currentValue + n

      this.displayValue = displayValue
      this.clearDisplay = false
      this.values[this.current] = displayValue
    }
  }
}
</script>

<style>
.calculator {
  height: 320px;
  width: 235px;
  border-radius: 5px;
  overflow: hidden;

  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: 1fr repeat(5, 48px);
}
</style>