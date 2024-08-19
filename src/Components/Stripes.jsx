import React from 'react'
import Stripe from "./Stripe"

const Stripes = () => {
  const stripeData = [
    {
        url: `https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6666ed38989e70633b7658b5_Singularity_logo.svg`,
        number: 11,
    },
    
    {
        url: `https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6694f0ff430a1585cff47451_botify-black.svg`,
        number: 15,
    },
    
    {
        url: `https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8e7a169e0b41018de63_Intesneye-logo-black.svg`,
        number: 25,
    },
    
    {
        url: `https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b9b2d3d56a1d071ef8_633c148a12c2cf0d8c755473_61957d908c68e7c692fe642e_haufe.svg`,
        number: 29,
    },
    
    {
        url: `https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bb11b6479ac4aa8cf9_633c14897f94fe831be72dad_61957e2b14f8c6babe1e0a4c_doxel.svg`,
        number: 12,
    },
    
    {
        url: `https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b597d53302df1b88f5_660191f0bd52de169c0dbc94_Logo-black.svg`,
        number: 16,
    },

  ]
    return (
    <div className='flex mt-[3.5vw]'>
        {stripeData.map((item, index)=><Stripe key={index} val={item} />)}
    </div>
  )
}

export default Stripes