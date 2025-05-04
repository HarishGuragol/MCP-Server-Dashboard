// src/components/MCPDashboard.tsx
import { useEffect, useState } from 'react';
import { fetchMCPRepos } from '../api/github'; // adjust if needed

export default function MCPDashboard() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const load = async () => {
      const data = await fetchMCPRepos();
      setRepos(data);
    };
    load();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold mb-6">🧱 MCP Server Marketplace</h1>

      {repos.length === 0 ? (
        <p className="text-gray-600">No MCP servers found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-white shadow-md rounded-2xl p-5 border hover:shadow-xl transition"
            >
              <h2 className="text-xl font-semibold text-blue-600">
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  {repo.full_name}
                </a>
              </h2>
              <p className="text-sm text-gray-700 mt-2 line-clamp-3">{repo.description}</p>

              <div className="mt-4 flex justify-between text-sm text-gray-500">
                <span>⭐ {repo.stargazers_count}</span>
                <span>{repo.language}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
