/* eslint-disable react/jsx-no-useless-fragment */
import React, { useContext, useState } from 'react'
import * as FetchAdapter from 'lib/fetchAdapter'
import BottomSheet from 'components/BottomSheet'
import { AppContext } from 'redux/context'
import { HIDE_MODAL } from 'redux/action'
import { ICategory } from 'interfaces'

type FormBottomSheetProps = {
  show: boolean
  refreshData: () => void
  type: string
  categories?: ICategory[]
}

function FormBottomSheet({
  show, refreshData, type, categories = [],
}: FormBottomSheetProps) {
  const { dispatch } = useContext(AppContext)
  const [categoryId, setCategoryId] = useState(categories[0]?.id)
  const [name, setName] = useState('')
  const [value, setValue] = useState('')

  const refresh = () => {
    refreshData()
    dispatch({ type: 'HIDE_MODAL' })
  }

  const handleNameChange = (e: any) => {
    setName(e.target.value)
  }

  const handleValueChange = (e: any) => {
    setValue(e.target.value)
  }

  const handleCategoryChange = (e: any) => {
    setCategoryId(e.target.value)
  }

  const saveText = async () => {
    const apiUrl = `${process.env.REACT_APP_API_HOST}/api/texts`
    await FetchAdapter.post(apiUrl, {
      body: JSON.stringify({ name, value, category_id: categoryId }),
    })

    refresh()
  }

  const saveCategory = async () => {
    const apiUrl = `${process.env.REACT_APP_API_HOST}/api/categories`
    await FetchAdapter.post(apiUrl, {
      body: JSON.stringify({ name }),
    })

    refresh()
  }

  const isText = type === 'text'

  const save = () => {
    if (isText) return saveText();
    return saveCategory()
  }

  return (
    <>
      <BottomSheet show={show}>
        <>
          {isText && (
            <select
              onChange={handleCategoryChange}
              className="text-sm font-normal py-2 px-4 w-full border-b border-indigo-400 bg-white"
            >
              {categories?.map((category) => (
                <option key={category.id} value={category.id}>{category.name}</option>
              ))}
            </select>
          )}
        </>
        <input
          type="text"
          onChange={handleNameChange}
          placeholder="Add name"
          className="text-sm font-normal py-2 px-4 w-full border-b border-indigo-400"
        />

        <>
          {isText && (
            <input
              type="text"
              onChange={handleValueChange}
              placeholder="Add value"
              className="text-sm font-normal py-2 px-4 w-full border-b border-indigo-400 mt-2"
            />
          )}
        </>

        <div className="flex justify-end mt-3">
          <button
            type="button"
            onClick={() => dispatch({ type: HIDE_MODAL })}
            className="py-2 px-4 border border-primary text-primary text-sm rounded-lg mr-1"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={save}
            className="py-2 px-4 bg-primary text-white text-sm rounded-lg"
          >
            Save
          </button>
        </div>
      </BottomSheet>
    </>
  )
}

export default FormBottomSheet
