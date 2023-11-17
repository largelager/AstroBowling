let bowlers = [];
try {
  const response = await fetch('http://localhost:3000');
  bowlers = await response.json();
} catch (error) {
  console.error('Failed to fetch API:', error);
}
