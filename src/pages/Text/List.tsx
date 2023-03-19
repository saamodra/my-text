import React, { useEffect, useState } from 'react'
import { IText } from 'interfaces'
import { getDb } from 'lib/fetchAdapter'
import TextItem from 'components/TextItem'

function List(): JSX.Element {
  const [texts, setTexts] = useState<IText[]>([])

  const getData = async () => {
    const dbText = await getDb('texts')
    setTexts(dbText)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="text-3xl px-1 py-2 font-bold">
      {texts.map((text) => (
        <TextItem key={text.id} id={text.id} name={text.name} value={text.value} />
      ))}
    </div>
  )
}

export default List
