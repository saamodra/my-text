import React from 'react'
import { Link } from 'react-router-dom'
import { textListUrl } from 'lib/routes'
import { FiChevronRight, FiList } from 'react-icons/fi'

type CategoryItemProps = {
  id: string
  name: string
}

function CategoryItem({ id, name }: CategoryItemProps): JSX.Element {
  return (
    <Link
      to={textListUrl(id)}
      className="flex justify-between items-center p-3 drop-shadow-sm border-solid border mb-2 text-lg"
    >
      <div className="flex items-center">
        <FiList className="mr-4 text-indigo-500" />
        {name}
      </div>

      <FiChevronRight />
    </Link>
  )
}

export default CategoryItem;
