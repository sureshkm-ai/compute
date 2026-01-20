"use client";
import Giscus from "@giscus/react";

export function GiscusComments() {
  return (
    <div className="mt-10">
      <Giscus
        repo="sureshkm-ai/compute"
        repoId="R_kgDOQ9J_-A"
        category="General"
        categoryId="DIC_kwDOQ9J_-M4C1K68"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme="dark"
        lang="en"
        loading="lazy"
      />
    </div>
  );
}
