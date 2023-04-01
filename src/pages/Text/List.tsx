import React, { useEffect, useState } from 'react'
import { IText } from 'interfaces'
import * as FetchAdapter from 'lib/fetchAdapter'
import TextItem from 'components/TextItem'
import { useParams } from 'react-router-dom'
import BottomSheet from 'components/BottomSheet'
import FloatingButton from 'components/FloatingButton'

type TextBottomSheetProps = {
  getData: () => void
}

function TextBottomSheet({ getData }: TextBottomSheetProps): JSX.Element {
  const { id } = useParams()
  const [showModal, setShowModal] = useState(false)
  const [name, setName] = useState('')
  const [value, setValue] = useState('')

  const handleNameChange = (e: any) => {
    setName(e.target.value)
  }

  const handleValueChange = (e: any) => {
    setValue(e.target.value)
  }

  const saveData = async () => {
    const apiUrl = `${FetchAdapter.API_HOST}/texts`
    await FetchAdapter.post(apiUrl, {
      body: JSON.stringify({ name, value, category_id: id }),
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
        <input
          type="text"
          onChange={handleValueChange}
          placeholder="Add value"
          className="text-sm font-normal py-2 px-4 w-full border-b border-indigo-400 mt-2"
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
  const { id } = useParams()
  const [texts, setTexts] = useState<IText[]>([])

  const getData = async () => {
    const apiUrl = `${FetchAdapter.API_HOST}/categories/${id}`
    const response = await FetchAdapter.get(apiUrl)
    const result = await response.result?.json()

    setTexts(result.texts)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="text-3xl px-1 py-2 font-bold">
      {texts.map((text) => (
        <TextItem key={text.id} id={text.id} name={text.name} value={text.value} />
      ))}

      <TextBottomSheet getData={getData} />
    </div>
  )
}

export default List
