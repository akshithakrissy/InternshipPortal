import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'dharaniya0208@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  
];

export default users;
