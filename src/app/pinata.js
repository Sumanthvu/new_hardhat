import axios from "axios";

const PINATA_API_KEY = "6afd985e4170c0836a36";
const PINATA_SECRET_API_KEY = "a84f0cbe6f1de3c0b1634bb762187a9dbed93ce8f4ec0e0341687ae60a41f37d";

export async function uploadToPinata(name, description, category, imageFile) {
    const formData = new FormData();
    formData.append("file", imageFile);

    const metadata = JSON.stringify({
        name: name,
        keyvalues: { 
            description: description,
            category: category 
        },
    });

    formData.append("pinataMetadata", metadata);
    formData.append("pinataOptions", JSON.stringify({ cidVersion: 1 }));

    try {
        const res = await axios.post("https://api.pinata.cloud/pinning/pinFileToIPFS", formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                pinata_api_key: PINATA_API_KEY,
                pinata_secret_api_key: PINATA_SECRET_API_KEY,
            },
        });
        
        // ✅ After uploading the image, store metadata JSON on Pinata
        const metadataJson = {
            name,
            description,
            category,  
            image: `ipfs://${res.data.IpfsHash}`
        };

        const metadataRes = await axios.post("https://api.pinata.cloud/pinning/pinJSONToIPFS", metadataJson, {
            headers: {
                "Content-Type": "application/json",
                pinata_api_key: PINATA_API_KEY,
                pinata_secret_api_key: PINATA_SECRET_API_KEY,
            },
        });

        return `https://gateway.pinata.cloud/ipfs/${metadataRes.data.IpfsHash}`;
    } catch (error) {
        console.error("Error uploading to Pinata:", error);
        return null;
    }
}
