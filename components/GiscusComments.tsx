'use client';

import Giscus from '@giscus/react';
import { useTheme } from 'next-themes';

{
  /* <script src="https://giscus.app/client.js"
        data-repo="xowls0315/notion-blog-nextjs-giscus"
        data-repo-id="R_kgDOPoMY5g"
        data-category="Announcements"
        data-category-id="DIC_kwDOPoMY5s4Cu3NH"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="top"
        data-theme="preferred_color_scheme"
        data-lang="ko"
        crossorigin="anonymous"
        async>
</script> */
}

export default function GiscusComments() {
  const { theme } = useTheme();
  return (
    <Giscus
      repo="xowls0315/notion-blog-nextjs-giscus"
      repoId="R_kgDOPoMY5g"
      category="Announcements"
      categoryId="DIC_kwDOPoMY5s4Cu3NH"
      mapping="pathname"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="top"
      theme={theme === 'dark' ? 'dark' : 'light'}
      lang="ko"
      loading="lazy"
    />
  );
}
