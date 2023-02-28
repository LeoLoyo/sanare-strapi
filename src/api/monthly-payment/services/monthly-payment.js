'use strict';

/**
 * monthly-payment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::monthly-payment.monthly-payment');
