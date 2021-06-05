const router = require('express').Router();

//Import Routes

const doctorRoute = require('./doctor');

const ofpCreateRoute = require('./ofp/post');
const ofpGetRoute = require('./ofp/get');
const ofpDeleteRoute = require('./ofp/delete');
const ofpUpdateRoute = require('./ofp/patch');
const ofpPdfRoute = require('./ofp/pdf');
const ofpSearchRoute = require('./ofp/search');

const fGetRoute = require('./fungus/get');
const fPostRoute = require('./fungus/post');
const fPatchRoute = require('./fungus/patch');
const fDeleteRoute = require('./fungus/delete');

// Routing middlewares
router.use('/doctor',doctorRoute);

router.use('/fungus/get',fGetRoute);
router.use('/fungus/post',fPostRoute);
router.use('/fungus/patch',fPatchRoute);
router.use('/fungus/delete',fDeleteRoute);

router.use('/ofp/create',ofpCreateRoute);
router.use('/ofp/get', ofpGetRoute);
router.use('/ofp/delete', ofpDeleteRoute);
router.use('/ofp/update', ofpUpdateRoute);
router.use('/ofp/pdf', ofpPdfRoute);
router.use('/ofp/search', ofpSearchRoute);


module.exports = router;