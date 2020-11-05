const http = require("http");
const https = require("https");

/**
 * @tutorial https://developers.google.com/people/api/rest/?apix=true
 */
let GooglePeople = () => {
  const options = {
    host: "people.googleapis.com",
    port: 443
  };

  function _getRequest(options, result) {
    const protocol = options.port == 443 ? https : http;

    let options = { ...options, method: "GET" };

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

  function _postRequest(options, result) {
    const protocol = options.port == 443 ? https : http;

    let options =
      "method" in options ? options : { ...options, method: "POST" };

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

    request.write(options.data);

    request.on("error", (error) => {
      console.error(error);
    });

    request.end();
  }

  function _putRequest(options, result) {
    let options = { ...options, method: "PUT" };
    this._postRequest(options, result);
  }

  function _deleteRequest(options, result) {
    let options = { ...options, method: "DELETE" };
    this._postRequest(options, result);
  }

  function _patchRequest(options, result) {
    let options = { ...options, method: "PATCH" };
    this._patchRequest(options, result);
  }
};

module.exports = GooglePeople;