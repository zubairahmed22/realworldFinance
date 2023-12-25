import { useState, useEffect } from "react";
import zmk from "./zkEVM.svg";
import toggle from "./toggle.svg";
import CountUp from "react-countup";
// import BUSD from "busd.png";
//wagmi
import { useAccount, useBalance, useConnect, useNetwork } from "wagmi";
import { getAccount, fetchBalance, watchAccount } from "@wagmi/core";
import { CustomBtn } from "./CustomBtn";
import { useDebounce } from "use-debounce";
import { ethers } from "ethers";
import {
  createPublicClient,
  http,
  parseAbiItem,
  stringify,
  createWalletClient,
  custom,
  validateTypedData,
  parseEther,
  formatUnits,
} from "viem";
import { sepolia, polygonMumbai } from "viem/chains";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RWT_ABI from "./abi/real-world.json";
import USDT_ABI from "./abi/usdt.json";
import PRES_ABI from "./abi/pre-sale.json";
import { CONFIG } from "./abi/config.js";
import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
  useWaitForTransaction,
  useContractEvent,
} from "wagmi";

import "./freesale.css";
const Rates = {
  stage_one: 5000,
  stage_two: 4545,
  stage_three: 4166,
  stage_four: 3846,
  stage_five: 3571,
  stage_six: 3333,
};

