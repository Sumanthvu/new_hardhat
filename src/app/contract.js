import { ethers } from "ethers";
import contractABI from "./contract_data/NFTMarketPlace.json";
import Address from "./contract_data/NFTMarketPlace-address.json";

const contractAddress = Address.address;

export const getEthereumContract = () => {
    if (typeof window.ethereum === "undefined") {
        console.error("Ethereum wallet is not connected. Please install MetaMask.");
        return null;
    }

    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        return new ethers.Contract(contractAddress, contractABI.abi, signer);
    } catch (error) {
        console.error("Error creating contract instance:", error);
        return null;
    }
};
