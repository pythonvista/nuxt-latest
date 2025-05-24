import {initializeApp} from 'firebase/app';
import {
  confirmPasswordReset,
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateEmail,
  updatePassword,
  verifyPasswordResetCode,
  signInWithPhoneNumber,
  signInWithPopup
} from 'firebase/auth';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  orderBy,
  getDocs,
  limit,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
  getFirestore,
  where,
  serverTimestamp
} from 'firebase/firestore';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes,
  deleteObject
} from 'firebase/storage';

export default defineNuxtPlugin(async nuxtApp => {
  const runtimeConfig = useRuntimeConfig();
  const firebaseConfig = {
    apiKey: runtimeConfig.public.FIREBASE_API_KEY,
    authDomain: runtimeConfig.public.AUTH_DOMAIN,
    projectId: runtimeConfig.public.PROJECT_ID,
    storageBucket: runtimeConfig.public.STORAGE_BUCKET,
    messagingSenderId: runtimeConfig.public.MESSAGING_SENDER_ID,
    appId: runtimeConfig.public.APP_ID
  };
  // const app = initializeApp(firebaseConfig);
  // const auth = getAuth(app);
  // const db = getFirestore(app);
  // const storage = getStorage(app);
  const app = null;
  const auth = null;
  const storage = null
  const db = null;

  function AuthFunc() {
    this.signup = (email, password) => {
      let data = createUserWithEmailAndPassword(auth, email, password);
      return data;
    };
    this.Phone = (phone, appVerifier) => {
      const res = signInWithPhoneNumber(auth, phone, appVerifier);
      return res;
    };
    this.GoogleLogin = provider => {
      const res = signInWithPopup(auth, provider);
      return res;
    };
    this.login = (email, password) => {
      let data = signInWithEmailAndPassword(auth, email, password);
      return data;
    };
    this.signout = () => {
      let data = signOut(auth);
      return data;
    };
    this.reset = email => {
      const res = sendPasswordResetEmail(auth, email);
      return res;
    };

    this.verifyemail = email => {
      const res = sendEmailVerification(auth, email);
      return res;
    };

    this.verifycode = code => {
      const res = verifyPasswordResetCode(auth, code);
      return res;
    };

    this.confirmreset = (code, newpassword) => {
      const res = confirmPasswordReset(auth, code, newpassword);
      return res;
    };
    this.changeEmail = (email, curruser) => {
      const data = updateEmail(curruser, email);
      return data;
    };
    this.changePassword = (password, curruser) => {
      const data = updatePassword(curruser, password);
      return data;
    };

    this.UserState = () => {
      return auth;
    };
  }

  function CRUD() {
    this.addDocWithId = (dbname, userId, arrayinfo) => {
      let data = setDoc(doc(db, dbname, userId), {
        ...arrayinfo,
        CreatedAt: serverTimestamp()
      });
      return data;
    };

    this.addDocWithoutId = (dbname, arrayinfo) => {
      let collRef = collection(db, dbname);
      let data = addDoc(collRef, {
        ...arrayinfo,
        CreatedAt: serverTimestamp()
      });
      return data;
    };

    this.getSingleDoc = (dbname, user_id) => {
      let res = getDoc(doc(db, dbname, user_id));
      return res;
    };

    this.getAllDoc = async (dbname, sort = '', uid = '') => {
      let docs = [];
      if (sort == 'asc') {
        const q = query(collection(db, dbname), orderBy('CreatedAt', 'asc'));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(doc => {
          docs.push({...doc.data(), docid: doc.id});
        });
      }
      if (sort == 'desc') {
        const q = query(collection(db, dbname), orderBy('CreatedAt', 'desc'));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(doc => {
          docs.push({...doc.data(), docid: doc.id});
        });
      }
      if (sort == '') {
        const querySnapshot = await getDocs(collection(db, dbname));
        querySnapshot.forEach(doc => {
          docs.push({...doc.data(), docid: doc.id});
        });
      }

      return docs;
    };

    this.getAllQueryDoc = async (dbname, where1, where2, sort = '') => {
      const docs = [];

      if (!sort) {
        let q = query(collection(db, dbname), where(where1, '==', where2));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(doc => {
          docs.push({...doc.data(), docid: doc.id});
        });
        return docs;
      } else {
        let q = query(
          collection(db, dbname),
          where(where1, '==', where2),
          orderBy('CreatedAt', sort)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(doc => {
          docs.push({...doc.data(), docid: doc.id});
        });
        return docs;
      }
    };

    this.collectionSnapDocs = (dbname, where1, where2, where3, where4) => {
      const q = query(
        collection(db, dbname),
        where(where1, '==', where2),
        where(where3, '==', where4),
        orderBy('CreatedAt', 'asc'),
        limit(100)
      );
      return q;
    };

    this.SnapDoc = (dbname, userId) => {
      return doc(db, dbname, userId);
    };

    this.updateDocument = (dbname, userId, arrayinfo) => {
      const selectedUser = doc(db, dbname, userId);
      return updateDoc(selectedUser, arrayinfo);
    };

    this.queryDoc = (dbname, where1, where2) => {
      const collRef = collection(db, dbname);
      const q = query(collRef, where(where1, '==', where2));
      return q;
    };

    this.removeDoc = (dbname, db_id) => {
      return deleteDoc(doc(db, dbname, db_id));
    };
  }

  let UploadImg = async file => {
    const metadata = {
      contentType: 'image/jpeg'
    };
    const uploadref = ref(storage, file.name);
    const res = await uploadBytes(uploadref, file);

    const url = await getDownloadURL(ref(storage, res.metadata.fullPath));
    let path = res.metadata.fullPath;
    return {url, path};
  };

  let UploadImg2 = async (file, name) => {
    const metadata = {
      contentType: 'application/x-zip-compressed'
    };
    const uploadref = ref(storage, `${name}.jpeg`);
    const res = await uploadBytes(uploadref, file);
    console.log(res);
    const url = await getDownloadURL(ref(storage, res.metadata.fullPath));
    let path = res.metadata.fullPath;
    return {url, path};
  };

  let DeleteImg = async path => {
    const desertRef = ref(storage, path);
    await deleteObject(desertRef);
  };
  const authfunc = new AuthFunc();
  let crud = new CRUD();
  nuxtApp.vueApp.provide('authfunc', authfunc);
  nuxtApp.provide('authfunc', authfunc);

  nuxtApp.vueApp.provide('crud', crud);
  nuxtApp.provide('crud', crud);

  nuxtApp.vueApp.provide('UploadImg', UploadImg);
  nuxtApp.provide('UploadImg', UploadImg);

  nuxtApp.vueApp.provide('UploadImg2', UploadImg2);
  nuxtApp.provide('UploadImg2', UploadImg2);

  nuxtApp.vueApp.provide('DeleteImg', DeleteImg);
  nuxtApp.provide('DeleteImg', DeleteImg);
});
