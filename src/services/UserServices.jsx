import React from 'react'

import {db} from '../../firebase.config';
import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
    setDoc,
    onSnapshot
  } from "firebase/firestore";


export const getUser= async function(userID){
    try{ 
        const userRef = doc(db,"users",userID)
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            let data =docSnap.data()
            return data
          } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
          }


    }catch(err){
        console.log(err.message)
    }
}


export const updateUser= async function(name,about,userID,contacts){
    try{ 
        const userRef = doc(db,"users",userID)
        if(contacts){
            await updateDoc(userRef, {
                contacts:contacts
            });
        }else{
            await updateDoc(userRef, {
                name: name,
                about:about,
            });
        }


    }catch(err){
        console.log(err.message)
    }
}

