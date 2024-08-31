import Feed from './Feed';
//import {useContext} from 'react';
//import {dataContext} from '../context/dataContext';

const Home=({posts})=>{
  //const{posts}=useContext(dataContext);
 return(
  
  <main className="Home">
    {posts.length ? (
      <Feed posts={posts}/>
     ) : (
      <p style={{matginTop: "2rem"}} >
        No posts to display
        </p>
     )}   
   </main> 
  

 )
}

export default Home