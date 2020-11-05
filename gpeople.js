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

/**
 * @async
 * @method GET
 * @summary Get a list of contact groups owned by the authenticated user by specifying a list of contact group resource names.
 */
GooglePeople.prototype.batchGet = (options, result) => {
  let options = {...options, path: "/v1/contactGroups:batchGet"};
  this._getRequest(options, result);
};
/**
 * @async
 * @method POST
 * @summary Create a new contact group owned by the authenticated user.
 */
GooglePeople.prototype.create = (options, result) => {
  let options = {...options, path: "/v1/contactGroups"};
  this._postRequest(options, result);
};
/**
 * @async
 * @method DELETE
 * @summary Delete an existing contact group owned by the authenticated user by specifying a contact group resource name.
 */
GooglePeople.prototype.delete = (options, result) => {
  let options = {...options, path: "/v1/{resourceName=contactGroups/*}"};
  this._deleteRequest(options, result);
};
/**
 * @async
 * @method GET
 * @summary Get a specific contact group owned by the authenticated user by specifying a contact group resource name.
 */
GooglePeople.prototype.get = (options, result) => {
  let options = {...options, path: "/v1/{resourceName=contactGroups/*}"};
  this._getRequest(options, result);
};
/**
 * @async
 * @method GET
 * @summary List all contact groups owned by the authenticated user.
 */
GooglePeople.prototype.list = (options, result) => {
  let options = {...options, path: "/v1/contactGroups"};
  this._getRequest(options, result);
};
/**
 * @async
 * @method PUT
 * @summary Update the name of an existing contact group owned by the authenticated user.
 */
GooglePeople.prototype.update = (options, result) => {
  let options = {...options, path: "/v1/{contactGroup.resourceName=contactGroups/*}"};
  this._putRequest(options, result);
};
/**
 * @async
 * @method POST
 * @summary Modify the members of a contact group owned by the authenticated user.
 */
GooglePeople.prototype.modify = (options, result) => {
  let options = {...options, path: "/v1/{resourceName=contactGroups/*}/members:modify"};
  this._postRequest(options, result);
};
/**
 * @async
 * @method POST
 * @summary Copies an "Other contact" to a new contact in the user's "myContacts" group.
 */
GooglePeople.prototype.copyOtherContactToMyContactsGroup = (options, result) => {
  let options = {...options, path: "/v1/{resourceName=otherContacts/*}:copyOtherContactToMyContactsGroup"};
  this._postRequest(options, result);
};
/**
 * @async
 * @method GET 
 * @summary List all "Other contacts", that is contacts that are not in a contact group.
 */
GooglePeople.prototype.listOtherContacts = (options, result) => {
  let options = {...options, path: "/v1/otherContacts"};
  this._getRequest(options, result);
};
/**
 * @async
 * @method POST
 * @summary Create a new contact and return the person resource for that contact.
 */
GooglePeople.prototype.createContact = (options, result) => {
  let options = {...options, path: "/v1/people:createContact"};
  this._postRequest(options, result);
};
/**
 * @async
 * @method DELETE
 * @summary Delete a contact person.
 */
GooglePeople.prototype.deleteContact = (options, result) => {
  let options = {...options, path: "/v1/{resourceName=people/*}:deleteContact"};
  this._deleteRequest(options, result);
};
/**
 * @async
 * @method DELETE
 * @summary Delete a contact's photo.
 */
GooglePeople.prototype.deleteContactPhoto = (options, result) => {
  let options = {...options, path: "/v1/{resourceName=people/*}:deleteContactPhoto"};
  this._deleteRequest(options, result);
};
/**
 * @async
 * @method GET
 * @summary Provides information about a person by specifying a resource name.
 */
GooglePeople.prototype.get = (options, result) => {
  let options = {...options, path: "/v1/{resourceName=people/*}"};
  this._getRequest(options, result);
};
/**
 * @async
 * @method GET
 * @summary Provides information about a list of specific people by specifying a list of requested resource names.
 */
GooglePeople.prototype.getBatchGet = (options, result) => {
  let options = {...options, path: "/v1/people:batchGet"};
  this._getRequest(options, result);
};
/**
 * @async
 * @method GET
 * @summary Provides a list of domain profiles and domain contacts in the authenticated user's domain directory.
 */
GooglePeople.prototype.listDirectoryPeople = (options, result) => {
  let options = {...options, path: "/v1/people:listDirectoryPeople"};
  this._getRequest(options, result);
};
/**
 * @async
 * @method GET
 * @summary Provides a list of domain profiles and domain contacts in the authenticated user's domain directory that match the search query.
 */
GooglePeople.prototype.searchDirectoryPeople = (options, result) => {
  let options = {...options, path: "/v1/people:searchDirectoryPeople"};
  this._getRequest(options, result);
};
/**
 * @async
 * @method PATCH
 * @summary Update contact data for an existing contact person.
 */
GooglePeople.prototype.updateContact = (options, result) => {
  let options = {...options, path: "/v1/{person.resourceName=people/*}:updateContact"};
  this._patchRequest(options, result);
};
/**
 * @async
 * @method PATCH
 * @summary Update a contact's photo.
 */
GooglePeople.prototype.updateContactPhoto = (options, result) => {
  let options = {...options, path: "/v1/{resourceName=people/*}:updateContactPhoto"};
  this._patchRequest(options, result);
};
/**
 * @async
 * @method GET
 * @summary Provides a list of the authenticated user's contacts.
 */
GooglePeople.prototype.listConnections = (options, result) => {
  let options = {...options, path: "/v1/{resourceName=people/*}/connections"};
  this._getRequest(options, result);
};

module.exports = GooglePeople;