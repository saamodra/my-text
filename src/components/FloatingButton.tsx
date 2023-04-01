/* eslint-disable react/require-default-props */
import React from 'react'
import { IconType } from 'react-icons'
import { FiPlus } from 'react-icons/fi'

type FloatingButtonProps = {
  onClickHandler: () => void
  icon?: IconType
}

function FloatingButton({ onClickHandler, icon: Icon = FiPlus }: FloatingButtonProps): JSX.Element {
  return (
    <button
      type="button"
      onClick={onClickHandler}
      className="p-3 rounded-full bg-primary text-white fixed bottom-5 right-5"
    >
      <Icon />
    </button>
  )
}

export default FloatingButton;
