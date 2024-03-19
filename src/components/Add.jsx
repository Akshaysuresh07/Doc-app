// import React, { useEffect, useState } from 'react'
// import ReactQuill from 'react-quill';
// import { database } from '../firebaseConfig';
// import { doc, updateDoc } from 'firebase/firestore';
// import { useLocation } from 'react-router-dom';



// function Edit() {
//   const location = useLocation()
//   const data= location.state
//   const [displaydoc, setDisplaydoc] = useState(data.description)

//   const editDescription = async () => {
//     const document = doc(database, 'documents', data.id)
//     updateDoc(document, {
//       description: displaydoc
//     })
//   }

//   const getQuilData= (e) => {
//     setDisplaydoc(e)
//   }

//   useEffect(() => {
//     editDescription()
//   }, [displaydoc])
//   return (
//     <>
//      <div  style={{ height: '100vh' }} className='container'>
//       <h1>{data.title}</h1>
//       <ReactQuill  className='mt-5 ' value={displaydoc} onChange={(e)=>getQuilData(e)} theme="snow" />
//    </div>
//     </>
//   )
// }

// export default Edit