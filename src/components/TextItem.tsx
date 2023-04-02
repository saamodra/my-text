import React from 'react'
import toast from 'react-hot-toast'
import { FiCopy, FiTrash2 } from 'react-icons/fi'
import * as FetchAdapter from 'lib/fetchAdapter'

type TextItemProps = {
  id: string
  name: string
  value: string
  refreshData: () => void
}

function TextItem({
  id, name, value, refreshData,
}: TextItemProps): JSX.Element {
  const deleteText = async () => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Are you sure?')) {
      const apiUrl = `${process.env.REACT_APP_API_HOST}/api/texts/${id}`
      await FetchAdapter.destroy(apiUrl)

      refreshData()
      toast.success('Text deleted!')
    }
  }

  const copyItem = (e: React.SyntheticEvent) => {
    e.stopPropagation()
    navigator.clipboard.writeText(value)
    toast('Text copied!')
  }

  return (
    <div className="flex justify-between items-center w-full p-3 drop-shadow-sm border-solid border mb-2 text-lg">
      <div className="flex items-center">
        <button type="button" onClick={deleteText}>
          <FiTrash2 className="mr-4 text-indigo-500" />
        </button>
        <div className="flex flex-col text-left">
          <h3 className="text-base font-medium">{name}</h3>
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
