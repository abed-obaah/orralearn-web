import {storage,db} from "./firebase.js";
import {collection, setDoc, doc, getDoc, query, where,getDocs,} from "firebase/firestore";
import {ref,uploadBytes,getDownloadURL,deleteObject} from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

export const filesUpload = async (firebaseFileLocation,file)=>{

    try {
        const fileRef = ref(storage, `${firebaseFileLocation}/${file.name + uuidv4()}`);
        // const metatype = { contentType: file.mimetype, name: file.originalname };
        const uplaodedFile = await uploadBytes(fileRef, file);
        console.log(uplaodedFile)
        const uploadedfileRef = ref(
            storage,
            `${firebaseFileLocation}/${uplaodedFile.metadata.name}`
        );
        const imageUrl = await getDownloadURL(uploadedfileRef);

        if (!imageUrl) {
            return "error";
        }
        return imageUrl;
    } catch (err) {
        console.log(err);
    }
}

// eslint-disable-next-line no-unused-vars
export const fileUpdate =  async (firebaseFileLocation,file,imageUrl)=>{
    try {
        const imageRef = ref(storage, `${firebaseFileLocation}/${file.originalname + uuidv4()}`);
        const metatype = { contentType: file.mimetype, name: file.originalname };

        await deleteObject(ref(storage, imageUrl));
        const uplaodedImage = await uploadBytes(imageRef, file.buffer,metatype);
        const uploadedImageRef = ref(
            storage,
            `${firebaseFileLocation}/${uplaodedImage.metadata.name}`
        );
        const imageUrl = await getDownloadURL(uploadedImageRef);
        console.log(imageUrl)
        if (!imageUrl) {
            return "eror";
        }
        return imageUrl;
    } catch (err) {
        return 'error'
    }
}

export const deleteFile = async(imageUrl)=>{
    // console.log(filebaseFileLocation,imageUrl)
    try {
        const imageRef = ref(storage, imageUrl);
        const res =  await deleteObject(imageRef,imageUrl);
        if(res){
            return 'error';
        }
    } catch (err) {
        return 'error'
    }
}


export const createUserInfo =async(collectionName,currentUserId,userInfo)=>{
   // console.log(userInfo)
    try {
        const ref= doc(db,collectionName,currentUserId)
        const docRef = await  setDoc(ref,userInfo)
     
        if(docRef){
        return docRef
        }
    }catch (err){
        console.log(err)
        return err
    }
}

export const  getUserInfo = async (collectionName,currentUserId)=>{
    try{
        const ref= doc(db,collectionName,currentUserId)
        return await  getDoc(ref)
    }catch (err){
        console.log(err)
        return err
    }
}

export const findUserName = async (username) => {
    try {
        const q = query(collection(db, 'Users'), where('username', '==', username));

        const querySnapshot = await getDocs(q);
        return !querySnapshot.empty;
    } catch (error) {
        console.error('Error checking username:', error);
        return false;
    }
};