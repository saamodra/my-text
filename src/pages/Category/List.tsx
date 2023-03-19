import React, { useEffect, useState } from 'react'
import { ICategory } from 'interfaces'
import { getDb } from 'lib/fetchAdapter'
import CategoryItem from 'components/CategoryItem'

function List(): JSX.Element {
  const [categories, setCategories] = useState<ICategory[]>([])

  const getData = async () => {
    const dbCategories = await getDb({ dbName: 'categories' })
    setCategories(dbCategories)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="text-3xl px-1 py-2 font-bold">
      {categories.map((text) => (
        <CategoryItem key={text.id} id={text.id} name={text.name} />
      ))}
    </div>
  )
}

export default List
