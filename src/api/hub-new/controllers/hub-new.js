'use strict';

/**
 * hub-new controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::hub-new.hub-new', ({strapi}) => ({
    async findOne(ctx) {
	const { id } = ctx.params;
	
        const results = await strapi.db.query('api::hub-new.hub-new').findOne({
            where: { slug: id },
            populate: ['Pictures'],
	});
        const sanitizedResults = await this.sanitizeOutput(results, ctx);
        return this.transformResponse(sanitizedResults);
    }
}));
