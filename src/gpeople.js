/* eslint-disable no-underscore-dangle */
import http from 'http';
import https from 'https';
/**
 * @class GooglePeople
 * @author "Fernando Domínguez"
 * @license "MIT"
 * @tutorial https://developers.google.com/people/api/rest/?apix=true
 */
class GooglePeople {
  constructor() {
    this._options = {
      host: 'people.googleapis.com',
      port: 443,
    };
  }

  /**
   * @private
   */
  _getRequest(opts, result) {
    const options = {
      ...this._options,
      ...opts,
      method: 'GET',
    };

    const protocol = options.port === 443 ? https : http;

    let output = '';

    const request = protocol.request(options, (response) => {
      response.setEncoding(options.encoding);

      response.on('data', (chunk) => {
        output += chunk;
      });

      response.on('end', () => {
        const object = JSON.parse(output);
        result(response.statusCode, object);
      });
    });

    request.on('error', (error) => {
      // eslint-disable-next-line no-console
      console.error(error);
    });

    request.end();
  }

  /**
   * @private
   */
  _postRequest(opts, result) {
    let options = {
      ...this._options,
      ...opts,
    };
    // eslint-disable-next-line prettier/prettier
    options = 'method' in options ? options : { ...options, method: 'POST' };

    const protocol = options.port === 443 ? https : http;

    let output = '';

    const request = protocol.request(options, (response) => {
      response.setEncoding(options.encoding);

      response.on('data', (chunk) => {
        output += chunk;
      });

      response.on('end', () => {
        const object = JSON.parse(output);
        result(response.statusCode, object);
      });
    });

    request.write(options.data);

    request.on('error', (error) => {
      // eslint-disable-next-line no-console
      console.error(error);
    });

    request.end();
  }

  /**
   * @private
   */
  _putRequest(opts, result) {
    const options = {
      ...opts,
      method: 'PUT',
    };
    this._postRequest(options, result);
  }

  /**
   * @private
   */
  _deleteRequest(opts, result) {
    const options = {
      ...opts,
      method: 'DELETE',
    };
    this._postRequest(options, result);
  }

  /**
   * @private
   */
  _patchRequest(opts, result) {
    const options = {
      ...opts,
      method: 'PATCH',
    };
    this._postRequest(options, result);
  }

  /**
   * @method GET
   * @summary Get a list of contact groups owned by the authenticated user
   *          by specifying a list of contact group resource names.
   * @async
   * @public
   */
  batchGetContactsGroups(opts, result) {
    const options = {
      ...opts,
      path: '/v1/contactGroups:batchGet',
    };
    this._getRequest(options, result);
  }

  /**
   * @method POST
   * @summary Create a new contact group owned by the authenticated user.
   * @async
   * @public
   */
  createContactsGroup(opts, result) {
    const options = {
      ...opts,
      path: '/v1/contactGroups',
    };
    this._postRequest(options, result);
  }

  /**
   * @method DELETE
   * @summary Delete an existing contact group owned by the authenticated user
   *          by specifying a contact group resource name.
   * @async
   * @public
   */
  deleteContactsGroup(opts, result) {
    const options = {
      ...opts,
      path: '/v1/{resourceName=contactGroups/*}',
    };
    this._deleteRequest(options, result);
  }

  /**
   * @method GET
   * @summary Get a specific contact group owned by the authenticated user
   *          by specifying a contact group resource name.
   * @async
   * @public
   */
  getContactsGroup(opts, result) {
    const options = {
      ...opts,
      path: '/v1/{resourceName=contactGroups/*}',
    };
    this._getRequest(options, result);
  }

  /**
   * @method GET
   * @summary List all contact groups owned by the authenticated user.
   * @async
   * @public
   */
  listContactsGroups(opts, result) {
    const options = {
      ...opts,
      path: '/v1/contactGroups',
    };
    this._getRequest(options, result);
  }

  /**
   * @method PUT
   * @summary Update the name of an existing contact group owned by the authenticated user.
   * @async
   * @public
   */
  updateContactsGroup(opts, result) {
    const options = {
      ...opts,
      path: '/v1/{contactGroup.resourceName=contactGroups/*}',
    };
    this._putRequest(options, result);
  }

