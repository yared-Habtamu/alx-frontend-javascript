
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Ya', 
  lastName: 'Hab', 
  age: 20,
  location: ' Addis', 
};

const student2: Student = {
  firstName: 'Dag', 
  lastName: 'Jo', 
  age: 22,
  location: 'Hawassa', 
};
const studentsList: Student[] = [student1, student2];


const table = document.createElement('table');
const headerRow = document.createElement('tr');

const header1 = document.createElement('th');
header1.textContent = 'First Name';
const header2 = document.createElement('th');
header2.textContent = 'Location';

headerRow.appendChild(header1);
headerRow.appendChild(header2);
table.appendChild(headerRow);

studentsList.forEach((student) => {
  const row = document.createElement('tr');

  const firstNameCell = document.createElement('td');
  firstNameCell.textContent = student.firstName;

  const locationCell = document.createElement('td');
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);

  table.appendChild(row);
});

document.body.appendChild(table);

