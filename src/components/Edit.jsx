import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { database } from '../firebaseConfig';
import {
    updateDoc,
    collection,
    doc,
    onSnapshot
    
} from 'firebase/firestore';

function Edit() {
    const params=useParams()
    const [editdoc, setEditDoc] = useState('');
    const [docTitle,setDocTitle]=useState()
    // console.log(params);
    const getQuilData=(value)=>{
        setEditDoc(value)
   
    }
      // console.log(editdoc);
      
      const collectionRef = collection(database, 'docsData')
      const updateDocument=async ()=> {
        try {
          const documentRef = doc(collectionRef, params.id);
          await updateDoc(documentRef, { 
            editdoc:editdoc });
       
        } catch (error) {
          console.error('Error saving document:', error);
          alert('Cannot Save'); 
        }
      }
    

      const getData = () => {
        const document = doc(collectionRef, params.id)
        onSnapshot(document, (docs) => {
            console.log(docs.data().editdocc)
        })
    }
    useEffect(()=>{
      getData()
    },[])
    
      
 useEffect(()=>{
    updateDocument()
    },[editdoc])
  return (
    <>
    <div  style={{ height: '100vh' }} className='container'>
        <div className='mt-3'>
            <Link to={'/'} style={{textDecoration:'none'}} className='btn btn-warning'><i className='fa-solid fa-arrow-backward'></i> Go Back</Link>
        </div>
    <h1>{docTitle}</h1>
    <ReactQuill className='mt-4' value={editdoc} onChange={(e)=>getQuilData(e)} theme="snow" />
    </div>
    </>
  )
}

export default Edit