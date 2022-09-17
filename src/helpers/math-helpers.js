//Gaussian distribution defined by min, max, mean, and standard deviation
export function gaussian(min, max, mean, stdDev) {
    var x = Math.random();
    var y = Math.random();
    var z = Math.sqrt(-2.0 * Math.log(x)) * Math.cos(2.0 * Math.PI * y);
    return Math.round((z * stdDev + mean) * (max - min) + min);
}