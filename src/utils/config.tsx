const apiConfig = {
  BASE_URL: 'http://localhost:3001',
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
