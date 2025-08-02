
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const doctors = [
  { id: 1, name: 'Dr. John Doe', specialty: 'Cardiologist', experience: 10, location: 'New York, NY', image: '/doctor1.jpg' },
  { id: 2, name: 'Dr. Jane Smith', specialty: 'Dermatologist', experience: 8, location: 'Los Angeles, CA', image: '/doctor2.jpg' },
  { id: 3, name: 'Dr. Peter Jones', specialty: 'Neurologist', experience: 12, location: 'Chicago, IL', image: '/doctor3.jpg' },
  { id: 4, name: 'Dr. Mary Johnson', specialty: 'Pediatrician', experience: 15, location: 'Houston, TX', image: '/doctor4.jpg' },
  { id: 5, name: 'Dr. David Williams', specialty: 'Orthopedist', experience: 7, location: 'Miami, FL', image: '/doctor5.jpg' },
];

app.get('/api/doctors', (req, res) => {
  res.json(doctors);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
