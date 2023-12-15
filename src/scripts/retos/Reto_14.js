// Puntos: 140, Complejidad cognitiva: 4
function maxGifts(houses) {
    const size = houses.length;

    if (size === 0) return 0;

    const dp = new Array(size).fill(0);
    const maxGifts = new Array(size).fill(0);

    dp[0] = houses[0];
    maxGifts[0] = houses[0];

    for (let i = 1; i < size; i++) {
        dp[i] = Math.max(dp[i - 1], (i >= 2 ? maxGifts[i - 2] : 0) + houses[i]);
        maxGifts[i] = Math.max(maxGifts[i - 1], dp[i]);
    }

    return maxGifts[size - 1];
}