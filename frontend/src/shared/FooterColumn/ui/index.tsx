import FooterLink from "@/shared/ui/FooterLink";

type Props = {
  title: string;
  links: React.ReactElement<typeof FooterLink>[];
}

export default function FooterColumn({ links, title }: Props) {
  return (
    <div className="flex flex-col gap-[4] max-w-[200]">
      <h4 className="text-white text-lg">{title}</h4>
      {links.map((link, index) => (
        <div key={index}>{link}</div>
      ))}
    </div>
  );
}
