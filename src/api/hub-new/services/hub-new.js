'use strict';

/**
 * hub-new service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::hub-new.hub-new');
