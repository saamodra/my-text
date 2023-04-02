import React, { useEffect, useState } from 'react'
import { ICategory } from 'interfaces'
import * as FetchAdapter from 'lib/fetchAdapter'
import CategoryItem from 'components/CategoryItem'
import BottomSheet from 'components/BottomSheet'
import FloatingButton from 'components/FloatingButton'

type CategoryBottomSheetProps = {
  getData: () => void
}

function CategoryBottomSheet({ getData }: CategoryBottomSheetProps): JSX.Element {
  const [showModal, setShowModal] = useState(false)
  const [name, setName] = useState('')

  const handleNameChange = (e: any) => {
    setName(e.target.value)
  }

  const saveData = async () => {
    const apiUrl = `${process.env.REACT_APP_API_HOST}/api/categories`
    await FetchAdapter.post(apiUrl, {
      body: JSON.stringify({ name }),
    })

    getData()
    setShowModal(false)
  }

  return (
    <>
      <FloatingButton onClickHandler={() => setShowModal(true)} />
      <BottomSheet show={showModal} toggler={setShowModal}>
        <input
          type="text"
          onChange={handleNameChange}
          placeholder="Add name"
          className="text-sm font-normal py-2 px-4 w-full border-b border-indigo-400"
        />

        <div className="flex justify-end mt-3">
          <button
            type="button"
            onClick={() => setShowModal(false)}
            className="py-2 px-4 box-border border border-primary text-primary text-sm rounded-lg mr-1"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={saveData}
            className="py-2 px-4 bg-primary text-white text-sm rounded-lg"
          >
            Save
          </button>
        </div>
      </BottomSheet>
    </>
  )
}

function List(): JSX.Element {
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
    <div className="text-3xl px-4 py-3 font-bold">
      {categories.map((text) => (
        <CategoryItem key={text.id} id={text.id} name={text.name} />
      ))}

      <CategoryBottomSheet getData={getData} />
    </div>
  )
}

export default List
