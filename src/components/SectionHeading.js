export default function SectionHeading({ eyebrow, title, lead, center = false, as: Tag = 'h2', className = '' }) {
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-2xl reveal ${className}`}>
      {eyebrow && <p className={`eyebrow ${center ? 'justify-center' : ''}`}>{eyebrow}</p>}
      <Tag className="h-lg mt-3">{title}</Tag>
      {lead && <p className="lead mt-4">{lead}</p>}
    </div>
  );
}
