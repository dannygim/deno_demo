import { commandConvert, commandList, commandUpdate } from "./commands.ts";

if (Deno.args.length === 0) {
    console.log("Usage: deno run --allow-net --allow-env --allow-write main.ts <update|list|100 JPY to USD>");
    Deno.exit(1);
}

const command = Deno.args[0];

if (command === 'update') {
    console.log('Updating exchange rates data...');
    await commandUpdate();
} else if (command === 'list') {
    console.log('Prints exchange rates data...');
    commandList();
} else if (Deno.args.length === 4) {
    commandConvert(
        Number(command),
        Deno.args[1].toUpperCase(),
        Deno.args[3].toUpperCase()
    );
} else {
    console.log(`Unknown command: ${command}`);
    Deno.exit(1);
}

Deno.exit(0);
