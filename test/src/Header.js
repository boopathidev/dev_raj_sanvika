//import { useContext} from 'react';
import {FaLaptop,FaTabletAlt,FaMobileAlt} from 'react-icons/fa';
//mport { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//import { dataContext } from '../context/dataContext';


const Header=({title,width})=>{
  //const {width}=useContext(dataContext);
    return(

     <header className="Header">  


        <h2>{title}</h2>
        { width  < 768 ? <FaMobileAlt/>
            : width < 992 ? <FaTabletAlt/>
                : <FaLaptop/> }
          
       
       
       
       

     </header> 


)
}
export default Header;
/* import { faLaptop, faTabletAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = ({ title, width }) => {
    return (
        <header className="Header">
            <h2>{title}</h2>
            {width < 768 ? <FontAwesomeIcon icon={faMobileAlt} />
                : width < 992 ? <FontAwesomeIcon icon={faTabletAlt} />
                    : <FontAwesomeIcon icon={faLaptop} />}
        </header>
    );
}

export default Header; */