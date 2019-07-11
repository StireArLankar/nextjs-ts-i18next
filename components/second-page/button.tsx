import React from 'react'
import cn from 'classnames'

interface IProps {
  onClick: (e: React.MouseEvent) => any
  selected: boolean
  title: string
}

const Button = (props: IProps) => {
  const clname = cn({
    ['mr-1']: true,
    btn: true,
    ['btn-lg']: true,
    ['btn-outline-primary']: props.selected,
    ['btn-outline-secondary']: !props.selected
  })

  return (
    <button
      type='button'
      className={clname}
      onClick={props.onClick}
    >
      {props.title}
    </button>
  )
}

export default Button
