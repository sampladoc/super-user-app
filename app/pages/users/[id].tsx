// pages/users/[id].tsx
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

type User = {
  id: number;
  name: string;
  relationship: string;
};

export default function UserProfile() {
  const router = useRouter();
  const { id } = router.query;
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/users/${id}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Relationship: {user.relationship}</p>
    </div>
  );
}
