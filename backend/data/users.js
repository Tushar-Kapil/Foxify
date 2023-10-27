import bcryptjs from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@email.com",
    password: bcryptjs.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "Tushar Kapil",
    email: "tushar@email.com",
    password: bcryptjs.hashSync("123456", 10),
    isAdmin: false,
  },
  {
    name: "Tanya",
    email: "tanya@email.com",
    password: bcryptjs.hashSync("123456", 10),
    isAdmin: false,
  },
];

export default users;
