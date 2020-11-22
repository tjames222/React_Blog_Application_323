const { create, all, get, update } = require('./../db/users');

const createUserRoutes = (server) => {
  server.get('/api/user/:email', async (req, res) => {
    const result = await get({ email: req.params.email });
    res.json(result);
  });
  server.get('/api/users', async (req, res) => {
    const result = await all();
    res.json(result);
  });
  server.post('/api/user/create', (req, res) => {
    const { firstName, lastName, email, password } = req.body;
    const newUser = create({ firstName, lastName, email, password });
    res.json(newUser);
  });
  server.post('/api/user/update', (req, res) => {
    const { oldPassword, newPassword, email } = req.body;
    const updatedUser = update({ email, newPassword, oldPassword });
    res.json(updatedUser);
  });
};

module.exports = {
  createUserRoutes,
};
