import React from 'react'
import './contactform.css'

const FormCaption = ({formName, iconClass}) => {
  return (
  <div className="form-caption">
    <h3>{formName}</h3>
    <i class={iconClass}></i>
  </div>
  )
}

const FormInput = ({className, formName, iconClass, inputType, placeHolder}) => {
  return (
  <div className={className}>
    <FormCaption 
      formName={formName}
      iconClass={iconClass}
    />
    <input 
      type={inputType}
      placeholder={placeHolder}
      required
    />
  </div>
  )
}

const FormMessage = () => {
  return (
    <div className="form-message">
      <FormCaption
        formName={"Messaggio"}
        iconClass={"fa-solid fa-message"}
      />
      <textarea 
        type="text"
        placeholder='Scrivi qui il tuo messaggio'
        required
      />
    </div>
  )
}

const FormSubmit = () => {
  return (
  <div className="form-submit">
    <button type="submit">
      <i class="fa-solid fa-paper-plane"></i> Submit
    </button>
  </div>
  )
}

const Contactform = () => {
  return (
  <form>
    <div className='form-to-submit'>
      <div className='form-user-details'>
        <FormInput
          className={'form-name'}
          formName={"Nome"}
          iconClass={"fa-solid fa-user"}
          inputType={"text"}
          placeHolder={"Nome e Cognome"}
        />
        <FormInput
          className={'form-email'}
          formName={"E-mail"}
          iconClass={"fa-solid fa-envelope"}
          inputType={"email"}
          placeHolder={"La tua email"}
        />
        <FormInput
          className={'form-phone'}
          formName={"Cellulare"}
          iconClass={"fa-solid fa-phone"}
          inputType={"tel"}
          placeHolder={'123 4567 899'}
        />
      </div>
      <FormMessage />
    </div>
    <FormSubmit />
  </form>
  )
}

export default Contactform