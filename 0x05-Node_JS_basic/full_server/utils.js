import fs from 'fs';
import { promisify } from 'util';

const readFile = promisify(fs.readFile);

const readDatabase = async (filePath) => {
  try {
    const data = await readFile(filePath, 'utf8');
    const lines = data.trim().split('\n');

    if (lines.length <= 1) throw new Error('Cannot load the database');

    const fields = {};

    for (let i = 1; i < lines.length; i += 1) {
      const line = lines[i];
      if (line.trim()) {
        const [firstName, , , field] = line.split(',');
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstName);
      }
    }

    return fields;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

export default readDatabase;
