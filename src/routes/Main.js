import React , {useEffect,useState} from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
//import ReactPaginate from 'react-paginate';
export  function Main() {
       const [cryptoList,setCryptoList] = useState([])
        useEffect(()=>{
        axios.get('https://api.coinlore.net/api/tickers/?start=200&limit=100')
        .then((response)=>{
            setCryptoList(response.data['data'])
            console.log(response.data['data'])
        })
        },[]);

        // handlePageClick = (data) => {
        //     let selected = data.selected;
        //     let offset = Math.ceil(selected * this.props.perPage);

        //     this.setState({ offset: offset }, () => {
        //     this.loadCommentsFromServer();
        //     });
        // };

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
                 cryptoList.map((coin)=>{
                   return (
                      <div className="card col-md-4 mt-4 ml-5 mr-5" 
                      style={{width:'20rem',marginLeft:'15px',marginRight:'15px'}}
                      onClick={()=>{history.push(`/currency/${coin.id}`)}}>
                        <div className="card-body">
                              <h5 class="card-title">{coin.symbol}</h5>
                              <h6 class="card-subtitle mb-2 text-muted">{coin.price_usd}</h6>
                        </div>
                      </div>
                     );
                    })
                    }

                    {/* <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={5}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.handlePageClick}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                    /> */}

                 
             </div>
             </div>
          </div>
       </div>  
        </div>
    )
}
