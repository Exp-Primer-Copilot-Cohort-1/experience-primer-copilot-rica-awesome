// Create web server application that works as follows:
// 1. User can post comments to the server
// 2. User can get list of all comments from the server
// 3. User can get list of comments by a specific user
// 4. User can get list of comments by a specific date

const express = require('express');
const app = express();

app.use(express.json());

let comments = [];

app.post('/comments', (req, res) => {
    const comment = req.body;
    comment.date = new Date();
    comments.push(comment);
    res.json({ message: 'Comment added' });
});

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.get('/comments/user/:user', (req, res) => {
    const user = req.params.user;
    const commentsByUser = comments.filter(comment => comment.user === user);
    res.json(commentsByUser);
});

app.get('/comments/date/:date', (req, res) => {
    const date = req.params.date;
    const commentsByDate = comments.filter(comment => comment.date === date);
    res.json(commentsByDate);
});

app.listen(3000, () => {
    console.log('Server is running at port 3000');
});
