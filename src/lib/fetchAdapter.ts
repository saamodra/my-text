import {
  collection, getDocs,
} from 'firebase/firestore'
import db from '../firebase'

export type FetchResponseProps<T = Response> = {
  data: T | null,
  error: Error | null
}

export const getDb = (dbName: string): Promise<any> => {
  const dbCollection = collection(db, dbName)
  return getDocs(dbCollection)
    .then((snapshot) => snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
    .catch((err) => err)
}
