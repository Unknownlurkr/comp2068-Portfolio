/*
 * File Name: pages.js
 * Website: Protfolio
 * Author: Brittany Samuels
 * Page routing with the pages.js 
 * */

const { home, About-Me, Projects, Services, Contact } = require('../controllers/PagesController');

module.exports = router => {
    router.get('/', home);

    router.get('/About-Me', About-Me);

    router.get('/Projects', Projects);

    router.get('/Services', Services);

    router.get('/Contact', Contact);
}
