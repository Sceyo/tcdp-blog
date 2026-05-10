import markdownStyles from "./markdown-styles.module.css";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-4xl mx-auto">
      <div
        className={`${markdownStyles["markdown"]} md:columns-2 md:gap-x-12`}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
