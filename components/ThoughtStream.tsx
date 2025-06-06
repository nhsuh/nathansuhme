'use client';
import Link from 'next/link';

interface ThoughtMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
}

// Sample data - replace with actual API call or static data
const sampleThoughts: ThoughtMeta[] = [
  {
    slug: 'hello-world',
    title: 'Ship early, ship often',
    date: '2025-06-05',
    excerpt: 'Just a placeholder thought. Replace with your own MDX posts. The key is to build in public and get feedback early...',
  },
  {
    slug: 'tech-trends',
    title: 'What I\'m watching in 2024',
    date: '2024-12-01',
    excerpt: 'From AI coding assistants to edge computing, here are the trends that caught my attention this year...',
  },
  {
    slug: 'learning-system',
    title: 'My learning system',
    date: '2024-11-15',
    excerpt: 'How I stay current with technology while building products. A mix of hands-on projects and deliberate practice...',
  },
];

export default function ThoughtStream() {
  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-heading mb-8 text-center">Recent Thoughts</h2>
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 max-w-6xl mx-auto">
        {sampleThoughts.map((t) => (
          <Link 
            key={t.slug} 
            href={`/thoughts/${t.slug}`} 
            className="break-inside-avoid border border-neutral-200 dark:border-neutral-600 rounded-lg p-4 block hover:bg-neutral-50 dark:hover:bg-neutral-700 hover:border-primary transition-all"
          >
            <h4 className="font-heading mb-2 text-primary">{t.title}</h4>
            <p className="font-body text-sm opacity-75 mb-2">{new Date(t.date).toLocaleDateString()}</p>
            <p className="font-body text-sm opacity-75">{t.excerpt}</p>
          </Link>
        ))}
      </div>
    </div>
  );
} 