'use strict';

/**
 * caption service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::caption.caption');
