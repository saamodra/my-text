import { QueryFieldFilterConstraint } from 'firebase/firestore'

export interface ICategory {
  id: string
  name: string
  created_at: object
  modified_at: object
}

export interface IText {
  id: string
  category_id: string
  name: string
  value: string
  created_at: object
  modified_at: object
}

export interface IDbSelector {
  dbName: string
  filter?: QueryFieldFilterConstraint
}
