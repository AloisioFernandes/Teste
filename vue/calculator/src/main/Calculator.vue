<template>
  <div class="calculator">
    <Display value="1000" />
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
  components: { Button, Display }, //exportando componentes para serem utilizados no template
  methods: {
    clearMemory() {
      
    },
    setOperation(operation) {
      
    },
    addDigit(n) {
      
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