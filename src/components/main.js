import React, {useEffect, useState, useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import { connect } from "../redux/blockchain/blockchainActions";
import { fetchData } from "../redux/data/dataActions";

export default function main() {
	const dispatch = useDispatch();
	const blockchain = useSelector((state) => state.blockchain);
	const data = useSelector((state) => state.data);
    const [claimingNft, setClaimingNft] = useState(false);
    const [feedback, setFeedback] = useState(`Click buy to mint your NFT.`);
    const [mintAmount, setMintAmount] = useState(1);
	const [CONFIG, SET_CONFIG] = useState({
		CONTRACT_ADDRESS: "",
		SCAN_LINK: "",
		NETWORK: {
		  NAME: "",
		  SYMBOL: "",
		  ID: 0,
		},
		NFT_NAME: "",
		SYMBOL: "",
		MAX_SUPPLY: 1,
		WEI_COST: 0,
		DISPLAY_COST: 0,
		GAS_LIMIT: 0,
		MARKETPLACE: "",
		MARKETPLACE_LINK: "",
		SHOW_BACKGROUND: false,
	});

    const claimNFTs = () => {
        let cost = CONFIG.WEI_COST;
        let gasLimit = CONFIG.GAS_LIMIT;
        let totalCostWei = String(cost * mintAmount);
        let totalGasLimit = String(gasLimit * mintAmount);
        console.log("Cost: ", totalCostWei);
        console.log("Gas limit: ", totalGasLimit);
        setFeedback(`Minting your ${CONFIG.NFT_NAME}...`);
        setClaimingNft(true);
        blockchain.smartContract.methods
          .mint(mintAmount)
          .send({
            gasLimit: String(totalGasLimit),
            to: CONFIG.CONTRACT_ADDRESS,
            from: blockchain.account,
            value: totalCostWei,
          })
          .once("error", (err) => {
            console.log(err);
            setFeedback("Sorry, something went wrong please try again later.");
            setClaimingNft(false);
          })
          .then((receipt) => {
            console.log(receipt);
            setFeedback(
              `WOW, the ${CONFIG.NFT_NAME} is yours! go visit Opensea.io to view it.`
            );
            setClaimingNft(false);
            dispatch(fetchData(blockchain.account));
          });
    };
    
    const decrementMintAmount = () => {
        let newMintAmount = mintAmount - 1;
        if (newMintAmount < 1) {
            newMintAmount = 1;
        }
        setMintAmount(newMintAmount);
    };

    const incrementMintAmount = () => {
        let newMintAmount = mintAmount + 1;
        if (newMintAmount > 10) {
            newMintAmount = 10;
        }
        setMintAmount(newMintAmount);
    };

	const getData = () => {
    	if (blockchain.account !== "" && blockchain.smartContract !== null) {
      	dispatch(fetchData(blockchain.account));
    	}
  	};

  	const getConfig = async () => {
    	const configResponse = await fetch("/config/config.json", {
      	headers: { 
        	"Content-Type": "application/json",
        	Accept: "application/json",
      		},
    	});
    	const config = await configResponse.json();
    	SET_CONFIG(config);
  	};

	useEffect(() => {
    	getConfig();
  	}, []);

  	useEffect(() => {
    	getData();
  	}, [blockchain.account]);

	function connectClick() {
		dispatch(connect());
		getData();
	}

	return (
		<div className="main-content">
            <div className="hero">
                <p className="hero--text">
                    It a template NFT minting DAPP.
                    Please connect the wallet to Harmony Testnet.
                    Try to mint some NFTs.
                </p>
                <p className="hero--text">
                    Contract Address: {CONFIG.CONTRACT_ADDRESS}
                </p>
            </div>
            <div className="mint--container">
                <h1 className="minted-amount">
                    {data.totalSupply} / {data.maxSupply}
                </h1>
                <h2>
                    1 {CONFIG.SYMBOL} costs {CONFIG.DISPLAY_COST}{" "}
                    {CONFIG.NETWORK.SYMBOL}.
                </h2>
                <div className="quantity--container">
                    <button className="round-button" 
                            onClick={(e) => {
                                e.preventDefault();
                                decrementMintAmount();
                                }
                    }>
                        -
                    </button>
                    <h3>
                        {mintAmount}
                    </h3>
                    <button className="round-button" 
                            onClick={(e) => {
                                e.preventDefault();
                                incrementMintAmount();
                                }
                    }>
                        +
                    </button>
                </div>
                <button 
                    className="nav--button"
                    disabled={claimingNft ? 1 : 0} 
                    onClick={(e) => {
                        e.preventDefault();
                        claimNFTs();
                        getData();
                    }}>
                        Mint
                </button>
            </div>
        </div>
	)
}