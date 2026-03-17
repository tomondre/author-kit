/**
 * Newsletter header block: label, title, date, optional image + badge, red separator.
 * Authoring: Row 1 = label (e.g. "PRODUCT NEWSLETTER"), Row 2 = main title, Row 3 = date,
 * Row 4 = optional picture and/or "For Internal Use Only" text.
 */
export default function init(el) {
  const rows = [...el.querySelectorAll(':scope > div')];
  if (!rows.length) return;

  el.classList.add('newsletter-header');

  const labelRow = rows[0];
  const titleRow = rows[1];
  const dateRow = rows[2];
  const mediaRow = rows[3];

  if (labelRow) {
    labelRow.classList.add('newsletter-header-label');
    const p = labelRow.querySelector('p');
    if (p) p.classList.add('newsletter-header-label-text');
  }

  if (titleRow) {
    titleRow.classList.add('newsletter-header-title-row');
    const heading = titleRow.querySelector('h1, h2, h3, h4, h5, h6, p');
    if (heading) {
      if (heading.tagName === 'P') {
        const h1 = document.createElement('h1');
        h1.className = 'newsletter-header-title';
        h1.innerHTML = heading.innerHTML;
        heading.replaceWith(h1);
      } else {
        heading.classList.add('newsletter-header-title');
      }
    }
  }

  if (dateRow) {
    dateRow.classList.add('newsletter-header-date-row');
    const p = dateRow.querySelector('p');
    if (p) p.classList.add('newsletter-header-date');
  }

  if (mediaRow) {
    mediaRow.classList.add('newsletter-header-media');
    const picture = mediaRow.querySelector('picture');
    const text = mediaRow.querySelector('p');
    if (picture || text) {
      const wrap = document.createElement('div');
      wrap.className = 'newsletter-header-media-inner';
      if (picture) {
        const imgWrap = document.createElement('div');
        imgWrap.className = 'newsletter-header-image';
        imgWrap.append(picture);
        wrap.append(imgWrap);
      }
      if (text) {
        text.classList.add('newsletter-header-badge');
        wrap.append(text);
      }
      mediaRow.innerHTML = '';
      mediaRow.append(wrap);
    }
  }

  const separator = document.createElement('div');
  separator.className = 'newsletter-header-separator';
  el.append(separator);

  const section = el.closest('.section');
  if (section) section.classList.add('has-newsletter');
}
