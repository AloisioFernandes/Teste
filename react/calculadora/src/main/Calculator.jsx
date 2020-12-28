import React, { useState } from 'react'

import './Calculator.css'

import Button from '../components/Button'
import Display from '../components/Display'

export default function Calculator() {
  const [displayValue, setDisplayValue] = useState('0')
  const [clearDisplay, setClearDisplay] = useState(false)
  const [operation, setOperation] = useState(null)
  const [values, setValues] = useState([0, 0])
  const [current, setCurrent] = useState(0)

  function clearMemory() {
    setDisplayValue('0')
    setClearDisplay(false)
    setOperation(null)
    setValues([0, 0])
    setCurrent(0)
  }

  function doOperation(oper){
    if(current === 0) {
      setOperation(oper)
      setCurrent(1)
      setClearDisplay(true)
    } else { //se mais de uma operação precisar ser realizada antes de apertar =
      const equals = oper === '='
      const currentOperation = operation

      let vals = [...values]
      try {
        vals[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
      } catch(e) {
        vals[0] = values[0]
      }
      
      vals[1] = 0

      setDisplayValue(vals[0])
      setOperation(equals ? null : oper)
      setCurrent(equals ? 0 : 1)
      setClearDisplay(!equals)
      setValues(vals)
    }
  }

  function addDigit(n){
    if(n === '.' && displayValue.includes('.')) {
      return //ignora tentativa de adicionar ponto se número do display já tiver um ponto
    }

    const clrDisplay = displayValue === '0' || clearDisplay
    const crntValue = clrDisplay ? '' : displayValue
    const dsplyValue = crntValue + n
    setDisplayValue(dsplyValue)
    setClearDisplay(false)

    if(n !== '.') {
      const i = current
      const newValue = parseFloat(dsplyValue)
      let vals = [...values]
      vals[i] = newValue
      setValues(vals)
      console.log(values)
    }
  }

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <Button label="AC" click={clearMemory} triple />
      <Button label="/" click={(op) => doOperation(op)} operation />
      <Button label="7" click={(n) => addDigit(n)} />
      <Button label="8" click={(n) => addDigit(n)} />
      <Button label="9" click={(n) => addDigit(n)} />
      <Button label="*" click={(op) => doOperation(op)} operation />
      <Button label="4" click={(n) => addDigit(n)} />
      <Button label="5" click={(n) => addDigit(n)} />
      <Button label="6" click={(n) => addDigit(n)} />
      <Button label="-" click={(op) => doOperation(op)} operation />
      <Button label="1" click={(n) => addDigit(n)} />
      <Button label="2" click={(n) => addDigit(n)} />
      <Button label="3" click={(n) => addDigit(n)} />
      <Button label="+" click={(op) => doOperation(op)} operation />
      <Button label="0" click={(n) => addDigit(n)} double />
      <Button label="." click={(n) => addDigit(n)} />
      <Button label="=" click={(op) => doOperation(op)} operation />
    </div>
  )
}