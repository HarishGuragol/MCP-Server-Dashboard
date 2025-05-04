// api/github.ts
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN; // Or use process.env if using Node

export async function fetchMCPRepos() {
  try {
    const response = await fetch(
      'https://api.github.com/search/repositories?q=mcp+in:name+in:description&sort=stars&order=desc',
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    );

    if (!response.ok) throw new Error('Failed to fetch MCP repositories');

    const data = await response.json();
    return data.items;
  } catch (error) {
    console.error(error);
    return [];
  }
}
