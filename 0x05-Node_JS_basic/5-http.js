const http = require('http');
const fs = require('fs').promises;
const url = require('url');

async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.trim().split('\n');

    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }

    const students = lines.slice(1).map((line) => line.split(','));
    const fields = {};

    students.forEach((student) => {
      if (student.length === 4) {
        const [firstName, , , field] = student;
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstName);
      }
    });

    let response = `Number of students: ${students.length}\n`;

    for (const [field, students] of Object.entries(fields)) {
      response += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
    }

    return response.trim();
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

const app = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello Holberton School!');
  } else if (parsedUrl.pathname === '/students') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');

    const databasePath = process.argv[2];
    if (!databasePath) {
      res.end('This is the list of our students\nCannot load the database');
    } else {
      try {
        const studentInfo = await countStudents(databasePath);
        res.end(`This is the list of our students\n${studentInfo}`);
      } catch (error) {
        res.end('This is the list of our students\nCannot load the database');
      }
    }
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not Found');
  }
});

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

module.exports = app;