  /**
   * @method POST
   * @summary Modify the members of a contact group owned by the authenticated user.
   * @async
   * @public
   */
  modifyContactsGroup(opts, result) {
    const options = {
      ...opts,
      path: '/v1/{resourceName=contactGroups/*}/members:modify',
    };
    this._postRequest(options, result);
  }

  /**
   * @method POST
   * @summary Copies an "Other contact" to a new contact in the user's "myContacts" group.
   * @async
   * @public
   */
  copyOtherContactToMyContactsGroup(opts, result) {
    const options = {
      ...opts,
      path:
        '/v1/{resourceName=otherContacts/*}:copyOtherContactToMyContactsGroup',
    };
    this._postRequest(options, result);
  }

  /**
   * @method GET
   * @summary List all "Other contacts", that is contacts that are not in a contact group.
   * @async
   * @public
   */
  listOtherContacts(opts, result) {
    const options = {
      ...opts,
      path: '/v1/otherContacts',
    };
    this._getRequest(options, result);
  }

  /**
   * @method POST
   * @summary Create a new contact and return the person resource for that contact.
   * @async
   * @public
   */
  createContact(opts, result) {
    const options = {
      ...opts,
      path: '/v1/people:createContact',
    };
    this._postRequest(options, result);
  }

  /**
   * @method DELETE
   * @summary Delete a contact person.
   * @async
   * @public
   */
  deleteContact(opts, result) {
    const options = {
      ...opts,
      path: '/v1/{resourceName=people/*}:deleteContact',
    };
    this._deleteRequest(options, result);
  }

  /**
   * @method DELETE
   * @summary Delete a contact's photo.
   * @async
   * @public
   */
  deleteContactPhoto(opts, result) {
    const options = {
      ...opts,
      path: '/v1/{resourceName=people/*}:deleteContactPhoto',
    };
    this._deleteRequest(options, result);
  }

  /**
   * @method GET
   * @summary Provides information about a person by specifying a resource name.
   * @async
   * @public
   */
  getContact(opts, result) {
    const options = {
      ...opts,
      path: '/v1/{resourceName=people/*}',
    };
    this._getRequest(options, result);
  }

  /**
   * @method GET
   * @summary Provides information about a list of specific people
   *          by specifying a list of requested resource names.
   * @async
   * @public
   */
  getBatchGetPeople(opts, result) {
    const options = {
      ...opts,
      path: '/v1/people:batchGet',
    };
    this._getRequest(options, result);
  }

  /**
   * @method GET
   * @summary Provides a list of domain profiles and domain contacts
   *          in the authenticated user's domain directory.
   * @async
   * @public
   */
  listDirectoryPeople(opts, result) {
    const options = {
      ...opts,
      path: '/v1/people:listDirectoryPeople',
    };
    this._getRequest(options, result);
  }

  /**
   * @method GET
   * @summary Provides a list of domain profiles and domain contacts
   *          in the authenticated user's domain directory that match the search query.
   * @async
   * @public
   */
  searchDirectoryPeople(opts, result) {
    const options = {
      ...opts,
      path: '/v1/people:searchDirectoryPeople',
    };
    this._getRequest(options, result);
  }

  /**
   * @method PATCH
   * @summary Update contact data for an existing contact person.
   * @async
   * @public
   */
  updateContact(opts, result) {
    const options = {
      ...opts,
      path: '/v1/{person.resourceName=people/*}:updateContact',
    };
    this._patchRequest(options, result);
  }

  /**
   * @method PATCH
   * @summary Update a contact's photo.
   * @async
   * @public
   */
  updateContactPhoto(opts, result) {
    const options = {
      ...opts,
      path: '/v1/{resourceName=people/*}:updateContactPhoto',
    };
    this._patchRequest(options, result);
  }

  /**
   * @method GET
   * @summary Provides a list of the authenticated user's contacts.
   * @async
   * @public
   */
  listConnections(opts, result) {
    const options = {
      ...opts,
      path: '/v1/{resourceName=people/*}/connections',
    };
    this._getRequest(options, result);
  }
}

export default GooglePeople;
