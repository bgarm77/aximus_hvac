// Safe JSON-LD serialization for injection via dangerouslySetInnerHTML.
// JSON.stringify does not escape "<", U+2028, or U+2029, so a value containing
// "</script>" or those line separators could break out of the script tag.
export function safeJsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}
