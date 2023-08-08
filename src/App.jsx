import "./App.css";
import React,{useState, useEffect} from "react";
import Totalcost from "./Components/Shapes/Totalcost";


// FUNCTIONAL COMPONENT
function App() {
  /* 
    *usestate is a Hook
    * Hook is a functionality that has been developed for functional component
    * whatever the functionality is available in class component that cannot be used inside the functionl component.
    * so to make all these functionality available for functional component hook has been introduced into react
  */
  const [items,setitems] = useState([])
  
  useEffect(()=>{
    fetch('http://localhost:3000/mocks/pricing.json')
    .then((response)=>response.json())
    .then((result)=>{
      if(result.products){
        setitems(result.products)
        console.log("Hello")
      }
    })
  },[]);

  const updatequantity =(d)=>
  {
    
      
      let answer = d.quantity+1;
      d.quantity = answer;
      console.log(d.quantity)
      let arr = items.filter((r)=>r.id!="ooooo")
      console.log(arr)
      setitems(arr)
  }

  const decreasequantity =(d)=>
  {
    if(d.quantity>0)
    {
      
      let answer = d.quantity-1;
      d.quantity = answer;
      console.log(d.quantity)
      let arr = items.filter((r)=>r.id!="ooooo")
      console.log(arr)
      setitems(arr)
    }
  }

  

  const totalcost =(d)=>
  {
    
      let amount = d.price*d.quantity;
      alert(amount);
      
  }
 
  return (
    <div className="App">


      



      {items.map((d) => (
              
                <div className="allah">
                  <div className="main">
                    {
                      
                         <div className="tharun">
                          <div className="centra"><img src={d.thumbnail} width="400px" height="400px"/></div>
                          </div>
                      
                       
                    }
                    <div>
                      <div className="judo"> 
                      {
                        d.images.map((r,i)=>(
                          <div><img  src={r} height="400px" width="400px"/></div>
                        ))
                      }
                      </div>
                    </div>
                    
                    </div>
                    <div className="internal">
                      <div className="one">
                       <div className="wordstyle">Product Name: {d.title}</div>
                       <div className="wordstyle">Product id: {d.id}</div>
                       <div className="wordstyle">Product Description: {d.description}</div>
                       <div className="wordstyle">Product Band: {d.brand}</div>
                       <div className="wordstyle">Product category: {d.category}</div>
                       <div className="wordstyle">Product Name: {d.title}</div>
                        </div>
                        <div className="two">
                        <div className="wordstyle">Product Pricing: ${d.price}</div>
                        <div className="wordstyle">Product Quantity: <button onClick={()=>decreasequantity(d)}>-</button>{d.quantity}<button onClick={()=>updatequantity(d)}>+</button></div>
                        <div className="wordstyle">Product discount percantage: {d.discountPercentage}</div>
                        <div className="wordstyle">Shipping Cost: Free</div>
                        <button onClick={()=>totalcost(d)}>Click to View Total Cost</button>

                        </div>
                    </div>
                    </div>
                
              
              
            ))}
           
          </div>
        
  );
}

export default App;