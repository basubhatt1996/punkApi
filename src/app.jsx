import { useEffect, useState } from 'preact/hooks'
import './app.css'

export function App() {
  const [data, setData] = useState([]);
  useEffect(async()=>{
    const res= await fetch('https://api.punkapi.com/v2/beers');
    const result= await res.json();
    setData(result);
  },[])

  return (
    <>
    <h1>Showing data fetched from punkApi</h1>
    <div className="card-group">
     {data.map((item)=>{
      return (   
           <div className="col-sm-4" >
              <div class="card text-white bg-secondary mb-3" style="width: 25rem;">
                  <img class="card-img-top" src={item.image_url} alt="Card image cap" />
                  <div class="card-body">
                      <h5 class="card-title">{item.name}</h5>
                      <p class="card-text">{item.description}</p>
          </div>
       </div>       
     </div>
     )
     })}
     </div>
    </>
  )
}
