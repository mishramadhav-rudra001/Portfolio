import React, { useState, useEffect } from 'react';
import { 
  GitFork, 
  Star, 
  ExternalLink, 
  FolderGit2,
  AlertCircle
} from 'lucide-react';
import { Github } from '../components/Icons';
import { personalInfo, fallbackRepos } from '../data/portfolioData';

export default function GitHubShowcase() {
  const [repos, setRepos] = useState(fallbackRepos);
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isUsingFallback, setIsUsingFallback] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function fetchGitHubData() {
      try {
        setIsLoading(true);
        // Fetch user public data
        const profileRes = await fetch('https://api.github.com/users/mishramadhav-rudra001');
        if (!profileRes.ok) throw new Error('Profile fetch failed');
        const profile = await profileRes.json();

        // Fetch user public repositories
        const reposRes = await fetch('https://api.github.com/users/mishramadhav-rudra001/repos?sort=updated&per_page=6');
        if (!reposRes.ok) throw new Error('Repos fetch failed');
        const reposJson = await reposRes.json();

        if (isMounted) {
          setProfileData(profile);
          if (Array.isArray(reposJson) && reposJson.length > 0) {
            setRepos(reposJson);
            setIsUsingFallback(false);
          } else {
            setRepos(fallbackRepos);
            setIsUsingFallback(true);
          }
        }
      } catch {
        if (isMounted) {
          setIsUsingFallback(true);
          setRepos(fallbackRepos);
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    fetchGitHubData();
    return () => { isMounted = false; };
  }, []);

  const languageColors = {
    JavaScript: '#F7DF1E',
    Python: '#3572A5',
    HTML: '#E34F26',
    CSS: '#1572B6',
    Shell: '#89E051',
    TypeScript: '#3178C6',
  };

  return (
    <section id="github" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700 text-xs font-mono uppercase tracking-wider">
            <Github className="w-3.5 h-3.5 text-blue-400" />
            <span>Open Source &amp; Code Activity</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Code, Experiments &amp; Open Source
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-2xl">
            Live integration with my GitHub profile. Transparent view of repositories, active code experiments, and study notes.
          </p>
        </div>

        {/* Profile Card & Action Bar */}
        <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-[#0f1728]/80 border border-slate-800 backdrop-blur-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-white">
              <Github className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-heading font-bold text-white">
                  mishramadhav-rudra001
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {isLoading ? 'Connecting...' : 'Verified Account'}
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">
                {profileData?.bio || "Student Developer exploring Software, AI/ML, and Cybersecurity."}
              </p>
            </div>
          </div>

          <a
            href={personalInfo.socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/20 transition-all shrink-0"
          >
            <Github className="w-4 h-4" />
            <span>Explore My GitHub</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Repositories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, idx) => {
            const langColor = languageColors[repo.language] || '#3B82F6';

            return (
              <div
                key={repo.id || idx}
                className="p-6 rounded-2xl bg-[#0f1728]/80 border border-slate-800 hover:border-slate-700 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <FolderGit2 className="w-5 h-5 text-blue-400" />
                    <a
                      href={repo.html_url || personalInfo.socialLinks.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-400 hover:text-white transition-colors"
                      aria-label="View repo on GitHub"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>

                  <h4 className="text-base font-heading font-bold text-white tracking-tight mb-2 hover:text-blue-400 transition-colors">
                    <a href={repo.html_url || personalInfo.socialLinks.github} target="_blank" rel="noopener noreferrer">
                      {repo.name}
                    </a>
                  </h4>

                  <p className="text-xs text-slate-400 leading-relaxed mb-4">
                    {repo.description || "Public repository containing technical experiments and curriculum code."}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: langColor }}
                    />
                    <span>{repo.language || 'Code'}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <Star className="w-3.5 h-3.5 text-slate-500" />
                      <span>{repo.stargazers_count ?? repo.stars ?? 0}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <GitFork className="w-3.5 h-3.5 text-slate-500" />
                      <span>{repo.forks_count ?? repo.forks ?? 0}</span>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Live Status Note */}
        {isUsingFallback && (
          <div className="mt-8 flex items-center justify-center gap-2 text-xs font-mono text-slate-500">
            <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
            <span>Displaying curated repositories from local profile configuration (GitHub API rate-limit protected).</span>
          </div>
        )}

      </div>
    </section>
  );
}
