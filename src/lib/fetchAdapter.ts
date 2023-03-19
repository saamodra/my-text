import {
  collection, getDocs, query,
} from 'firebase/firestore'
import { IDbSelector } from 'interfaces'
import db from '../firebase'

// eslint-disable-next-line import/prefer-default-export
export const getDb = ({ dbName, filter }: IDbSelector): Promise<any> => {
  const dbCollection = collection(db, dbName)
  const dbQuery = filter ? query(dbCollection, filter) : dbCollection

  return getDocs(dbQuery)
    .then((snapshot) => snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    .catch((err) => err)
}
