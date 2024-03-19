// pages/index.tsx
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { User } from '../models/User';

const HomePage: React.FC<{ users: User[] }> = ({ users }) => {
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <a>{user.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  // Fetch data from API route
  const res = await fetch('http://localhost:3000/api/users');
  const users = await res.json();

  return {
    props: { users },
  };
}

export default HomePage;
