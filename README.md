# A NodeJS CLI Tool For ERC20 Token

## Install dependencies

```
yarn install
```

## Running [Ethereum Test RPC (Ganache CLI)](https://github.com/trufflesuite/ganache-cli):

```bash
yarn testrpc
#or npm run testrpc
```

## Deploy example contact in another terminal window:

```
solar deploy node_modules/openzeppelin-solidity/contracts/token/ERC20/CappedToken.sol:CappedToken '[21000000]
'
```

## Check Balance

```
node index.js balance 0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1
```

output:

```
balance: 0
```

## Mint Tokens

```
node index.js mint 0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1 1000
```

example output:

```
mint tx: 0xd7f0ba07750626ffd82fa8ad909e2657bc3b181a7896e69212c55f8f83ae89f7
{ hash: '0xd7f0ba07750626ffd82fa8ad909e2657bc3b181a7896e69212c55f8f83ae89f7',
  nonce: '0x01',
  blockHash: '0xdf328377bbbe15edb59928bb0507a9f7e252e973bcd75decd579e94ee6d9e4af',
  blockNumber: '0x02',
  transactionIndex: '0x00',
  from: '0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1',
  to: '0xe78a0f7e598cc8b0bb87894b0f60dd2a88d6a8ab',
  value: '0x0',
  gas: '0x030d40',
  gasPrice: '0x04a817c800',
  input: '0x40c10f1900000000000000000000000090f8bf6a479f320ead074411a4b0e7944ea8c9c100000000000000000000000000000000000000000000000000000000000003e8',
  txid: '0xd7f0ba07750626ffd82fa8ad909e2657bc3b181a7896e69212c55f8f83ae89f7',
  method: 'mint',
  confirm: [Function: confirm]
}
✔ confirm mint
tx receipt: {
  "transactionHash": "0xd7f0ba07750626ffd82fa8ad909e2657bc3b181a7896e69212c55f8f83ae89f7",
  "transactionIndex": "0x00",
  "blockHash": "0xdf328377bbbe15edb59928bb0507a9f7e252e973bcd75decd579e94ee6d9e4af",
  "blockNumber": "0x02",
  "gasUsed": "0x010c1c",
  "cumulativeGasUsed": "0x010c1c",
  "contractAddress": null,
  "status": "0x01",
  "logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000080200000000000000000000000000000000000000000201000000020000000000008000000000000000000000000000000000000000000000000020000000000000000000800000000000000400000000010000000000000000000000000000000000000000000000000000000000000100000000000000080000000000000000000000000000000400000000000000000000000000000000002000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000000",
  "from": "0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1",
  "to": "0xe78a0f7e598cc8b0bb87894b0f60dd2a88d6a8ab",
  "logs": [
    {
      "0": "3e8",
      "amount": "3e8",
      "to": "0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1",
      "_eventName": "Mint"
    },
    {
      "0": "3e8",
      "value": "3e8",
      "from": "0x0000000000000000000000000000000000000000",
      "to": "0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1",
      "_eventName": "Transfer"
    }
  ],
  "rawlogs": [
    {
      "logIndex": "0x00",
      "transactionIndex": "0x00",
      "transactionHash": "0xd7f0ba07750626ffd82fa8ad909e2657bc3b181a7896e69212c55f8f83ae89f7",
      "blockHash": "0xdf328377bbbe15edb59928bb0507a9f7e252e973bcd75decd579e94ee6d9e4af",
      "blockNumber": "0x02",
      "address": "0xe78a0f7e598cc8b0bb87894b0f60dd2a88d6a8ab",
      "data": "0x00000000000000000000000000000000000000000000000000000000000003e8",
      "topics": [
        "0x0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885",
        "0x00000000000000000000000090f8bf6a479f320ead074411a4b0e7944ea8c9c1"
      ],
      "type": "mined"
    },
    {
      "logIndex": "0x01",
      "transactionIndex": "0x00",
      "transactionHash": "0xd7f0ba07750626ffd82fa8ad909e2657bc3b181a7896e69212c55f8f83ae89f7",
      "blockHash": "0xdf328377bbbe15edb59928bb0507a9f7e252e973bcd75decd579e94ee6d9e4af",
      "blockNumber": "0x02",
      "address": "0xe78a0f7e598cc8b0bb87894b0f60dd2a88d6a8ab",
      "data": "0x00000000000000000000000000000000000000000000000000000000000003e8",
      "topics": [
        "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
        "0x0000000000000000000000000000000000000000000000000000000000000000",
        "0x00000000000000000000000090f8bf6a479f320ead074411a4b0e7944ea8c9c1"
      ],
      "type": "mined"
    }
  ]
}
```

## Transfer Tokens

Send 100 tokens from `0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1` to `0xffcf8fdee72ac11b5c542428b35eef5769c409f0`:

```
node index.js transfer \
 0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1 \
 0xffcf8fdee72ac11b5c542428b35eef5769c409f0 \
 100
```

The output:

