import { path } from "./deps.ts";
import { getLatestExchangeRates } from "./get_latest_exchange_rates.ts";
import { createSymbolicLink, readExchangeRates, writeExchangeRates } from "./write_data.ts";

const latestDataPath = path.join("data", "latest.json");

export async function commandUpdate() {
    const data = await getLatestExchangeRates();
    const filename = `${data.timestamp}.json`;
    const filepath = path.join('data', filename);
    writeExchangeRates(filepath, data);
    createSymbolicLink(filepath, latestDataPath);
}

export function commandList() {
    const data = readExchangeRates(latestDataPath);
    console.log('Base:', data.base);
    console.log('Latest updated:', new Date(data.timestamp * 1000));
    for (const k in data.rates) {
        console.log(` - ${k}: ${data.rates[k]}`);
    }
}

export function commandConvert(amount: number, from: string, to: string) {
    let fromRate = 1.0;
    let toRate = 1.0;

    if (isNaN(amount)) {
        console.error('Invalid amount');
        Deno.exit(1);
    }

    if (from === to) {
        console.log(amount);
        Deno.exit(0);
    }

    const data = readExchangeRates(latestDataPath);

    if (from !== 'USD') {
        fromRate = data.rates[from];
        if (fromRate === undefined) {
            console.error('Invalid currency:', from);
            Deno.exit(1);
        }
    }

    if (to !== 'USD') {
        toRate = data.rates[to];
        if (toRate === undefined) {
            console.error('Invalid currency:', to);
            Deno.exit(1);
        }
    }

    console.log(`${amount} ${from} is ${amount * toRate / fromRate} ${to}`);
}
