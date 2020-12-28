import React from 'react'

import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

export default function Calculator() {
  function clearMemory() {
    console.log('limpar')
  }

  function setOperation(operation){
    console.log(operation)
  }

  function addDigit(n){
    console.log(n)
  }

  return (
    <div className="calculator">
      <Display value={100} />
      <Button label="AC" click={clearMemory} triple />
      <Button label="/" click={(op) => setOperation(op)} operation />
      <Button label="7" click={(n) => addDigit(n)} />
      <Button label="8" click={(n) => addDigit(n)} />
      <Button label="9" click={(n) => addDigit(n)} />
      <Button label="*" click={(op) => setOperation(op)} operation />
      <Button label="4" click={(n) => addDigit(n)} />
      <Button label="5" click={(n) => addDigit(n)} />
      <Button label="6" click={(n) => addDigit(n)} />
      <Button label="-" click={(op) => setOperation(op)} operation />
      <Button label="1" click={(n) => addDigit(n)} />
      <Button label="2" click={(n) => addDigit(n)} />
      <Button label="3" click={(n) => addDigit(n)} />
      <Button label="+" click={(op) => setOperation(op)} operation />
      <Button label="0" click={(n) => addDigit(n)} double />
      <Button label="." click={(n) => addDigit(n)} />
      <Button label="=" click={(op) => setOperation(op)} operation />
    </div>
  )
}