function circleCircumference(r) {
    return 2 * Math.PI * r
};

function circleArea(r) {
    return Math.PI * Math.pow(r, 2)
};

module.exports = {circleArea, circleCircumference}