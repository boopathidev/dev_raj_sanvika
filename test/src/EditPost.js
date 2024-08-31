import { useParams,Link  } from "react-router-dom";
import { useEffect } from "react";
//import { useContext } from "react";
//import { dataContext } from '../context/dataContext';

const EditPost= ({posts,handleEdit,editTitle,setEditTitle,editBody,setEditBody})=>{
  //const{posts,handleEdit,editTitle,setEditTitle,editBody,setEditBody}=useContext(dataContext);
  const {id } =useParams();
  const post=posts.find(post=>(post.id).toString()===id); 

  useEffect(() => {
    if(post){
     setEditTitle(post.title)
     setEditBody(post.body)

    }
  }, [post,setEditTitle,setEditBody] )
  return(
      <main className="NewPost">
         {editTitle &&
          
            <> 
                <h2>Edit Post</h2>
              <form className="newPostForm" onSubmit={(e)=> e.preventDefault()}>
                <label htmlFor="postTitle">Title:</label>
                <input
                  id="postTitle"
                  type="text"
                  required
                  value={editTitle}
                  onChange={(e)=>setEditTitle(e.target.value)}
                />  
               <label htmlFor="postBody">Post:</label>
                <textarea
                id="postBody"
                Required
                value={editBody}
                onChange={(e)=>setEditBody(e.target.value)}></textarea>
              <button  type="submit" onClick={()=>handleEdit(post.id )}>Submit</button> 
              
      
           </form>
        </>
}
               
             {!editTitle &&
             <> 
                 <h2>Post not Found </h2>
                 <p>well, that's disappointing </p>
                 <p>
                   <Link to ='/'>Visit our home page</Link>
                  </p> 
             
             
             </>

           }
     </main>  
      

  )
}

   
   export default EditPost; 