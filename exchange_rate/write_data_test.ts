import { assert, assertEquals } from "./deps_test.ts";
import { ExchangeRate } from "./get_latest_exchange_rates.ts";
import { writeExchangeRates, writeText } from "./write_data.ts";

Deno.test("Test writeText", (): void => {
    const text = "Hello, World!";
    const filename = `writeText.${Date.now()}.txt`;

    try {
        writeText(filename, text);
        const fileInfo = Deno.statSync(filename);
        assert(fileInfo.isFile);
        if (fileInfo.isFile) {
            const actualText = Deno.readTextFileSync(filename);
            assertEquals(actualText, text);
            Deno.removeSync(filename);
        } else {
            assert(false);
        }
    } catch (error) {
        console.error(error);
        assert(false);
    }
});

Deno.test("Test writeExchangeRates", (): void => {
    const filename = `writeExchangeRates.${Date.now()}.txt`;
    const data: ExchangeRate = {
        "success": true,
        "timestamp": 1664013303,
        "base": "EUR",
        "date": "2022-09-24",
        "rates": {
            "AED": 3.559105,
            "AFN": 86.151217,
            "ALL": 116.321643,
            "AMD": 404.265711,
            "ANG": 1.757325,
            "AOA": 417.772865,
            "ARS": 141.5571,
            "AUD": 1.48432,
            "AWG": 1.744135,
            "AZN": 1.651085,
            "BAM": 1.955858,
            "BBD": 1.968828,
            "BDT": 100.53062,
            "BGN": 1.95492,
            "BHD": 0.365405,
            "BIF": 2013.688446,
            "BMD": 0.968964,
            "BND": 1.39102,
            "BOB": 6.737795,
            "BRL": 5.101329,
            "BSD": 0.975114,
            "BTC": 5.0904348e-05,
            "BTN": 78.878614,
            "BWP": 12.949283,
            "BYN": 2.461635,
            "BYR": 18991.688279,
            "BZD": 1.965428,
            "CAD": 1.318072,
            "CDF": 1981.531092,
            "CHF": 0.950626,
            "CLF": 0.033384,
            "CLP": 921.157012,
            "CNY": 6.907165,
            "COP": 4256.360126,
            "CRC": 614.968687,
            "CUC": 0.968964,
            "CUP": 25.677538,
            "CVE": 110.266558,
            "CZK": 24.613655,
            "DJF": 173.592452,
            "DKK": 7.434959,
            "DOP": 51.927734,
            "DZD": 136.257925,
            "EGP": 19.004268,
            "ERN": 14.534455,
            "ETB": 51.512628,
            "EUR": 1,
            "FJD": 2.215875,
            "FKP": 0.837762,
            "GBP": 0.892355,
            "GEL": 2.737361,
            "GGP": 0.837762,
            "GHS": 9.799538,
            "GIP": 0.837762,
            "GMD": 53.05114,
            "GNF": 8425.619022,
            "GTQ": 7.643608,
            "GYD": 204.002882,
            "HKD": 7.606113,
            "HNL": 24.07134,
            "HRK": 7.516449,
            "HTG": 115.546632,
            "HUF": 406.168299,
            "IDR": 14643.076145,
            "ILS": 3.400312,
            "IMP": 0.837762,
            "INR": 78.733633,
            "IQD": 1423.150104,
            "IRR": 41035.612517,
            "ISK": 139.608662,
            "JEP": 0.837762,
            "JMD": 148.163093,
            "JOD": 0.687034,
            "JPY": 138.926626,
            "KES": 117.594461,
            "KGS": 79.034108,
            "KHR": 4015.356722,
            "KMF": 492.863752,
            "KPW": 872.067362,
            "KRW": 1378.603148,
            "KWD": 0.300331,
            "KYD": 0.812511,
            "KZT": 469.846637,
            "LAK": 15785.522989,
            "LBP": 1474.320826,
            "LKR": 351.028459,
            "LRD": 149.220746,
            "LSL": 17.393268,
            "LTL": 2.861098,
            "LVL": 0.586117,
            "LYD": 4.882969,
            "MAD": 10.59875,
            "MDL": 18.955568,
            "MGA": 4122.14823,
            "MKD": 61.61587,
            "MMK": 2047.665726,
            "MNT": 3124.367265,
            "MOP": 7.883711,
            "MRO": 345.91987,
            "MUR": 43.167699,
            "MVR": 14.970856,
            "MWK": 1000.855138,
            "MXN": 19.572683,
            "MYR": 4.436404,
            "MZN": 61.849318,
            "NAD": 17.393264,
            "NGN": 417.187681,
            "NIO": 35.044495,
            "NOK": 10.316489,
            "NPR": 126.205783,
            "NZD": 1.686768,
            "OMR": 0.37309,
            "PAB": 0.975014,
            "PEN": 3.789954,
            "PGK": 3.479949,
            "PHP": 56.92698,
            "PKR": 233.287595,
            "PLN": 4.744355,
            "PYG": 6842.096652,
            "QAR": 3.528034,
            "RON": 4.941331,
            "RSD": 117.297936,
            "RUB": 56.078811,
            "RWF": 1031.524571,
            "SAR": 3.645472,
            "SBD": 7.922975,
            "SCR": 13.927921,
            "SDG": 559.580094,
            "SEK": 10.942682,
            "SGD": 1.385545,
            "SHP": 1.334654,
            "SLL": 14820.299932,
            "SOS": 549.890446,
            "SRD": 26.613594,
            "STD": 20055.592006,
            "SVC": 8.531121,
            "SYP": 2434.550642,
            "SZL": 17.430846,
            "THB": 36.346186,
            "TJS": 9.726437,
            "TMT": 3.401063,
            "TND": 3.19471,
            "TOP": 2.323612,
            "TRY": 17.844148,
            "TTD": 6.632494,
            "TWD": 30.817927,
            "TZS": 2273.882121,
            "UAH": 36.011709,
            "UGX": 3727.752659,
            "USD": 0.968964,
            "UYU": 39.836563,
            "UZS": 10735.941658,
            "VND": 22974.129036,
            "VUV": 115.269739,
            "WST": 2.640986,
            "XAF": 655.966266,
            "XAG": 0.051307,
            "XAU": 0.000589,
            "XCD": 2.618673,
            "XDR": 0.757011,
            "XOF": 655.966266,
            "XPF": 119.715816,
            "YER": 242.60432,
            "ZAR": 17.369876,
            "ZMK": 8721.839427,
            "ZMW": 15.60122,
            "ZWL": 312.005912
        }
    };


    try {
        writeExchangeRates(filename, data);
        const fileInfo = Deno.statSync(filename);
        assert(fileInfo.isFile);
        if (fileInfo.isFile) {
            const text = Deno.readTextFileSync(filename);
            const json: ExchangeRate = JSON.parse(text);
            assertEquals(json.success, data.success);
            assertEquals(json.timestamp, data.timestamp);
            assertEquals(json.base, data.base);
            assertEquals(json.date, data.date);
            assertEquals(json.rates.length, data.rates.length);

            Deno.removeSync(filename);
        } else {
            assert(false);
        }
    } catch (error) {
        console.error(error);
        assert(false);
    }
});
