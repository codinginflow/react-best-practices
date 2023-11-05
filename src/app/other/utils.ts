export async function randomDelay() {
  const delay = Math.floor(Math.random() * 2000) + 1000;
  return new Promise((resolve) => setTimeout(resolve, delay));
}
