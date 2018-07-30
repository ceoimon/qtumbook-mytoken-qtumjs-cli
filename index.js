// assume: node 8 or above
const ora = require("ora")
const parseArgs = require("minimist")

const {
  Ethereum,
} = require("qtumjs-eth")

const repoData = require("./solar.development.json")
const ethereum = new Ethereum("http://localhost:8545", repoData)
const myToken = ethereum.contract("CappedToken")

async function totalSupply() {
  const result = await myToken.call("totalSupply")

  // supply is a BigNumber instance (see: bn.js)
  const supply = result[0]

  console.log("supply", supply.toNumber())
}

async function balanceOf(owner) {
  const res = await myToken.call("balanceOf", [owner])

  // balance is a BigNumber instance (see: bn.js)
  const balance = res[0]

  console.log(`balance:`, balance.toNumber())
}

async function mint(toAddr, amount) {
  const tx = await myToken.send("mint", [toAddr, amount])
  const callResult = await myToken.call("mint", [toAddr, amount])
  console.log(callResult)

  console.log("mint tx:", tx.txid)
  console.log(tx)

  // or: await tx.confirm(0)
  const confirmation = tx.confirm(0)
  ora.promise(confirmation, "confirm mint")
  const receipt = await confirmation
  console.log("tx receipt:", JSON.stringify(receipt, null, 2))
}

async function transfer(fromAddr, toAddr, amount) {
  const tx = await myToken.send("transfer", [toAddr, amount], {
    from: fromAddr
  })

  console.log("transfer tx:", tx.txid)
  console.log(tx)

  // or: await tx.confirm(0)
  const confirmation = tx.confirm(0)
  ora.promise(confirmation, "confirm transfer")
  await confirmation
}

async function streamEvents() {
  console.log("Subscribed to contract events")
  console.log("Ctrl-C to terminate events subscription")

  myToken.onLog((entry) => {
    console.log(entry)
  })
}

async function getLogs(fromBlock, toBlock) {
  const logs = await myToken.logs({
    fromBlock,
    toBlock,
  })

  console.log(JSON.stringify(logs, null, 2))
}

async function main() {
  const originalArgv = process.argv.slice(2)
  const argv = parseArgs(originalArgv)

  const cmd = argv._[0]

  if (process.env.DEBUG) {
    console.log("argv", argv)
    console.log("cmd", cmd)
  }

  switch (cmd) {
    case "supply":
    case "totalSupply":
      await totalSupply()
      break
    case "balance":
      const owner = originalArgv[1]
      if (!owner) {
        throw new Error("please specify an address")
      }
      await balanceOf(owner)
      break
    case "mint":
      const mintToAddr = originalArgv[1]
      const mintAmount = parseInt(argv._[2])
      await mint(mintToAddr, mintAmount)

      break
    case "transfer":
      const fromAddr = originalArgv[1]
      const toAddr = originalArgv[2]
      const amount = argv._[3]

      await transfer(fromAddr, toAddr, amount)
      break
    case "logs":
      const fromBlock = parseInt(argv._[1]) || 0
      const toBlock = parseInt(argv._[2]) || "latest"

      await getLogs(fromBlock, toBlock)
      break
    case "events":
      await streamEvents() // logEvents will never return
      break
    default:
      console.log("unrecognized command", cmd)
  }
}

main().catch(err => {
  console.log("error", err)
})
