export function addPromo(e: Event): void {
  const target = e.target as Node;
  const percentText = target.previousSibling?.textContent;
  const percent: number = Number(percentText?.slice(0, percentText.length - 1));
}