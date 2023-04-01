import React from 'react'

type BottomSheetProps = {
  show: boolean
  toggler: (state: boolean) => void
  children: string | JSX.Element | JSX.Element[]
}

function BottomSheet({ show, toggler, children }: BottomSheetProps): JSX.Element | null {
  if (!show) return null;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => toggler(!show)}
      onKeyDown={() => toggler(!show)}
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
