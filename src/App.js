import React, {useState} from 'react'
import './App.scss'

import classNames from 'classnames';

import {Paper, Button} from '@material-ui/core'


export default function App() {
  const [hover, setHover] = useState(false)
  const [number, setNumber] = useState('0')
  const [number2, setNumber2] = useState('0')
  const [operator, setOperator] = useState(null)
  const [showNumber, setShowNumber] = useState(number)

  const handleHover = () => setHover(!hover)
  const handleAc = () => {
    setNumber('0')
    setNumber2('0')
    setShowNumber('0')
  }
  const handlePrefix = () => {
    const negative = (number - (2 * number)).toString()
    setShowNumber(negative)
    operator === null ? setNumber(negative) : setNumber2(negative)
  }
  const handleOperator = (e) => setOperator(e.currentTarget.value)
  const handlePercent = () => {
    setShowNumber((parseFloat(number) / 100).toString())
    setNumber((parseFloat(number) / 100).toString())
    setNumber2('0')
    setOperator(null)
  }
  const handleNumberCLick = (e) => {
    const value = e.currentTarget.value
    console.log(number.length, number2.length)
    if (operator === null) {
      if (number.charAt(0) === '0') {
        setNumber(number.substring(1) + value)
        setShowNumber(number.substring(1) + value)
      } else {
        setNumber(number + value)
        setShowNumber(number + value)
      }
    } else {
      if (number2.charAt(0) === '0') {
        setNumber2(number2.substring(1) + value)
        setShowNumber(number2.substring(1) + value)
      } else {
        setNumber2(number2 + value)
        setShowNumber(number2 + value)
      }
    }
    if(number.length > 12 || number2.length > 12) {
      setNumber('0')
      setNumber2('0')
      setShowNumber('0')
    }
  }
  const calculation = () => {
    if (operator === '+') {
      setShowNumber((parseFloat(number) + parseFloat(number2)).toString())
      setNumber((parseFloat(number) + parseFloat(number2)).toString())
      setNumber2('0')
      setOperator(null)
    } else if (operator === '-') {
      setShowNumber((parseFloat(number) - parseFloat(number2)).toString())
      setNumber((parseFloat(number) - parseFloat(number2)).toString())
      setNumber2('0')
      setOperator(null)
    } else if (operator === '*') {
      setShowNumber((parseFloat(number) * parseFloat(number2)).toString())
      setNumber((parseFloat(number) * parseFloat(number2)).toString())
      setNumber2('0')
      setOperator(null)
    } else if (operator === '÷') {
      setShowNumber((parseFloat(number) / parseFloat(number2)).toString())
      setNumber((parseFloat(number) / parseFloat(number2)).toString())
      setNumber2('0')
      setOperator(null)
    }
  }

  console.log({number, number2, showNumber})

  return (
    <div className="page" id='page'>
      <Paper className='calc'>
        <div
          className='control-btn-container'
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <Button
            className='dot'
          >
            {hover ? 'x' : ''}
          </Button>
          <Button className='dot'>
            {hover ? '-' : ''}

          </Button>
          <Button className='dot'>
            {hover ? '+' : ''}

          </Button>
        </div>
        <div
          className='top-container'
          style={{
            fontSize:
              showNumber.length > 8
                ? '2rem'
                : '3rem'
          }}
        >
          {showNumber}
        </div>
        <input autoFocus style={{display: "none"}}/>
        <div className='number-container'>
          <Button className='top-row' onClick={handleAc}>
            {number.charAt(0) === '0' ? 'AC' : 'C'}
          </Button>
          <Button
            className='top-row'
            onClick={handlePrefix}
          >
            +/-
          </Button>
          <Button
            className='top-row'
            value='%'
            onClick={handlePercent}
          >
            %
          </Button>
          <Button
            className='number-btn'
            value='÷'
            onClick={handleOperator}
          >
            ÷
          </Button>
        </div>
        <div className='number-container'>
          <Button
            className='number-btn'
            value='1'
            onClick={handleNumberCLick}
          >
            1
          </Button>
          <Button
            className='number-btn'
            value='2'
            onClick={handleNumberCLick}
          >
            2
          </Button>
          <Button
            className='number-btn'
            value='3'
            onClick={handleNumberCLick}
          >
            3
          </Button>
          <Button
            className='number-btn'
            value='*'
            onClick={handleOperator}
          >
            ×
          </Button>
        </div>
        <div className='number-container'>
          <Button
            className='number-btn'
            value='4'
            onClick={handleNumberCLick}
          >
            4
          </Button>
          <Button
            className='number-btn'
            value='5'
            onClick={handleNumberCLick}
          >
            5
          </Button>
          <Button
            className='number-btn'
            value='6'
            onClick={handleNumberCLick}
          >
            6
          </Button>
          <Button
            className='number-btn'
            value='-'
            onClick={handleOperator}
          >
            -
          </Button>
        </div>
        <div className='number-container'>
          <Button
            className='number-btn'
            value='7'
            onClick={handleNumberCLick}
          >
            7
          </Button>
          <Button
            className='number-btn'
            value='8'
            onClick={handleNumberCLick}
          >
            8
          </Button>
          <Button
            className='number-btn'
            value='9'
            onClick={handleNumberCLick}
          >
            9
          </Button>
          <Button
            className='number-btn'
            value='+'
            onClick={handleOperator}
          >
            +
          </Button>
        </div>
        <div className='number-container'>
          <Button
            className={classNames('number-btn', 'zero')}
            value='0'
            onClick={handleNumberCLick}
          >
            0
          </Button>
          <Button
            className='number-btn'
            value='.'
            onClick={handleNumberCLick}
          >
            .
          </Button>
          <Button
            className='number-btn'
            value='='
            onClick={calculation}
          >
            =
          </Button>
        </div>
      </Paper>
    </div>
  )
}
