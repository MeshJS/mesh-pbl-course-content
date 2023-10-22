export default function LayoutCourseMd({ children }) {
  return (
    <main className="flex justify-between mx-auto max-w-screen-xl">
      <article className="mx-auto w-full max-w-4xl prose prose-sm sm:prose-base lg:prose-lg prose-blue dark:prose-invert">
        {children.props.markdoc && children.props.markdoc.frontmatter && (
          <h1>{children.props.markdoc.frontmatter.title}</h1>
        )}
        {children}
      </article>
    </main>
  );
}
