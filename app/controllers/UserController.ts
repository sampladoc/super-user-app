// controllers/UserController.ts
import { User } from '../models/User';

const users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', address: '7373 W Detroit St, Chandler, AZ 85226', job: 'Finance' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', address: '4915 E Ray Rd, Phoenix, AZ 85044', job: 'Surgeon' },
  { id: 1, name: 'Timothy Doe', email: 'tim88@example.com', address: '4522 S Detroit St, Chandler, AZ 85255', job: 'Bank Teller' },
  { id: 2, name: 'Susan Smith', email: 'susandoctor@example.com', address: '1266 E Ray Rd, Phoenix, AZ 85111', job: 'Pediatrician' },
];

export const getAllUsers = (): User[] => {
  return users;
};

export const getUserById = (id: number): User | undefined => {
  return users.find(user => user.id === id);
};
