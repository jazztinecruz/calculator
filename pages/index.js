import Head from 'next/head'
import { useState } from "react";

const Home = () => {

  const [inputValue, setInputValue] = useState('')

  const buttonOneValue = () => {
    if (inputValue.length >= 1) {
      setInputValue(inputValue + '1')
    }

    else {
      setInputValue('1')
    }
  }

  const buttonTwoValue = () => {
    if (inputValue.length >= 1) {
      setInputValue(inputValue + '2')
    }

    else {
      setInputValue('2')
    }
  }

  const buttonThreeValue = () => {
    if (inputValue.length >= 1) {
      setInputValue(inputValue + '3')
    }

    else {
      setInputValue('3')
    }
  }

  const buttonFourValue = () => {
    if (inputValue.length >= 1) {
      setInputValue(inputValue + '4')
    }

    else {
      setInputValue('4')
    }
  }

  const buttonFiveValue = () => {
    if (inputValue.length >= 1) {
      setInputValue(inputValue + '5')
    }

    else {
      setInputValue('5')
    }
  }

  const buttonSixValue = () => {
    if (inputValue.length >= 1) {
      setInputValue(inputValue + '6')
    }

    else {
      setInputValue('6')
    }
  }

  const buttonSevenValue = () => {
    if (inputValue.length >= 1) {
      setInputValue(inputValue + '7')
    }

    else {
      setInputValue('7')
    }
  }

  const buttonEightValue = () => {
    if (inputValue.length >= 1) {
      setInputValue(inputValue + '8')
    }

    else {
      setInputValue('8')
    }
  }

  const buttonNineValue = () => {
    if (inputValue.length >= 1) {
      setInputValue(inputValue + '9')
    }

    else {
      setInputValue('9')
    }
  }

  const buttonZeroValue = () => {
    if (inputValue.length >= 1) {
      setInputValue(inputValue + '0')
    }

    else {
      setInputValue('0')
    }
  }

  const buttonDotValue = () => {
    if (inputValue.length >= 1) {
      setInputValue(inputValue + '.')
    }

    else {
      setInputValue('.')
    }
  }

  const buttonMinusValue = () => {
    setInputValue(inputValue + '-')
  }

  const buttonPlusValue = () => {
    setInputValue(inputValue + '+')
  }

  const buttonTimesValue = () => {
    setInputValue(inputValue + '*')
  }

  const buttonDivideValue = () => {
    setInputValue(inputValue + '/')
  }

  const equalBtn = () => {
    if (inputValue.includes('+')) {
      let arr = inputValue.split('+')
      let sum = 0

      for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes('.')) {
          sum += parseFloat(arr[i])
        }

        else {
          sum += parseInt(arr[i])
        }
      }
      setInputValue(sum)
    }

    else if (inputValue.includes('-')) {
      let arr = inputValue.split('-')
      let substract = 0

      if (arr[0].includes('.')) {
        substract = parseFloat(arr[0])
      }

      else {
        substract = parseInt(arr[0])
      }

      for (let i = 1; i < arr.length; i++) {
        if (arr[i].includes('.')) {
          substract -= parseFloat(arr[i])
        }
        else {
          substract -= parseInt(arr[i])
        }
      }
      setInputValue(substract)
    }

    else if (inputValue.includes('*')) {
      let arr = inputValue.split('*')
      let times = 1

      for (let i = 0; i < arr.length; i++) {
        if (arr[i].includes('.')) {
          times *= parseFloat(arr[i])
        }
        else {
          times *= parseInt(arr[i])
        }
      }

      setInputValue(times)
    }

    else if (inputValue.includes('/')) {
      let arr = inputValue.split('/')
      let quotient = 0;

      if (arr[0] || arr[1]) {
        quotient = parseFloat(arr[0]) / parseFloat(arr[1])
      }

      else {
        quotient = parseInt(arr[0]) / parseInt(arr[1])
      }

      for (let i = 2; i < arr.length; i++) {
        if (arr[i].includes('.')) {
          quotient /= parseFloat(arr[i])
        }
        else {
          quotient /= parseInt(arr[i])
        }
      }

      setInputValue(quotient)
    }

  }

  const buttonDelValue = () => {
    setInputValue(inputValue.substring(0, inputValue.length - 1))
  }

  const buttonDeleteAllValue = () => {
    setInputValue('')
  }

  return (
    <div className='min-h-[500px] grid grid-flow-row gap-3 rounded-lg'>

      <Head>
        <title>Calculator | Jazztine</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <input type="text" className='w-full border-gray-400 border-2 rounded-lg outline-none mb-6 text-2xl pl-4' value={inputValue} />

      <div className='grid grid-rows-4 grid-cols-4 gap-2'>
        <button className='rounded-md bg-gray-700 text-white font-semibold' onClick={buttonDelValue}>DEL</button>
        <button className='rounded-md bg-gray-700 text-white font-semibold' onClick={buttonDeleteAllValue}>AC</button>
        <button className='rounded-md bg-gray-700 text-white font-semibold' onClick={buttonDivideValue}>/</button>
        <button className='rounded-md bg-gray-700 text-white font-semibold' onClick={buttonPlusValue}>+</button>
        <button className='rounded-md bg-gray-700 text-white font-semibold' onClick={buttonNineValue}>9</button>
        <button className='rounded-md bg-gray-700 text-white font-semibold' onClick={buttonEightValue}>8</button>
        <button className='rounded-md bg-gray-700 text-white font-semibold' onClick={buttonSevenValue}>7</button>
        <button className='rounded-md bg-gray-700 text-white font-semibold' onClick={buttonTimesValue}>*</button>
        <button className='rounded-md bg-gray-700 text-white font-semibold' onClick={buttonSixValue}>6</button>
        <button className='rounded-md bg-gray-700 text-white font-semibold' onClick={buttonFiveValue}>5</button>
        <button className='rounded-md bg-gray-700 text-white font-semibold' onClick={buttonFourValue}>4</button>
        <button className='rounded-md bg-gray-700 text-white font-semibold' onClick={buttonMinusValue}>-</button>
        <button className='rounded-md bg-gray-700 text-white font-semibold' onClick={buttonThreeValue}>3</button>
        <button className='rounded-md bg-gray-700 text-white font-semibold' onClick={buttonTwoValue}>2</button>
        <button className='rounded-md bg-gray-700 text-white font-semibold' onClick={buttonOneValue}>1</button>
        <button className='row-span-2 py-3 rounded-md bg-red-500' onClick={equalBtn}>=</button>
        <button className='col-span-2 py-3 rounded-md bg-gray-700 text-white font-semibold' onClick={buttonZeroValue}>0</button>
        <button className='rounded-md bg-gray-700 text-white font-semibold' onClick={buttonDotValue}>.</button>


      </div>
    </div>
  )
}

export default Home;