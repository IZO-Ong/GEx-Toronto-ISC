export default function SidebarSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3">
      <h2 className="text-base font-bold uppercase tracking-wide text-zinc-800">
        {title}
      </h2>
      <div className="space-y-3">{children}</div>
    </section>
  );
}