```
transfer tx: 0x0e96facc85351227e5fc68c3688713dd6fe6385a7cac4a63cb6c0f9ca5be0a92
{ hash: '0x0e96facc85351227e5fc68c3688713dd6fe6385a7cac4a63cb6c0f9ca5be0a92',
  nonce: '0x02',
  blockHash: '0xabc83d54866df78b9014048df29589ed6d3ab36ea851594dca79b88b67ecb1b2',
  blockNumber: '0x03',
  transactionIndex: '0x00',
  from: '0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1',
  to: '0xe78a0f7e598cc8b0bb87894b0f60dd2a88d6a8ab',
  value: '0x0',
  gas: '0x030d40',
  gasPrice: '0x04a817c800',
  input: '0xa9059cbb000000000000000000000000ffcf8fdee72ac11b5c542428b35eef5769c409f00000000000000000000000000000000000000000000000000000000000000064',
  txid: '0x0e96facc85351227e5fc68c3688713dd6fe6385a7cac4a63cb6c0f9ca5be0a92',
  method: 'transfer',
  confirm: [Function: confirm] }
✔ confirm transfer
```

## Get Contract Events

```
node index.js logs 0

[
  {
    "logIndex": "0x00",
    "transactionIndex": "0x00",
    "transactionHash": "0xd7f0ba07750626ffd82fa8ad909e2657bc3b181a7896e69212c55f8f83ae89f7",
    "blockHash": "0xdf328377bbbe15edb59928bb0507a9f7e252e973bcd75decd579e94ee6d9e4af",
    "blockNumber": "0x02",
    "address": "0xe78a0f7e598cc8b0bb87894b0f60dd2a88d6a8ab",
    "data": "0x00000000000000000000000000000000000000000000000000000000000003e8",
    "topics": [
      "0x0f6798a560793a54c3bcfe86a93cde1e73087d944c0ea20544137d4121396885",
      "0x00000000000000000000000090f8bf6a479f320ead074411a4b0e7944ea8c9c1"
    ],
    "type": "mined",
    "event": {
      "0": "3e8",
      "amount": "3e8",
      "to": "0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1",
      "_eventName": "Mint"
    }
  },
  {
    "logIndex": "0x01",
    "transactionIndex": "0x00",
    "transactionHash": "0xd7f0ba07750626ffd82fa8ad909e2657bc3b181a7896e69212c55f8f83ae89f7",
    "blockHash": "0xdf328377bbbe15edb59928bb0507a9f7e252e973bcd75decd579e94ee6d9e4af",
    "blockNumber": "0x02",
    "address": "0xe78a0f7e598cc8b0bb87894b0f60dd2a88d6a8ab",
    "data": "0x00000000000000000000000000000000000000000000000000000000000003e8",
    "topics": [
      "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
      "0x0000000000000000000000000000000000000000000000000000000000000000",
      "0x00000000000000000000000090f8bf6a479f320ead074411a4b0e7944ea8c9c1"
    ],
    "type": "mined",
    "event": {
      "0": "3e8",
      "value": "3e8",
      "from": "0x0000000000000000000000000000000000000000",
      "to": "0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1",
      "_eventName": "Transfer"
    }
  },
  {
    "logIndex": "0x00",
    "transactionIndex": "0x00",
    "transactionHash": "0x0e96facc85351227e5fc68c3688713dd6fe6385a7cac4a63cb6c0f9ca5be0a92",
    "blockHash": "0xabc83d54866df78b9014048df29589ed6d3ab36ea851594dca79b88b67ecb1b2",
    "blockNumber": "0x03",
    "address": "0xe78a0f7e598cc8b0bb87894b0f60dd2a88d6a8ab",
    "data": "0x0000000000000000000000000000000000000000000000000000000000000064",
    "topics": [
      "0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef",
      "0x00000000000000000000000090f8bf6a479f320ead074411a4b0e7944ea8c9c1",
      "0x000000000000000000000000ffcf8fdee72ac11b5c542428b35eef5769c409f0"
    ],
    "type": "mined",
    "event": {
      "0": "64",
      "value": "64",
      "from": "0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1",
      "to": "0xffcf8fdee72ac11b5c542428b35eef5769c409f0",
      "_eventName": "Transfer"
    }
  }
]
```

## Stream Contract Events

```
node index.js events

Subscribed to contract events
Ctrl-C to terminate events subscription
{ logIndex: '0x00',
  transactionIndex: '0x00',
  transactionHash: '0x0e96facc85351227e5fc68c3688713dd6fe6385a7cac4a63cb6c0f9ca5be0a92',
  blockHash: '0xabc83d54866df78b9014048df29589ed6d3ab36ea851594dca79b88b67ecb1b2',
  blockNumber: '0x03',
  address: '0xe78a0f7e598cc8b0bb87894b0f60dd2a88d6a8ab',
  data: '0x0000000000000000000000000000000000000000000000000000000000000064',
  topics:
   [ '0xddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef',
     '0x00000000000000000000000090f8bf6a479f320ead074411a4b0e7944ea8c9c1',
     '0x000000000000000000000000ffcf8fdee72ac11b5c542428b35eef5769c409f0' ],
  type: 'mined',
  event:
   Result {
     '0': <BN: 64>,
     value: <BN: 64>,
     from: '0x90f8bf6a479f320ead074411a4b0e7944ea8c9c1',
     to: '0xffcf8fdee72ac11b5c542428b35eef5769c409f0',
     _eventName: 'Transfer' } }
```
