import { Router } from '@vaadin/router';

import "./views/main-view";
import "./views/not-found-view";
import "./views/home-view";

const outlet = document.getElementById('outlet');
const router = new Router(outlet);
router.setRoutes([
  {
    path: '/', component: 'main-layout', children: [
      { path: '/', component: 'home-view' },
      { path: '(.*)', component: 'not-found-view' },
    ]
  }

]);
