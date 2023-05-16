'use strict';

/**
 * hub-new router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::hub-new.hub-new');
/**[
	{
            method: 'GET',
	    path: '/hub-new/:slug',
            handler: 'hub-new.findOneBySlug'
	},
];*/
