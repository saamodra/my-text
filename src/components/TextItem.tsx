import React from 'react'
import { FiCopy, FiList } from 'react-icons/fi'

type TextItemProps = {
  name: string
  value: string
}

function TextItem({ name, value }: TextItemProps): JSX.Element {
  const copyItem = (e: React.SyntheticEvent) => {
    e.stopPropagation()
    navigator.clipboard.writeText(value)
  }

  return (
    <div className="flex justify-between items-center w-full p-3 drop-shadow-sm border-solid border mb-2 text-lg">
      <div className="flex items-center">
        <FiList className="mr-4 text-indigo-500" />
        <div className="flex flex-col text-left">
          <h3 className="text-base">{name}</h3>
          <h4 className="text-sm font-normal">{value}</h4>
        </div>
      </div>

      <button
        type="button"
        onClick={copyItem}
        className="px-4"
      >
        <FiCopy />
      </button>
    </div>
  )
}

export default TextItem;
