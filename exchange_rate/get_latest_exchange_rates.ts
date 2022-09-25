import { dotenv } from "./deps.ts";

// dot env
await dotenv.configAsync({ export: true });

export type ExchangeRate = {
    success: boolean;
    timestamp: number;
    base: string;
    date: string;
    rates: Record<string, number>;
};

export async function getLatestExchangeRates(): Promise<ExchangeRate> {
    const apikey = Deno.env.get("APILAYER_API_KEY");
    if (apikey === undefined) {
        throw new Error("APILAYER_API_KEY is not set");
    }

    const headers = new Headers();
    headers.append("apikey", apikey);

    const requestOptions: RequestInit = {
        method: "GET",
        redirect: "follow",
        headers: headers,
    };
    const response = await fetch("https://api.apilayer.com/exchangerates_data/latest?base=USD", requestOptions);
    return await response.json();
}

if (import.meta.main) {
    try {
        const result = await getLatestExchangeRates();
        console.log(JSON.stringify(result, null, 2));
    } catch (error) {
        console.error('Failed to get exchange rates data.', error);
    }
}
