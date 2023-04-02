import { IText } from 'interfaces'
import React from 'react'
import {
  FiChevronDown, FiTrash2,
} from 'react-icons/fi'
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
  const deleteCategory = async () => {
    // eslint-disable-next-line no-alert
    if (window.confirm('Are you sure?')) {
      const apiUrl = `${process.env.REACT_APP_API_HOST}/api/categories/${id}`
      await FetchAdapter.destroy(apiUrl)

      refreshData()
    }
  }

  return (
    <div>
      <div className="flex justify-between items-center p-2 drop-shadow-sm mb-1 text-lg">
        <div className="flex items-center font-medium">
          {name}
        </div>

        <div className="flex gap-2 text-sm">
          <button type="button" onClick={deleteCategory}>
            <FiTrash2 />
          </button>
          <FiChevronDown />
        </div>
      </div>

      <div>
        {texts.map((text) => (
          <TextItem key={text.id} name={text.name} value={text.value} />
        ))}
      </div>
    </div>
  )
}

export default CategoryItem;
