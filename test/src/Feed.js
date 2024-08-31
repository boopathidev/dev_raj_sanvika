
import Post from "./Post";

const Feed=({posts}) => {
    return(
     <>
       
          {posts.map(post=> (

            <Post key={post.id} post={post} />
          )


          )}  
      
      
           
               <h3>About This is a Small  web app</h3>
         
              
           
   
     
     
   
               /Users/boopathiraj/sanvi/src/context/dataContext.js
      </> 
     
   
    )
   }
   
   export default Feed;