export function AccessibilitySkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only z-[100] rounded-full bg-ivory px-5 py-3 font-semibold text-charcoal-950 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
    >
      Skip to main content
    </a>
  );
}
