import ProjectCard from '@components/ProjectCard';

export default function WorkSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <ProjectCard
        title="Grand Charter"
        subtitle="Founding engineer – legal‑tech platform"
        impact="4 apps · 4 000 plaintiffs · 60 firms"
        stack={['Next.js', 'AWS', 'PostgreSQL', 'LLM']}
        link="#tech"
      />
      <ProjectCard
        title="Capital One"
        subtitle="Associate engineer – marketing syndication"
        impact="−$10 k/mo infra cost"
        stack={['Lambda', 'TypeScript', 'Step Functions']}
        link="#tech"
      />
    </div>
  );
} 