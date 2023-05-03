import { collection, doc, getDocs, query, setDoc, where } from 'firebase/firestore'
import { User_t } from '../models'
import { db } from './app'

export const createUser = async (user: User_t) => {
    if (!user.uid) return false;
    const res = await setDoc(
        doc(db, 'Users', user.uid), user, { merge: false }
    ).then(
        () => true
    ).catch((err) => false)
    return res
}

export const getUser = async (uid: string) => {
    const collRef = collection(db, 'Users')
    const q = query(collRef, where('uid', '==', uid))
    const res = await getDocs(q)
    if (res.empty) return null
    else return res.docs[0].data() as User_t
}

export const getUserWithSpotifyID = async (providerId: string) => {
    const collRef = collection(db, 'Users')
    const q = query(collRef, where('providerId', '==', providerId))
    const res = await getDocs(q)
    if (res.empty) return null
    else return res.docs[0].data() as User_t
}

export const getUserWithUsername = async (username: string) => {
    const collRef = collection(db, 'Users')
    const q = query(collRef, where('username', '==', username))
    const res = await getDocs(q)
    if (res.empty) return null
    else return res.docs[0].data() as User_t
}

export const updateUser = async (uid: string, user: Partial<User_t>) => {
    const res = await setDoc(
        doc(db, 'Users', uid), {
        ...user,
        updatedAt: new Date().getTime()
    }, { merge: true }
    ).then(
        () => true
    ).catch((err) => false)
    return res
}