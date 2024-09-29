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

const FormInput = ({className, formName, iconClass, inputType, name, placeHolder}) => {
  return (
  <div className={className}>
    <FormCaption 
      formName={formName}
      iconClass={iconClass}
    />
    <input 
      type={inputType}
      name={name}
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
        name="message"
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
  <form action="https://api.web3forms.com/submit" method="POST" class="contact-form">
    <input type="hidden" name="access_key" value="f08c8bb9-59cd-44dc-a10a-824786948259"></input>

    <div className='form-to-submit'>

      <div className='form-user-details'>
        <FormInput
          className={'form-name'}
          formName={"Nome"}
          iconClass={"fa-solid fa-user"}
          inputType={"text"}
          name={"name"}
          placeHolder={"Nome e Cognome"}
        />
        <FormInput
          className={'form-email'}
          formName={"E-mail"}
          iconClass={"fa-solid fa-envelope"}
          inputType={"email"}
          name={"email"}
          placeHolder={"La tua email"}
        />
        <FormInput
          className={'form-phone'}
          formName={"Cellulare"}
          iconClass={"fa-solid fa-phone"}
          inputType={"tel"}
          name={"tel"}
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