import React from "react";

const latestProposal = () => {
  return (
    <div className="latestProposal">
      <div className="textProposal">
        <h3>Profits</h3>
      </div>
      <div className="proposalList">
        <div className="lsitP">
          <p className="sep">amount </p>
          <p> stablecoin allocation : $1,444</p>
        </div>
        <div className="btndiv">
          <button>Claim</button>
        </div>
      </div>
    </div>
  );
};

export default latestProposal;
