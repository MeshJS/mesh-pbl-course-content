export default function Image({
  src,
  caption = undefined,
  halfSize = false,
}: {
  src: string;
  caption: string | undefined;
  halfSize: boolean;
}) {
  return (
    <figure className={`h-auto mx-auto ${halfSize && "max-w-lg"}`}>
      <img className="h-auto max-w-full rounded-lg" src={src} />
      {caption && (
        <figcaption className="mt-2 text-sm text-center">{caption}</figcaption>
      )}
    </figure>
  );
}
