import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import {
  FiChevronRight, FiTrash2,
} from 'react-icons/fi'
import { IText } from 'interfaces'
import * as FetchAdapter from 'lib/fetchAdapter'
import TextItem from './TextItem'

type CategoryItemProps = {
  id: string
  name: string
  texts: IText[]
  refreshData: () => void
}

function CategoryItem({
  id, name, texts, refreshData,
}: CategoryItemProps): JSX.Element {
  const [expanded, setExpanded] = useState(false)

  const deleteCategory = async (e: React.SyntheticEvent) => {
    e.stopPropagation()
    // eslint-disable-next-line no-alert
    if (window.confirm('Are you sure?')) {
      const apiUrl = `${process.env.REACT_APP_API_HOST}/api/categories/${id}`
      await FetchAdapter.destroy(apiUrl)

      toast.success('Successfully deleted!')
      refreshData()
    }
  }

  return (
    <div>
      <div
        role="button"
        tabIndex={0}
        className="flex justify-between items-center p-2 drop-shadow-sm mb-1 text-lg w-full"
        onClick={() => setExpanded(!expanded)}
        onKeyDown={() => setExpanded(!expanded)}
      >
        <div className="flex items-center font-medium">
          {name}
        </div>

        <div className="flex gap-2 text-sm">
          <button type="button" onClick={deleteCategory}>
            <FiTrash2 />
          </button>
          <FiChevronRight className={`transition-transform ease-in-out duration-200 ${expanded ? 'rotate-90' : ''}`} />
        </div>
      </div>

      <div className={expanded ? '' : 'hidden'}>
        {texts.map((text) => (
          <TextItem
            key={text.id}
            id={text.id}
            name={text.name}
            value={text.value}
            refreshData={refreshData}
          />
        ))}
      </div>
    </div>
  )
}

export default CategoryItem;
