# webcrypto-benchmark

Chrome bug: https://bugs.chromium.org/p/chromium/issues/detail?id=449009

## Results

On my 12" Macbook (2 cores), you can see that Chrome is half the speed of Safari and Firefox.

Chrome:

SHA-1 1MB x 77.12 ops/sec ±1.07% (49 runs sampled)
SHA-1 100MB x 0.74 ops/sec ±3.49% (8 runs sampled)

Firefox:

SHA-1 1MB x 113 ops/sec ±1.56% (52 runs sampled)
SHA-1 100MB x 1.23 ops/sec ±3.52% (10 runs sampled)

Safari:

SHA-1 1MB x 126 ops/sec ±1.90% (56 runs sampled)
SHA-1 100MB x 1.40 ops/sec ±0.81% (11 runs sampled)
