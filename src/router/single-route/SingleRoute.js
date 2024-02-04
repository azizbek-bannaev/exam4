import React, { useEffect } from 'react'
import { PRODUCTS } from "../../static/index"
import { useParams } from 'react-router-dom'

import "./SingleRoute.css"

function SingleRoute() {
    const params = useParams()
    const oneItem = PRODUCTS.find((el)=> el.id === params.id)
    console.log(oneItem);


    useEffect(()=>{
        window.scrollTo(0, 0);
    })




    if (!oneItem) {
        return <div style={{textAlign:"center"}}>
            <img width={400} src="https://assets-global.website-files.com/646218c67da47160c64a84d5/6463461598f456345c3a266b_54.png" alt="" />
            <h2 >Bunday mahsulot yoq</h2>
        </div>
    }


  return (
    <>
      <div className='single__route'>
        <div>
        <img src={oneItem?.url} width={400} alt="" />
        </div>
        <div>
        <h2>{oneItem?.title}</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus atque, nihil quis quo animi veniam odio eligendi? Aspernatur cupiditate deleniti dolorem? Dolorum molestias voluptates quasi sed, esse dolor qui facere?</p>
        <h1>{oneItem?.price }so'm</h1>
        </div>
    </div>
    
    </>
  )
}

export default SingleRoute