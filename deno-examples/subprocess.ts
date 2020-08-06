const fileNames = Deno.args;

const p = Deno.run({
    cmd: [
        "deno",
        "run",
        "--allow-read",
        "./unix_cat.js",
        ...fileNames,
    ],
    stdout: "piped",
    stderr: "piped",
});

const { code } = await p.status();

if (code === 0) {
    const rawOutput = await p.output();
    await Deno.stdout.write(rawOutput);
} else {
    const rawError = await p.stderrOutput();
    const errorString = new TextDecoder().decode(rawError);
    console.log(errorString);
}

Deno.exit(code);