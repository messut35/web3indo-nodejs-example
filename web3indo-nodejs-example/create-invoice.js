import fetch from "node-fetch";
import dotenv from "dotenv";

dotenv.config();

const API_KEY = process.env.WEB3INDO_API_KEY;

async function createInvoice() {
  const response = await fetch(
    "https://api.web3indo.com/v1/invoices",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": API_KEY
      },
      body: JSON.stringify({
        chain: "sepolia",
        token: "USDC",
        amount: "0.01"
      })
    }
  );

  const data = await response.json();

  console.log("Invoice created:");
  console.log(data);
}

createInvoice();
