const { create, all, get, update } = require('./../db/users');

const createUserRoutes = (server) => {
  server.get('/api/user/:email', (req, res) => {
    res.send(get(req.params.email));
  });
  server.get('/api/users', (req, res) => {
    // console.log('req: ', req);
    console.log('in here!!!!');
    const result = all();
    console.log('rows: ', result);
    res.status(200).end(result);
    // res.json(all());
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
