const { create, update, get, all, deleteItem } = require('./../db/posts');

const createPostRoutes = (server) => {
  server.get('/api/post/:id', (req, res) => {
    res.send(get(req.params.id));
  });
  server.get('/api/posts', (req, res) => {
    const result = all();
    console.log('rows: ', result);
    res.status(200).end(result);
  });
  server.post('/api/posts/create', (req, res) => {
    const { title, content, author } = req.body;
    const newUser = create({ title, content, author });
    res.json(newUser);
  });
  server.post('/api/posts/update', (req, res) => {
    const { title, content, id } = req.body;
    const updatedPost = update({ id, title, content });
    res.json(updatedPost);
  });
  server.post('/api/posts/delete/:id', (req, res) => {
    const deletedPost = deleteItem({ id: req.params.id });
    res.json(deletedPost);
  });
};

module.exports = {
  createPostRoutes,
};
