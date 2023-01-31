import React, {useState, useEffect, useRef} from 'react';

const CommentsForm = ({slug}) => {
const [error, setError] = useState(false);
const [localStorage, setLocalStorage] = useState(null);
const [showSuccessMessage, setShowSuccessMessage] = useState(false);
const commentElement = useRef();
const nameElement = useRef();
const emailElement = useRef();
const storeDataElement = useRef();

const handleCommentSubmission = () => {
    setError(false);
    const { value:comment } = commentElement.current;
    const { value:name } = nameElement.current;
    const { value:email } = emailElement.current;
    const { checked:storeData } = storeDataElement.current;

    if(!comment || !name || !email){
        setError(true);
        return;
    }
    const commentObj = { name, email, comment, slug }
    if(storeData){
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);        
    }else{
        localStorage.removeItem('name', name);
        localStorage.removeItem('email', email);  
    }
    
}

  return (

    <div className='bg-white shadow-lg rounded-lg p-8 pb-12 mb-8 text-zinc-600'>
<h3 className="text-xl mb-8 font-semibold border-bottom pb-4">
Comments Form
</h3>
<div className="grid grid-cols-1 gap-4 mb-4">
<textarea ref={nameElement} name="comment" 
 className="text-zinc-600 p-4 outline-none w-full rounded-lg
  focus:ring-2 focus:ring-zinc-200 bg-gray-100" 
  placeholder='Comment'/>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
   <input type="text" ref={nameElement}
   className="text-zinc-600 p-4 py-2 outline-none w-full rounded-lg bg-gray-100
   focus:ring-4 focus:ring-zinc-200" placeholder='Name' name='name'/> 

   <input type="text" ref={emailElement}
   className="text-zinc-600 p-4 py-2 outline-none w-full rounded-lg bg-gray-100
   focus:ring-4 focus:ring-zinc-200" placeholder='Email' name='email'/> 
</div>
<div className="grid grid-cols-1 gap-4 mb-4">
    <div className="container">
        <input
         type="checkbox"
         ref={storeDataElement}
         id="storeData"
         name="storeData"
         value="true"
         className="focus:accent-orange-400 font-medium checked:accent-orange-400 text-white font-lg"
        />
        <label htmlFor="storeData" className="text-zinc-500 cursor-pointer ml-2">
            Do you want to save this info for your next comment?
        </label>

    </div>
</div>
{error && <p className='text-xs text-red-500'>All Fields are Required.</p>}
<div className="mt-8">
    <button type='button' onClick={handleCommentSubmission}
    className="transition duration-500 ease hover:bg-green-900 bg-orange-400 text-white
     rounded-full text-lg inline-block px-8 py-3 cursor-pointer">
        Post Comment
    </button>
    {showSuccessMessage && <span className="text-xl float-right font-semibold text-green-300 mt-3">
        Comment submitted for review.
    </span>}
</div>
</div>
      
   
  )
}

export default CommentsForm
