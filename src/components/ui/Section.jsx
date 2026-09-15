import { Container } from './Container';

/** Semantic section wrapper: consistent rhythm + an accessible name. */
export function Section({ id, labelledBy, className = '', innerClassName = '', children }) {
  return (
    <section
      id={id}
      aria-labelledby={labelledBy}
      className={`py-16 sm:py-20 lg:py-28 ${className}`}
    >
      <Container className={innerClassName}>{children}</Container>
    </section>
  );
}
