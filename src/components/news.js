import {useEffect,useState} from 'react';
import axios from 'axios';
const category=["business","sports","health","entertainment","general","science","technology"]
export const News=(props)=>{
const [newsarticle,setNewsarticle]=useState([]);
const [selectedstate,setSelectedState]=useState(undefined);
    useEffect(()=>{
        axios({
            method:"get",
            url:"https://newsapi.org/v2/top-headlines",
            params:{
                country:"in",
                apiKey:"b3a0c75f3b614aaa846142f829daa150"
            }
        }).then((response)=>{
            setNewsarticle(response.data.articles);
        }).catch((err)=>{
            console.log(err)
        })

    },[])
    useEffect(()=>{
        if(selectedstate!=undefined){
        axios({
            method:"get",
            url:"https://newsapi.org/v2/top-headlines",
            params:{
                country:"in",
                apiKey:"b3a0c75f3b614aaa846142f829daa150",
                category:"selectedstate"
            }
        }).then((response)=>{
            setSelectedState(response.data.articles);
        }).catch((err)=>{
            console.log(err)
        })
    }

    },[selectedstate])
    return(
        <>
        <h1>daily news</h1>
        {
            category.map((category,index)=>{
                return(
                    <button key={index} className="btn btn-primary" onClick={()=>{setSelectedState(category)}}>{category}</button>

                )
            })
        }
        {
          newsarticle.map((article,index)=>{
            return(
                <div key={index}className="anu"   >
                    
  <img className="card-img-top" src={article.urlToImage} alt="Card image cap"/>
  
    <h5 className="card-title">{article.title}</h5>
    <p className="card-text">{article.description}</p>
    
  

                    

                </div>
            )
          })
        }
        </>
    )

}