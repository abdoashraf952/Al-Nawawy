export function StatusDot({ tone = 'success', className = '' }) {
  const tones = {
    success: 'bg-success',
    brand: 'bg-brand',
    accent: 'bg-accent',
    amber: 'bg-amber-500',
  };
  return (
    <span aria-hidden="true" className={`relative inline-flex size-2 shrink-0 ${className}`}>
      <span className={`absolute inset-0 rounded-full ${tones[tone]} animate-pulse-dot`} />
      <span className={`relative inline-flex size-2 rounded-full ${tones[tone]}`} />
    </span>
  );
}
