import React from 'react'
import "./middle.css"

const MidddleSection = () => {
  return (
    <div>
        <div className='wellet_balance'>
            <div className='MainBox'>
            <h5>available Balance</h5>
            <div className='itemContanier'>
            <p>wallet Balace</p>
            <p className='BUSD'>0.00 BUSD</p>
            </div>
            </div>

            <div className='MainBox'>
            <h5>Overview</h5>
            <div className='itemContanier'>
            <p>wallet Balace</p>
            <p className='BUSD'>0.00 BUSD</p>
            </div>
            </div>
            <div className='MainBox'>
            <h5>pending transactions</h5>
            <div className='itemContanier'>
            <p>wallet Balace</p>
            <p className='BUSD'> 0.00 BUSD </p>
            </div>
            </div>

        </div>
    </div>
  )
}

export default MidddleSection