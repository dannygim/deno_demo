import { path } from "./deps.ts";
import { ExchangeRate } from "./get_latest_exchange_rates.ts";

export function writeText(filepath: string, text: string) {
    const dir = path.dirname(filepath);
    try {
        const dirInfo = Deno.lstatSync(dir);
        if (!dirInfo.isDirectory) {
            throw new Error(`${dir} is not a directory`);
        }
    } catch (_) {
        console.log('Creating directory:', dir);
        Deno.mkdirSync(dir, { recursive: true });
    }

    const encoder = new TextEncoder();
    const data = encoder.encode(text);
    Deno.writeFileSync(filepath, data);
}

export function writeExchangeRates(filepath: string, exchangeRates: ExchangeRate) {
    const text = JSON.stringify(exchangeRates, null, 2);
    writeText(filepath, text);
}

export function createSymbolicLink(filepath: string, linkpath: string) {
    try {
        Deno.removeSync(linkpath);
    } catch (_) {
        // do nothing..
    }
    const fileRealPath = Deno.realPathSync(filepath);
    Deno.symlinkSync(fileRealPath, linkpath, { type: "file" });
}

export function readExchangeRates(filepath: string): ExchangeRate {
    const fileRealPath = Deno.realPathSync(filepath);
    const text = Deno.readTextFileSync(fileRealPath);
    return JSON.parse(text);
}
