require('newrelic');
const express = require('express');
const port = process.env.PORT || 3000;
const path = require('path');
const proxy = require('express-http-proxy');

// const header = require('../client/header/header-sidebar-service/server/index.js');
// const instructors = require('../client/instructors/instructors-service/server/index.js');
// const feedback = require('../client/reviews/Student-Feedback/server/index.js');
// const also = require('../client/also_bought/students-also-bought-service/server/server.js');

// const mysql = require('../client/instructors/instructors-service/database/sqlizeIndex.js');

const app = express();

app.use('/courses/:id', express.static(path.join(__dirname, '/../public')));

app.get('/:id/instructors', proxy('http://load-balancer-663379127.us-east-1.elb.amazonaws.com'));
// app.get('/courses/:courseId/header', proxy('http://localhost:3003/'));
// app.get('/:courseId/reviews', proxy('http://localhost:3001/'));
// app.get('/courses/:courseId/similarcourses', proxy('http://localhost:3004/'));

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});