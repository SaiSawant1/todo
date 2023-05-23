import React from 'react'
import { Todo } from '../components/Todo'

const MainPage = () => {
  return (
    <div className='w-[100vw] flex justify-center dark:bg-black  relative h-[100vh] pt-[80px]'>
        <div className='header-image'></div>
        <Todo/>
    </div>
  )
}

export default MainPage