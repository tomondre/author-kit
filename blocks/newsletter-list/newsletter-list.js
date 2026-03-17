/**
 * Newsletter list block: bullet list with newsletter styling (disc, bold, blue links).
 * Authoring: either one row with a <ul> (from doc), or one row per list item (each row = one <p> or cell).
 */
export default function init(el) {
  el.classList.add('newsletter-list');

  const rows = [...el.querySelectorAll(':scope > div')];
  const firstRow = rows[0];
  const existingList = firstRow?.querySelector('ul');

  if (existingList) {
    existingList.classList.add('newsletter-list-ul');
    const items = existingList.querySelectorAll(':scope > li');
    items.forEach((li) => li.classList.add('newsletter-list-item'));
    return;
  }

  const ul = document.createElement('ul');
  ul.classList.add('newsletter-list-ul');

  for (const row of rows) {
    const p = row.querySelector('p');
    const content = p ? p.innerHTML : row.innerHTML;
    if (!content.trim()) continue;
    const li = document.createElement('li');
    li.classList.add('newsletter-list-item');
    li.innerHTML = content;
    ul.append(li);
  }

  if (ul.children.length) {
    el.innerHTML = '';
    el.append(ul);
  }
}
