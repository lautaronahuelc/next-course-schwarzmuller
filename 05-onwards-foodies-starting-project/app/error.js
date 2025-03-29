'use client';

export default function Error(props) {
  console.log(props);
  return (
    <main className="error">
      <h1>An error occurred!</h1>
      <p>Failed to fetch data. Please try again later.</p>
    </main>
  );
}