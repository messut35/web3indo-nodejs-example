# Web3indo Node.js Example

This example shows how to integrate Web3indo crypto payment API into a Node.js backend.

Supported assets:

ETH  
USDC  
USDT  

---

## Setup

Clone repo:

```
git clone https://github.com/YOUR_USERNAME/web3indo-nodejs-example.git
```

Install dependencies:

```
npm install
```

Copy environment file:

```
cp .env.example .env
```

Edit:

```
WEB3INDO_API_KEY=your_api_key_here
```

---

## Create invoice

Run:

```
node create-invoice.js
```

---

## Start webhook listener

Run:

```
node webhook-server.js
```

Webhook endpoint:

```
http://localhost:3000/webhook
```

---

## Docs

Landing page:

https://web3indo.com
