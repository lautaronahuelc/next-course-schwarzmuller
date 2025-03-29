'use client';

export default function NotFound(props) {
  console.log(props);
  return (
    <main className="error">
      <h1>Not found</h1>
      <p>Unfortunately, we could not find the requested page or resource.</p>
    </main>
  );
}