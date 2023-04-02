import React, { useContext } from 'react'
import { HIDE_MODAL } from 'redux/action'
import { AppContext } from 'redux/context'

type BottomSheetProps = {
  show: boolean
  children: string | JSX.Element | JSX.Element[]
}

function BottomSheet({ show, children }: BottomSheetProps): JSX.Element | null {
  const { dispatch } = useContext(AppContext)
  if (!show) return null;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => dispatch({ type: HIDE_MODAL })}
      onKeyDown={() => dispatch({ type: HIDE_MODAL })}
      className="h-full fixed bg-zinc-900/[.45] bg-blend-overlay z-10 top-0 left-0 w-full"
    >
      <div
        role="button"
        tabIndex={0}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        className="bg-white fixed bottom-0 w-full p-4 rounded-t-lg"
      >
        {children}
      </div>
    </div>
  )
}

export default BottomSheet;
