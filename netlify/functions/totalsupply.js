// ugold-api/netlify/functions/totalsupply.js
exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            supply: "3,215,075" // Total supply for ugold
        })
    };
};