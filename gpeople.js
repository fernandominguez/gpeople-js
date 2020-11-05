// main
const http = require("http");
const https = require("https");

/**
 * @tutorial https://developers.google.com/people/api/rest/?apix=true
 */
const options = {
  host: "people.googleapis.com",
  port: 443,
  path: "/v1/contactGroups:batchGet",
  method: "GET",
  encoding: "utf8",
  headers: {
    "Content-Type": "application/json"
  }
};

function batchGetGooglePeople(options, result) {
  const protocol = options.port == 443 ? https : http;

  let output = "";

  const request = protocol.request(options, (response) => {
    response.setEncoding(options.encoding);

    response.on("data", (chunk) => {
      output += chunk;
    });

    response.on("end", () => {
      let object = JSON.parse(output);
      result(response.statusCode, object);
    });
  });

  request.on("error", (error) => {
    console.error(error);
  });

  request.end();
}

module.exports = batchGetGooglePeople;