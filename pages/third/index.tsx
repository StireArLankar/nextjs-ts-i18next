import React, { Fragment, useContext, useState } from 'react'
import AppContext, { IContext } from 'Src/context/app-context'
import { withTranslation, WithTranslation } from 'Src/i18n'

const Third = (props: WithTranslation) => {
  const [name, setName] = useState<string>('')
  const ctx = useContext<IContext>(AppContext)

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setName(value)
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    ctx.updateState({ name })
    setName('')
  }

  return (
    <Fragment>
      <div>
        <h1>{props.t('third')}</h1>
        <p>{props.t('your-name')} : {ctx.name}</p>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <label htmlFor='name'>{props.t('name')}</label>
            <input
              type='text'
              className='form-control'
              id='name'
              placeholder={props.t('name-placeholder')}
              autoComplete='off'
              onChange={onInputChange}
              value={name}
            />
            <small className='form-text text-muted'>{props.t('name-small')}</small>
          </div>
          <button type='submit' className='btn btn-primary'>{props.t('submit')}</button>
        </form>
      </div>
    </Fragment>
  )
}

export default withTranslation()(Third)
