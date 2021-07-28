import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

export  function Currency() {
    let {id} = useParams();
    let history = useHistory();
    const [coin,setCoin] = useState(
    {id:"",
    symbol:"",
    name:"",
    nameid:"",
    rank:0,
    price_usd:"",
    percent_change_24h:"",
    percent_change_1h:"",
    percent_change_7d:"",
    price_btc:"",
    market_cap_usd:"",
    volume24:0,
    volume24a:0,
    csupply:"",
    tsupply:"",
    msupply:""}
    )
    useEffect(() => {
        axios.get(`https://api.coinlore.net/api/ticker/?id=${id}`)
        .then((coin)=>{
          setCoin(
               {id:coin.data[0].id,
                symbol:coin.data[0].symbol,
                name:coin.data[0].name,
                nameid:coin.data[0].nameid,
                rank:coin.data[0].rank,
                price_usd:coin.data[0].price_usd,
                percent_change_24h:coin.data[0].percent_change_24h,
                percent_change_1h:coin.data[0].percent_change_1h,
                percent_change_7d:coin.data[0].percent_change_7d,
                price_btc:coin.data[0].price_btc,
                market_cap_usd:coin.data[0].market_cap_usd,
                volume24:coin.data[0].volume24,
                volume24a:coin.data[0].volume24a,
                csupply:coin.data[0].csupply,
                tsupply:coin.data[0].tsupply,
                msupply:coin.data[0].msupply}
          )
        })
    }, [])
    // {id:"",
    // symbol:"",
    // name:"",
    // nameid:"",
    // rank:0,
    // price_usd:"",
    // percent_change_24h:"",
    // percent_change_1h:"",
    // percent_change_7d:"",
    // price_btc:"",
    // market_cap_usd:"",
    // volume24:0,
    // volume24a:0,
    // csupply:"",
    // tsupply:"",
    // msupply:""}
    return (
        <div>
           <div className="Header container">
            <div className="text-center">
                <a className="text-white" style={{cursor:'pointer'}}
                onClick={()=>history.push('/')}>Home page</a>
            </div> 
             <div class="row d--f  jc--c">
                <h1 className="text-center text-white">Details of the CryptoCurrency : {coin.name}</h1>
             </div>
             <div className="row d--f jc--c" style={{paddingBottom:"50px"}}>
               <div className="card col-md-5 mt-4" style={{paddingBottom:"50px"}}>
                        <div className="card-body">
                              <h5 class="card-title">Symbol : {coin.symbol}</h5>
                              <h5 class="card-title">Name : {coin.name}</h5>
                              <h5 class="card-title">NameID : {coin.nameid}</h5>
                              <h5 class="card-title">Rank : {coin.rank}</h5>
                              <h5 class="card-title">Price Usd : {coin.price_usd}</h5>
                              <h5 class="card-title">Percent Change_24h : {coin.percent_change_24h}</h5>
                              <h5 class="card-title">Percent Change_1h : {coin.percent_change_1h}</h5>
                              <h5 class="card-title">Percent Change_7d : {coin.percent_change_7d}</h5>
                              <h5 class="card-title">Price Btc : {coin.price_btn}</h5>
                              <h5 class="card-title">Market cap_usd : {coin.market_cap_usd}</h5>
                              <h5 class="card-title">volume24 : {coin.volume24}</h5>
                              <h5 class="card-title">volume24a : {coin.volume24a}</h5>
                              <h5 class="card-title">csupply : {coin.csupply}</h5>
                              <h5 class="card-title">tsupply : {coin.tsupply}</h5>
                              <h5 class="card-title">msupply : {coin.msupply}</h5>
                        </div>
                </div>
             </div>
           </div> 
        </div>
    )
}
