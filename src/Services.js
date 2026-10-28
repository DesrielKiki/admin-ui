export async function getPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return await res.json();
  } catch (err) {
    console.error(err);
    return [];
  }
}
