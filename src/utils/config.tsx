const apiConfig = {
  BASE_URL: 'https://api.anyway.catlogic.ru',
  HEADERS: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
};

const apiRoutes = {
  MAIN: '/kanban',
  START: '/kanban/start',
  FINISH: '/kanban/finish',
};

export { apiConfig, apiRoutes };