const PreSale = () => {
  //   const { connect, connectors } = useConnect();
  //   const { isConnected } = useAccount();
  const account = getAccount();

  const { chain, chains } = useNetwork();
  const [amount, setAmount] = useState(0);
  const [heading, setHeading] = useState(true);
  const { address, isConnected, status } = getAccount();
  const [reloadDta, setReloadDta] = useState(false);

  const [isError, setIsError] = useState();
  const [isLoadingBal, setIsLoadingBal] = useState();
  const [finalAmount, setFinalAmount] = useState(0);
  const [alert, setAlert] = useState(true);
  const [trxLoading, setTrxLoading] = useState(false);
  // const [debouncedFinalAmount] = useDebounce(finalAmount, 500)
  const [loading, setloading] = useState();
  const [tokenAmount, setTokenAmount] = useState();
  const [purchase, setPurchase] = useState();
  const [balanceRWT, setBalanceRWT] = useState(0);
  const [balance, setBalance] = useState(0);
  const [balance1, setBalance1] = useState(0);
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", () => {
        console.log("accountsChanged");
        // setReloadDta(!reloadDta);
        window.location.reload();
      });
      window.ethereum.on("chainChanged", () => {
        console.log("chainChanged");
        window.location.reload();
      });
    }
    // window.ethereum.addEventListener
  }, [reloadDta]);
  useEffect(() => {
    console.log(
      `Current connection status: ${isConnected ? "connected" : "disconnected"}`
    );
    getBalRWT();
    getBal();
    getBal1();
  }, [isConnected]);

  const trxHandler = async () => {
    setAlert(false);
    setTrxLoading(true);
    if (!account) {
      // setAlertContent(`Connect wallet`);
      console.log("not acc");
      setAlert(true);
      setTrxLoading(false);
      return;
    }
    if (window.ethereum) {
      const provider = await new ethers.providers.Web3Provider(window.ethereum);
      const { chainId } = await provider.getNetwork();

      if (chainId === CONFIG.ETH_CHAIN_ID) {
        //get signer
        let acc = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        let signer = await provider.getSigner(acc[0]);
        console.log("acc[0", acc[0]);
        // get owner
        const USDT_CONTRACT = new ethers.Contract(
          CONFIG.USDT_ADDRESS,
          USDT_ABI,
          signer
        );
        try {
          const transaction = await USDT_CONTRACT.approve(
            CONFIG.PS_CONTRACT_ADDRESS,
            await ethers.utils.parseUnits(purchase.toString(), 18)
            // tokenAmount.toString()
          );
          await transaction.wait();

          console.log("done1 trx", transaction.hash);
          if (transaction.hash) {
            console.log(
              "token",
              await ethers.utils.parseUnits(purchase.toString(), 18).toString()
            );
            const PRE_SALE_CONTRACT = new ethers.Contract(
              CONFIG.PS_CONTRACT_ADDRESS,
              PRES_ABI,
              signer
            );
            const transaction2 = await PRE_SALE_CONTRACT.buyTokensBUSD(
              acc[0],
              await ethers.utils.parseUnits(purchase.toString(), 18)
            );
            await transaction2.wait();
            console.log("done2 trx");
          }
        } catch (err) {
          // setAlertContent(`Error: ${err.message}`);
          setAlert(true);
          setTrxLoading(false);
          console.log("err", err);
        }
      } else {
        // setAlertContent("switch to ETH");
        setAlert(true);
        setTrxLoading(false);
      }
    }
  };
  const getBalRWT = async () => {
    setIsLoadingBal(true);
    if (address) {
      const balance = await fetchBalance({
        address: address,
        token: "0x46b44E8b5fBa7c5ea93831225cCA7ab9fD82D8f2",
        // chainId: 80001,
      });
      console.log("tokenAmount", balance.value);
      let amt = await ethers.utils
        .formatEther(balance.value.toString())
        .toString();

      setBalanceRWT(Number(amt).toFixed(4));
    }
  };
  const getBal = async () => {
    setIsLoadingBal(true);
    if (address) {
      const balance = await fetchBalance({
        address: address,
        token: "0xdA56371811e417c25BAD4401f0BC3922cbD7Ef1f",
        // chainId: 80001,
      });
      console.log("BusdAmount", balance.value);
      let amt = await ethers.utils
        .formatEther(balance.value.toString())
        .toString();
      setBalance(Number(amt).toFixed(4));
    }
  };
  const getBal1 = async () => {
    setIsLoadingBal(true);
    if (address) {
      const balance = await fetchBalance({
        address: address,
        // token: "0xdA56371811e417c25BAD4401f0BC3922cbD7Ef1f",
        // chainId: 80001,
      });
      console.log("BusdAmount", balance.value);
      let amt = await ethers.utils
        .formatEther(balance.value.toString())
        .toString();
      setBalance1(Number(amt).toFixed(4));
    }
  };
  const [showTab, setShowtab] = useState(1);
  const [switchtab, setSwitchtab] = useState(1);

  const purchaseToken = () => {
    console.log("tokenAmount", tokenAmount);
    if (tokenAmount == undefined) {
      console.log("min amount");
    } else {
      console.log("purchase");
      trxHandler();
    }
  };
  const conversion = async (e) => {
    setPurchase(e);
    if (e > 0) {
      let amt = await ethers.utils.parseUnits(e.toString(), 18);
      // let amt = (Number(e) * 5000) / 1000;
      // 0.0000000002;
      // let amt2 = await ethers.utils.parseUnits(e.toString(), 8).toString();

      let res = amt.mul(5000).div(1000);

      let amt2 = await ethers.utils.formatEther(res.toString()).toString();

      console.log("amt2", amt2);
      setTokenAmount(amt2);
    } else {
      setTokenAmount(0);
    }
  };
  const fixedConversion = async (e) => {
    let amt = await ethers.utils.parseUnits(e.toString(), 18);
    let res = amt.mul(5000).div(1000);

    let amt2 = await ethers.utils.formatEther(res.toString()).toString();
    console.log("amt2", amt2);
    return amt2;
  };
  return (
    <>
      <section className="inner-intro  padding bg-img1 overlay-dark light-color">
        <div className="container">
          <div className="row title">
            <h1>PreSale</h1>
            <div className="page-breadcrumb"></div>
          </div>
        </div>
      </section>

      <div className="RightMain">
        <div className="secondmainDiv">
          <div className="topSwapDiv">
            <h6>Swap</h6>
            <p>
              Swap any assets simply and securely with <br />
              coin-Ex self developed Algorithm
            </p>
            <div className="btnList">
              <button
                className={switchtab === 1 ? "navLink" : ""}
                onClick={() => setSwitchtab(1)}
              >
                BNB
              </button>
              <button
                className={switchtab === 2 ? "navLink" : ""}
                onClick={() => setSwitchtab(2)}
              >
                BUSD
              </button>
            </div>
          </div>
          <div className="btnList">
            <button
              className={showTab === 1 ? "navLink" : ""}
              onClick={() => setShowtab(1)}
            >
              Real World Token
            </button>
            <button
              className={showTab === 2 ? "navLink" : ""}
              onClick={() => setShowtab(2)}
            >
              Real Gold Token
            </button>
            <button
              className={showTab === 3 ? "navLink" : ""}
              onClick={() => setShowtab(3)}
            >
              Real Estate Token
            </button>{" "}
          </div>
          <div className={showTab === 1 ? "component active" : "component"}>
            <div className="ButtonContainer">
              <div className="divItem">
                <div className="iconDiv">
                  {switchtab == 1 ? (
                    <>
                      <img
                        width="30px"
                        height="30px"
                        src="assets/images/busd.png"
                        alt="BUSD"
                      />
                    </>
                  ) : (
                    <>
                      {" "}
                      <img
                        src="assets/images/bnb.svg"
                        alt="BNB icon"
                        className="bnbimage_icon"
                      />
                    </>
                  )}

                  <p>{switchtab == 1 ? "BNB" : "BUSD"}</p>
                </div>
                {/* <p>1,945.58</p> */}
                <input
                  type="number"
                  value={purchase}
                  onChange={(e) => conversion(e.target.value)}
                ></input>
              </div>

              <div className="divItemLeft">
                <p className="balance_text">
                  <span className="balance">Bal. </span>
                  {switchtab == 1 ? `${balance1} BNB` : `${balance} BUSD`}
                </p>
                {/* <p>$1946.30</p> */}
              </div>
            </div>

            <div className="toggleBox">
              <button>
                <img src={toggle} alt="toggle icon" className="toggle_icon" />
              </button>
            </div>
            <div className="ButtonContainer1">
              <div className="divItem">
                <div className="iconDiv">
                  <img src={zmk} alt="BNB icon" className="bnbimage_icon1" />
                  <p>RWT</p>
                </div>
                <input
                  type="number"
                  value={tokenAmount}
                  // onChange={(e) => conversion(e.target.value)}
                ></input>
              </div>

              <div className="divItemLeft">
                <p className="balance_text">
                  <span className="balance">Bal. </span>
                  {balanceRWT} RWT
                </p>
                {/* <p>984.16</p> */}
              </div>
            </div>
            <div className="coversion">
              <p>Conversion Rate</p>
              <p>1BUSD = 5 RWT</p>
            </div>

            {/* <div className="ConversionList">
              <div className="coversionItem">
                <p>conversion</p>
                <h5>$2.48</h5>
              </div>
              <div className="coversionItem">
                <p>Total Expected After Fees</p>
                <h5>$714.98</h5>
              </div>
              <div className="coversionItem">
                <p>The Least You'll Get at 100% Slippage</p>
                <h5>$714.98</h5>
              </div>
            </div> */}
          </div>

          <div className={showTab === 2 ? "component active" : "component"}>
            <div className="ButtonContainer">
              <div className="divItem">
                <div className="iconDiv">
                  <img
                    src="assets/images/bnb.svg"
                    alt="BNB icon"
                    className="bnbimage_icon"
                  />
                  <p>BUSD2</p>
                </div>
                <p>1,945.58</p>
              </div>

              <div className="divItemLeft">
                <p className="balance_text">
                  <span className="balance">Bal. </span>10.345.28 BUSD
                </p>
                <p>$1946.30</p>
              </div>
            </div>

            <div className="toggleBox">
              <button>
                <img src={toggle} alt="toggle icon" className="toggle_icon" />
              </button>
            </div>
            <div className="ButtonContainer1">
              <div className="divItem">
                <div className="iconDiv">
                  <img src={zmk} alt="BNB icon" className="bnbimage_icon1" />
                  <p>MATIC</p>
                </div>
                <p>842.31</p>
              </div>

              <div className="divItemLeft">
                <p className="balance_text">
                  <span className="balance">Bal. </span>11.892.74 MATIC
                </p>
                <p>984.16</p>
              </div>
            </div>
            <div className="coversion">
              <p>Conversion Rate</p>
              <p>1BUSD = 0.799059 MATIC</p>
            </div>

            <div className="ConversionList">
              <div className="coversionItem">
                <p>conversion</p>
                <h5>$2.48</h5>
              </div>
              <div className="coversionItem">
                <p>Total Expected After Fees</p>
                <h5>$714.98</h5>
              </div>
              <div className="coversionItem">
                <p>The Least You'll Get at 100% Slippage</p>
                <h5>$714.98</h5>
              </div>
            </div>
          </div>
          <div className={showTab === 3 ? "component active" : "component"}>
            <div className="ButtonContainer">
              <div className="divItem">
                <div className="iconDiv">
                  <img
                    src="assets/images/bnb.svg"
                    alt="BNB icon"
                    className="bnbimage_icon"
                  />
                  <p>BUSD3</p>
                </div>
                <p>1,945.58</p>
              </div>

              <div className="divItemLeft">
                <p className="balance_text">
                  <span className="balance">Bal. </span>10.345.28 BUSD
                </p>
                <p>$1946.30</p>
              </div>
            </div>

            <div className="toggleBox">
              <button>
                <img src={toggle} alt="toggle icon" className="toggle_icon" />
              </button>
            </div>
            <div className="ButtonContainer1">
              <div className="divItem">
                <div className="iconDiv">
                  <img src={zmk} alt="BNB icon" className="bnbimage_icon1" />
                  <p>MATIC</p>
                </div>
                <p>842.31</p>
              </div>

              <div className="divItemLeft">
                <p className="balance_text">
                  <span className="balance">Bal. </span>11.892.74 MATIC
                </p>
                <p>984.16</p>
              </div>
            </div>
            <div className="coversion">
              <p>Conversion Rate</p>
              <p>1BUSD = 0.799059 MATIC</p>
            </div>

            <div className="ConversionList">
              <div className="coversionItem">
                <p>conversion</p>
                <h5>$2.48</h5>
              </div>
              <div className="coversionItem">
                <p>Total Expected After Fees</p>
                <h5>$714.98</h5>
              </div>
              <div className="coversionItem">
                <p>The Least You'll Get at 100% Slippage</p>
                <h5>$714.98</h5>
              </div>
            </div>
          </div>
          <div className="bntDiv">
            {" "}
            {isConnected ? (
              <>
                <div>
                  <button onClick={() => purchaseToken()}>Purchase</button>
                </div>
              </>
            ) : (
              <CustomBtn />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PreSale;
