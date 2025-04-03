"use client"; 
import { useState } from "react";
import { ethers } from "ethers";
import axios from "axios";
import { create as ipfsHttpClient } from "ipfs-http-client";
import NFTMarketPlace from "../../artifacts/contracts/NFTMarketPlace.sol/NFTMarketPlace.json";


const contractAddress = "0x2624B928030f0Be53b68325272cB24a9562B01B6";
const client = ipfsHttpClient("https://api.pinata.cloud/pinning/pinFileToIPFS");
const PINATA_KEY = "6afd985e4170c0836a36";
const SECRET_API = "a84f0cbe6f1de3c0b1634bb762187a9dbed93ce8f4ec0e0341687ae60a41f37d";

export default function CreateNFT() {
  const [fileUrl, setFileUrl] = useState(null);
  const [formInput, setFormInput] = useState({
    name: "",
    description: "",
    price: "",
    category: "Artwork",
  });

  async function onChange(e) {
    const file = e.target.files[0];
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
        headers: {
          pinata_api_key: PINATA_KEY,
          pinata_secret_api_key: SECRET_API,
        },
      });
      setFileUrl(`https://gateway.pinata.cloud/ipfs/${res.data.IpfsHash}`);
    } catch (error) {
      console.log("Error uploading file to IPFS: ", error);
    }
  }

  async function createNFT() {
    const { name, description, price, category } = formInput;
    if (!name || !description || !price || !fileUrl) return;
    
    const metadata = {
      name,
      description,
      image: fileUrl,
    };
    
    const metadataRes = await axios.post("https://api.pinata.cloud/pinning/pinJSONToIPFS", metadata, {
      headers: {
        pinata_api_key: PINATA_KEY,
        pinata_secret_api_key: SECRET_API,
      },
    });
    const metadataUrl = `https://gateway.pinata.cloud/ipfs/${metadataRes.data.IpfsHash}`;
    await mintNFT(metadataUrl, ethers.utils.parseUnits(price, "ether"), category);
  }

  async function mintNFT(tokenURI, price, category) {
    try {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, NFTMarketPlace.abi, signer);
  
      const mintingPrice = ethers.utils.parseUnits("0.0000001", "ether");
  
      // Convert price to BigNumber
      const priceValue = ethers.utils.parseUnits(price.toString(), "ether");
  
      // Convert category string to a number
      const categoryMap = {
        "Artwork": 0,
        "Video": 1,
        "GIF": 2
      };
      const categoryValue = categoryMap[category]; // Get the corresponding number
  
      const transaction = await contract.createToken(tokenURI, priceValue, categoryValue, { value: mintingPrice });
      await transaction.wait();
  
      console.log("NFT Minted Successfully!");
      alert("NFT successfully minted!");
    } catch (error) {
      console.log("Error minting NFT: ", error);
    }
  }
  

  return (
    <div>
      <h2>Create NFT</h2>
      <input placeholder="NFT Name" onChange={(e) => setFormInput({ ...formInput, name: e.target.value })} />
      <textarea placeholder="NFT Description" onChange={(e) => setFormInput({ ...formInput, description: e.target.value })} />
      <input type="number" placeholder="Price in ETH" onChange={(e) => setFormInput({ ...formInput, price: e.target.value })} />
      <select onChange={(e) => setFormInput({ ...formInput, category: e.target.value })}>
        <option value="Artwork">Artwork</option>
        <option value="Video">Video</option>
        <option value="GIF">GIF</option>
      </select>
      <input type="file" onChange={onChange} />
      {fileUrl && <img src={fileUrl} alt="NFT preview" width="200px" />}
      <button onClick={createNFT}>Create NFT</button>
    </div>
  );
}
