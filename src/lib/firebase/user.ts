import { collection, doc, getDoc, getDocs, query, setDoc, where, writeBatch } from 'firebase/firestore'
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

export const updateUserDoc = async (uid: string, user: Partial<User_t>) => {
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

export const searchUsers = async (q: string) => {
    const collRef = collection(db, 'Users')
    const qRef = query(collRef, where('username', '>=', q))
    const res = await getDocs(qRef)
    console.log(res)
    if (res.empty) return []
    else return res.docs.map(doc => doc.data() as User_t)
}

export const acceptFollowRequest = async (uid: string, followUid: string, setUser: React.Dispatch<React.SetStateAction<User_t>>) => {
    const batch = writeBatch(db)
    batch.update(doc(db, 'Users', uid), {
        [`followers.${followUid}`]: true,
        [`pendingIncomingFollowRequests.${followUid}`]: false
    })
    batch.update(doc(db, 'Users', followUid), {
        [`following.${uid}`]: true,
        [`pendingOutgoingFollowRequests.${uid}`]: false
    })
    const res = await batch.commit().then(
        () => {
            setUser((prev) => {
                if (!prev) return prev
                return {
                    ...prev,
                    followers: {
                        ...prev.followers,
                        [followUid]: true
                    },
                    pendingIncomingFollowRequests: {
                        ...prev.pendingIncomingFollowRequests,
                        [followUid]: false
                    },
                }
            })
            return true
        }
    ).catch((err) => false)
    return res
}

export const unfollowUser = async (uid: string, followUid: string, setUser: React.Dispatch<React.SetStateAction<User_t>>) => {
    const batch = writeBatch(db)
    batch.update(doc(db, 'Users', uid), {
        [`following.${followUid}`]: false,
        [`pendingOutgoingFollowRequests.${followUid}`]: false
    })
    batch.update(doc(db, 'Users', followUid), {
        [`followers.${uid}`]: false,
        [`pendingIncomingFollowRequests.${uid}`]: false
    })
    const res = await batch.commit().then(
        () => {
            setUser((prev) => {
                if (!prev) return prev
                return {
                    ...prev,
                    following: {
                        ...prev.following,
                        [followUid]: false
                    },
                    pendingOutgoingFollowRequests: {
                        ...prev.pendingOutgoingFollowRequests,
                        [followUid]: false
                    },
                }
            })
            return true
        }
    ).catch((err) => false)
    return res
}

export const sendFollowRequest = async (uid: string, followUid: string, setUser: React.Dispatch<React.SetStateAction<User_t>>) => {
    const batch = writeBatch(db)
    batch.update(doc(db, 'Users', uid), {
        [`pendingOutgoingFollowRequests.${followUid}`]: true
    })
    batch.update(doc(db, 'Users', followUid), {
        [`pendingIncomingFollowRequests.${uid}`]: true
    })
    const res = await batch.commit().then(
        () => {
            setUser((prev) => {
                if (!prev) return prev
                return {
                    ...prev,
                    pendingOutgoingFollowRequests: {
                        ...prev.pendingOutgoingFollowRequests,
                        [followUid]: true
                    },
                }
            })
            return true
        }
    ).catch((err) => false)
    return res
}

export const cancelFollowRequest = async (uid: string, followUid: string, setUser: React.Dispatch<React.SetStateAction<User_t>>) => {
    const batch = writeBatch(db)
    batch.update(doc(db, 'Users', uid), {
        [`pendingOutgoingFollowRequests.${followUid}`]: false
    })
    batch.update(doc(db, 'Users', followUid), {
        [`pendingIncomingFollowRequests.${uid}`]: false
    })
    const res = await batch.commit().then(
        () => {
            setUser((prev) => {
                if (!prev) return prev
                return {
                    ...prev,
                    pendingOutgoingFollowRequests: {
                        ...prev.pendingOutgoingFollowRequests,
                        [followUid]: false
                    }
                }
            })
            return true
        }
    ).catch((err) => false)
    return res
}

export const getUIDFromUsername = async (username: string) => {
    const collRef = collection(db, 'Users')
    const q = query(collRef, where('username', '==', username))
    const res = await getDocs(q)
    if (res.empty) return null
    else return res.docs[0].id
}

export const getUsernameFromUID = async (uid: string) => {
    const docRef = doc(db, 'Users', uid)
    const docSnap = await getDoc(docRef)
    if (!docSnap.exists()) return null
    else return docSnap.data().username as string
}

export const getDPFromUID = async (uid: string) => {
    const docRef = doc(db, 'Users', uid)
    const docSnap = await getDoc(docRef)
    if (!docSnap.exists()) return null
    else return docSnap.data().dp as string
}