//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here


// Routes for specific projects
require('./routes/examples/routes.js')(router);
require('./routes/exercises/routes.js')(router);

