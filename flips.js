import { coinFlips, countFlips } from "./modules/coin.mjs";
import minimist from "minimist";

const args = minimist(process.argv.slice(2));
args['number'];
const num = args.number || 1;
const flip = coinFlips(num);
console.log(flip);
console.log(countFlips(flip));