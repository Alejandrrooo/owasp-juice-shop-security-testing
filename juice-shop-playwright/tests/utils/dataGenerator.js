export function generateUser() {
  const timestamp = Date.now();
  const rand = Math.random().toString(36).substring(2, 8);

  return {
    email: `qa_${timestamp}_${rand}@test.com`,
    password: 'Test1234!'
  };
}