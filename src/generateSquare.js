import { zipWith, enumFromTo, chunksOf, compose, transpose } from './utils';

export const generateMagicSquare = n =>
    n % 2 !== 0 ? (
        compose([cycled, transpose, cycled, enumSquare])(n)
    ) : [];

const enumSquare = n =>
    chunksOf(n, enumFromTo(1, n * n));

const cycled = rows => {
    const d = Math.floor(rows.length / 2);
    return zipWith(listCycle, enumFromTo(d, -d), rows)
};

const listCycle = (n, xs) => {
    const d = -(n % xs.length);
    return (d !== 0 ? xs.slice(d)
        .concat(xs.slice(0, d)) : xs);
};
