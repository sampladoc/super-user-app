export default async function getStaticProps() {
    // Fetch data from API route
    const res = await fetch('http://localhost:3000/api/users');
    const users = await res.json();
  
    return {
      props: { users },
    };
  }