// ugold-api/netlify/functions/cmc-totalsupply.js
exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            supply: "3,215,075" // Circulating supply for ugold
        })
    };
};