/**
 * - https://www.coder.work/article/6670076
 */
export default function _isPlaceholder(a) {
  return a != null &&
         typeof a === 'object' &&
         a['@@functional/placeholder'] === true;
}
