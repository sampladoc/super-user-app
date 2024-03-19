// pages/users/[id].tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const UserDetailPage: React.FC<{ user: User | undefined }> = ({ user }) => {
  if (!user) return <div>User not found</div>;

  return (
    <div>
      <h1>User Details</h1>
      <p>ID: {user.id}</p>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

export async function getStaticProps({ params }: { params: { id: string } }) {
  const userId = parseInt(params.id);
  // Fetch data from API route
  const res = await fetch(`http://localhost:3000/api/users/${userId}`);
  const user = await res.json();

  return {
    props: { user },
  };
}

export async function getStaticPaths() {
  // Pre-render paths with known users
  const res = await fetch('http://localhost:3000/api/users');
  const users = await res.json();
  const paths = users.map(user => ({ params: { id: user.id.toString() } }));

  return { paths, fallback: false };
}

export default UserDetailPage;
