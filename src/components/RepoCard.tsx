import React from 'react';

function RepoCard({ repo }) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{repo.name}</h2>
        <p className="text-gray-600">{repo.description || 'No description available'}</p>
      </div>

      <div className="px-4 py-2 bg-gray-100">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-500">⭐ {repo.stargazers_count}</span>
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-sm hover:underline"
          >
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default RepoCard;
