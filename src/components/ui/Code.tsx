import Prism from "prismjs";

import * as React from "react";
import copy from "copy-to-clipboard";

import { ClipboardDocumentIcon } from "@heroicons/react/24/solid";

Prism.languages.markdoc = {
  tag: {
    pattern: /{%(.|\n)*?%}/i,
    inside: {
      tagType: {
        pattern: /^({%\s*\/?)(\w|-)*\b/i,
        lookbehind: true,
      },
      id: /#(\w|-)*\b/,
      string: /".*?"/,
      equals: /=/,
      number: /\b\d+\b/i,
      variable: {
        pattern: /\$[\w.]+/i,
        inside: {
          punctuation: /\./i,
        },
      },
      function: /\b\w+(?=\()/,
      punctuation: /({%|\/?%})/i,
      boolean: /false|true/,
    },
  },
  variable: {
    pattern: /\$\w+/i,
  },
  function: {
    pattern: /\b\w+(?=\()/i,
  },
};

export default function Code({ children, "data-language": language }) {
  const [copied, setCopied] = React.useState(false);
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (ref.current) Prism.highlightElement(ref.current, false);
  }, [children]);

  React.useEffect(() => {
    if (copied) {
      //@ts-ignore
      copy(ref.current.innerText);
      const to = setTimeout(setCopied, 1000, false);
      return () => clearTimeout(to);
    }
  }, [copied]);

  const lang = language === "md" ? "markdoc" : language || "markdoc";

  const lines =
    typeof children === "string" ? children.split("\n").filter(Boolean) : [];

  return (
    <div className="relative" aria-live="polite">
      <pre key={children} ref={ref} className={`language-${lang}`}>
        {children}
      </pre>
      <button
        onClick={() => setCopied(true)}
        className="appearance-none absolute color-inherit top-3 right-3 border-none text-gray-200"
      >
        <ClipboardDocumentIcon className="w-5 h-5" />
      </button>
    </div>
  );
}
