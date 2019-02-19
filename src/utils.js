// chunksOf :: Int -> [a] -> [[a]]
const chunksOf = (n, xs) =>
    xs.reduce((a, _, i, xs) =>
        i % n ? a : a.concat([xs.slice(i, i + n)]), []);

// compose :: [(a -> a)] -> (a -> a)
const compose = fs => x => fs.reduceRight((a, f) => f(a), x);

// enumFromTo :: Int -> Int -> Maybe Int -> [Int]
const enumFromTo = (m, n, step) => {
    const d = (step || 1) * (n >= m ? 1 : -1);
    return Array.from({
        length: Math.floor((n - m) / d) + 1
    }, (_, i) => m + (i * d));
};

// intercalate :: String -> [a] -> String
const intercalate = (s, xs) => xs.join(s);

// min :: Ord a => a -> a -> a
const min = (a, b) => b < a ? b : a;

// transpose :: [[a]] -> [[a]]
const transpose = xs =>
    xs[0].map((_, iCol) => xs.map(row => row[iCol]));

// unlines :: [String] -> String
const unlines = xs => xs.join('\n');

// zipWith :: (a -> b -> c) -> [a] -> [b] -> [c]
const zipWith = (f, xs, ys) =>
    Array.from({
        length: min(xs.length, ys.length)
    }, (_, i) => f(xs[i], ys[i]));


const flatted = (arr = []) => arr.reduce((acc, cur) => acc.concat(cur), []);

export {
    chunksOf,
    enumFromTo,
    intercalate,
    zipWith,
    transpose,
    compose,
    unlines,
    flatted
}