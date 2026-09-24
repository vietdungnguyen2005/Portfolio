import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';

import { Research } from './Research';

describe('Research', () => {
  it('presents the accepted paper without claiming publication', () => {
    const html = renderToStaticMarkup(<Research />);

    expect(html).toContain('id="research"');
    expect(html).toContain('RAG-VM: A Retrieval-Augmented Generation Framework for Vulnerability Management');
    expect(html).toContain('Accepted for FDSE 2026');
    expect(html).toContain('publication details are pending');
    expect(html).toContain('https://inseclab.uit.edu.vn/chuc-mung-van-khoi-viet-dung-va-duc-trung-co-bai-bao-khoa-hoc-duoc-chap-nhan-dang-tai-hoi-nghi-quoc-te-fdse-2026/');
  });
});
