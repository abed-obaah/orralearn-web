import {auth} from './firebase.js'
import { updatePassword } from 'firebase/auth';
import {storage,db} from "./firebase.js";
import {collection, setDoc, doc, getDoc, query, where,getDocs,updateDoc} from "firebase/firestore";
import {ref,uploadBytes,getDownloadURL,deleteObject} from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import {signInWithEmailAndPassword} from "firebase/auth";



const uploadFile =async(firebaseFileLocation,file)=>{
    try {
        const fileRef = ref(storage, `${firebaseFileLocation}/${file.name + uuidv4()}`);
        // const metatype = { contentType: file.mimetype, name: file.originalname };
        const uplaodedFile = await uploadBytes(fileRef, file);
        const uploadedfileRef = ref(
            storage,
            `${firebaseFileLocation}/${uplaodedFile.metadata.name}`
        );
        const imageUrl = await getDownloadURL(uploadedfileRef);
        if (!imageUrl) {
            return "error";
        }
        return imageUrl;
    }catch (err){
        console.log(err);
    }
}
export const filesUpload = async (firebaseFileLocation,file)=>{
    try {
        return  await uploadFile(firebaseFileLocation,file);
    } catch (err) {
        console.log(err);
        return  err
    }
}

// eslint-disable-next-line no-unused-vars
export const fileUpdate =  async (firebaseFileLocation,file,oldFileUrl)=>{
    try {
        const upLoadedImage = await  uploadFile(firebaseFileLocation,file)
        if(upLoadedImage && oldFileUrl !=='' ){
           await deleteObject(ref(storage,oldFileUrl));
        }

        return upLoadedImage
    } catch (err) {
        console.log(err)
    }
}

export const deleteFile = async(imageUrl)=>{
    // console.log(filebaseFileLocation,imageUrl)
    try {
        const imageRef = ref(storage, imageUrl);
        const res =  await deleteObject(imageRef,imageUrl);
       console.log(res)
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
        throw new Error(error);
        return false;
    }
};

export const findDocumentAndUpdate = async (docId, collectionName, updateData)=>{
    try{
        const docRef = doc(db, collectionName, docId);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            await updateDoc(docRef, updateData);
            console.log("Document updated successfully");
        } else {
            console.log("Document not found");
        }
        const updatedDocSnap = await getDoc(docRef);
        return updatedDocSnap.data();
    }catch (err){
        console.log(err)
        throw new Error(err);
    }
}

export const changePassword =async(email,currentPassword,newPassword)=>{
    console.log(email,currentPassword,newPassword)
    try{
        const user = auth.currentUser
        const data = await signInWithEmailAndPassword(auth,email,currentPassword);
        if(data){
            const updatedPassResult =  await updatePassword(user, newPassword);
            console.log(updatedPassResult)
            return true
        }
        console.log()
        // Update the user's password

    }catch (err){
        throw new Error(err);
        // console.log(err)
    }
}