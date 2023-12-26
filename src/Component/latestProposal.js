import React from 'react'

const latestProposal = () => {
  return (
    
     <div className='latestProposal'>
      <div className='textProposal'><h3>Latest Proposals</h3></div>
      <div className='proposalList'>
      <div className='lsitP'>
        <p className='sep'>SEP#10 </p>
        <p> stablecoin allocation</p>
      </div>
      <div className='btndiv'>
        <button>active</button>
      </div>
      </div>

      <div className='proposalList'>
      <div className='lsitP'>
        <p className='sep'>SEP#9 </p>
        <p> OBRA strategies and budget</p>
      </div>
      <div className='btndiv'>
        <button>active</button>
      </div>
      </div>


      <div className='proposalList'>
      <div className='lsitP'>
        <p className='sep'>SEP#8 </p>
        <p> stablecoin allocation</p>
      </div>
      <div className='btndiv'>
        <button>active</button>
      </div>
      </div>
     </div>
    
  )
}

export default latestProposal