/** Mac-style browser frame for embedding dark app mockups in the warm page. */
export default function MacFrame({
  url = "app.dolemai.com",
  children,
  style,
}: {
  url?: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  return (
    <div className="mac-frame" style={style}>
      <div className="mac-titlebar">
        <span className="mac-dot red" />
        <span className="mac-dot amber" />
        <span className="mac-dot green" />
        <span className="mac-url">{url}</span>
      </div>
      <div className="mac-body">{children}</div>
    </div>
  );
}
