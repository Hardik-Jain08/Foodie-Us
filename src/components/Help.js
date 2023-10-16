import React from 'react'
import { FAQ } from '../utils/constants'
import Accordion from './Accordion'

const Help = () => {
  return (
      <div className='flex items-center flex-col'>
          <div className='w-2/3  text-center'>
              <h2 className='py-2 text-4xl bg-black font-bold text-white'>FAQ</h2>
              <Accordion />
              <Accordion />
              <Accordion />
              <Accordion />
              <Accordion />
              <Accordion />
              <Accordion />
              <Accordion />
              <Accordion />
              <Accordion />
              <Accordion />
          </div>
    </div>
  )
}

export default Help