const { Random } = require('random-js');

const randomInt = (min = 1, max = 10000) => {
    const random = new Random(Random.nodeCrypto);
    return random.integer(min, max);
};

module.exports = {
    randomInt
}
