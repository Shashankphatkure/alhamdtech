export default function SectionHeading({ eyebrow, title, lead, center = false, as: Tag = 'h2', className = '' }) {
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} reveal max-w-2xl ${className}`}>
      {eyebrow && <p className={`eyebrow ${center ? 'justify-center' : ''}`}>{eyebrow}</p>}
      <Tag className="h-lg mt-3">{title}</Tag>
      <span className={`rule mt-5 ${center ? 'mx-auto' : ''}`} aria-hidden="true" />
      {lead && <p className="lead mt-5">{lead}</p>}
    </div>
  );
}
