import React , {useEffect,useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import {Pagination} from '../utils/Pagination.js';
import NumberFormat from 'react-number-format';

export  function Main() {
       
       const [cryptoList,setCryptoList] = useState([]) // DECLARING THE STATE WHERE WE STORE THE DATA
      
        useEffect(()=>{
        // GETTING THE DATA
        axios.get('https://api.coinlore.net/api/tickers/')
        .then((response)=>{
            setCryptoList(response.data['data'])
            console.log(response.data['data'])
            
        })

        },[]);

    
        // DECLARING THE STATES NEEDED FOR THE PAGINATION
        const [currentPage,setCurrentPage] = useState(1);
        const [postsPerPage,setPostsPerPage] = useState(12);
        const indexOfLastPost = currentPage * postsPerPage;
        const indexOfFirstPost = indexOfLastPost - postsPerPage;
        const currentPosts = cryptoList.slice(indexOfFirstPost,indexOfLastPost);
        const paginate = (pageNumber) =>{ 
            setCurrentPage(pageNumber)
        
        }

        let history = useHistory();
    return (
        <div>
           <div className="Header container">
          <div className="col-md-12">
             <div class="row d--f  jc--c">
                <h1 className="text-center text-white mt-4">Welcome To CryptoCurrency News Website</h1>
             </div>
             <div className ="row" style={{paddingLeft:'35px'}}>
              
                 <div className="cryptoList row d--f  ">

                    {
                   // DISPLAYING THE LIST OF THE COINS 
                 currentPosts.map((coin)=>{
                   return (
                      <div className="card col-md-4 mt-4 ml-5 mr-5" 
                      style={{width:'20rem',marginLeft:'15px',marginRight:'15px'}}
                      onClick={()=>{history.push(`/currency/${coin.id}`)}}>
                        <div className="card-body">
                              <h5 class="card-title">{coin.name}</h5>
                              <h6 class="card-subtitle mb-2 text-muted">
                              <NumberFormat value={coin.price_usd} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                              </h6>
                        </div>
                      </div>
                     );
                    })
                    }
                    <div className='mt-4' style={{marginBottom:'25px'}}></div>
                    <Pagination postsPerPage ={postsPerPage} totalPosts = {cryptoList.length} 
                    paginate ={paginate} />
             </div>
             </div>
          </div>
       </div>  
        </div>
    )
}
