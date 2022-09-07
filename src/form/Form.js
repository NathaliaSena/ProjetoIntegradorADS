import React from 'react'
import Input from './Input'
import InputCheck from './InputCheck'

const Form = () => {
  return (
    <form>
        <p>
          <label htmlFor='nome'>Nome: </label>
          <Input/>
      </p>
        <p>
          <label htmlFor='mail'>Email: </label>
          <Input/>
        </p>
        <div>
          <p>Qual as suas habilidades?</p>
          <label htmlFor='SQL'>SQL</label>
          <InputCheck/>
          <label htmlFor='Java'>Java</label>
          <InputCheck/>
          <label htmlFor='React'>React</label>
          <InputCheck/>

        </div>
    </form>
  )
}

export default Form