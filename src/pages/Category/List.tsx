import React, { useContext, useEffect, useState } from 'react'
import { ICategory } from 'interfaces'
import * as FetchAdapter from 'lib/fetchAdapter'
import CategoryItem from 'components/CategoryItem'
import { AppContext } from 'redux/context'
import { SHOW_CATEGORY_MODAL, SHOW_TEXT_MODAL } from 'redux/action'
import FormBottomSheet from './FormBottomSheet'

function List(): JSX.Element {
  const { state, dispatch } = useContext(AppContext)
  const { categoryModal, textModal } = state
  const [categories, setCategories] = useState<ICategory[]>([])

  const getData = async () => {
    const apiUrl = `${process.env.REACT_APP_API_HOST}/api/categories`
    const response = await FetchAdapter.get(apiUrl)
    const result = await response.result?.json()

    setCategories(result)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="text-3xl px-4 py-3 font-bold mb-14">
      {categories.map((category) => (
        <CategoryItem
          key={category.id}
          id={category.id}
          name={category.name}
          texts={category.texts}
          refreshData={getData}
        />
      ))}

      <div className="fixed left-0 bottom-0 w-full flex p-3 bg-white">
        <button
          type="button"
          onClick={() => dispatch({ type: SHOW_CATEGORY_MODAL })}
          className="py-2 px-4 mr-1 bg-primary text-white text-sm rounded-lg w-full"
        >
          Add Category
        </button>
        <button
          type="button"
          onClick={() => dispatch({ type: SHOW_TEXT_MODAL })}
          className="py-2 px-4 ml-1 bg-primary text-white text-sm rounded-lg w-full"
        >
          Add Text
        </button>
      </div>

      <FormBottomSheet show={categoryModal} refreshData={getData} type="category" />
      <FormBottomSheet show={textModal} refreshData={getData} categories={categories} type="text" />
    </div>
  )
}

export default List
