
// shmuel lemlem id:209487594
// solomon kassahun id: 346254824 

const express = require('express');
const mongojs = require("mongojs");
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');

const db = mongojs(
  'mongodb+srv://Student:webdev2024student@cluster0.uqyflra.mongodb.net/webdev2024',
  ['mitzinet_solomon_shmuel']
);

const app = express();
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('static'));

// POST request to handle registration
app.post('/register', async (req, res) => {
  const { firstName, lastName, phoneNumber, email, password, confirmPassword } = req.body;

  if (!email || !password || !confirmPassword || !firstName || !lastName) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  if (password.length < 8) {
    return res.status(400).json({ error: 'Password must be at least 8 characters.' });
  }

  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Passwords do not match.' });
  }

  db.mitzinet_solomon_shmuel.findOne({ email }, async (err, user) => {
    if (err) {
      return res.status(500).json({ error: 'Internal server error.' });
    }

    if (user) {
      return res.status(400).json({ error: 'Email already registered.' });
    }

    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = { firstName, lastName, phoneNumber, email, password: hashedPassword };
      db.mitzinet_solomon_shmuel.insert(newUser, (err, result) => {
        if (err) {
          return res.status(500).json({ error: 'Failed to register user.' });
        }
        res.status(201).json({ message: 'Registration successful!' });
      });
    } catch (error) {
      res.status(500).json({ error: 'Failed to hash password.' });
    }
  });
});

// POST request to handle user deletion
app.post('/delete', async (req, res) => {
  const { email, password } = req.body;

  db.mitzinet_solomon_shmuel.findOne({ email }, async (err, user) => {
    if (err) {
      return res.status(500).json({ error: 'Internal server error.' });
    }

    if (!user) {
      return res.status(400).json({ error: 'User not found.' });
    }

    try {
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.status(400).json({ error: 'Incorrect password.' });
      }

      db.mitzinet_solomon_shmuel.remove({ email }, (err, result) => {
        if (err) {
          return res.status(500).json({ error: 'Failed to delete user.' });
        }
        res.status(200).json({ message: 'User deleted successfully.' });
      });
    } catch (error) {
      res.status(500).json({ error: 'Failed to verify password.' });
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
