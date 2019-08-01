const express = require('express');
const postsRouter = require('./routes/posts/index');
const commentsRouter = require('./routes/comments/index');
const server = express();
const port = 3300;

server.use(express.json());

server.get('/', (req, res) => {
    res.send('ALL YOUR BASE ARE BELONG TO US!!!');
})

server.use(postsRouter);
server.use(commentsRouter);

server.listen(port, () => console.log(`.\n*** API on port ${port} ***\n`));



