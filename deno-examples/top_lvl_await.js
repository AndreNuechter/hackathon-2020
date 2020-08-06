const iterable = gen();

for await (const iter of iterable) console.log(iter);

function* gen() {
    let i = 0;

    while (i++ < 13) {
        yield new Promise(
            (resolve) => setTimeout(
                () => resolve(i), Math.random() * 500
            )
        );
    }
}