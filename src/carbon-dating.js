const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {

    if ((typeof sampleActivity !== 'string') || sampleActivity.trim().length === 0) return false;

    let sample = Number(sampleActivity);
    if (sample <= 0 || (sample > MODERN_ACTIVITY) || Number.isNaN(sample)) return false;

    const k = Math.LN2 / HALF_LIFE_PERIOD;
    let delta = Math.log(MODERN_ACTIVITY / sample);

    return Math.ceil(delta / k);
};
