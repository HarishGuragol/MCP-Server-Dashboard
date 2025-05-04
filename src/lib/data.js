// src/lib/data.js

export async function fetchMCPRepos() {
    try {
      const response = await fetch(
        'https://api.github.com/search/repositories?q=mcp+in:name+in:description&sort=stars&order=desc'
      );
      if (!response.ok) {
        throw new Error('Failed to fetch MCP repositories');
      }
      const data = await response.json();
      return data.items;
    } catch (error) {
      console.error(error);
      return [];
    }
  }
  