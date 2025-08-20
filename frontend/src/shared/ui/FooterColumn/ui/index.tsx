import { FooterColumnType as Props } from "@/shared/types/FooterColumn";
import FooterLink from "../../FooterLink";

export default function FooterColumn({ links, title }: Props) {
  return (
    <div className="flex flex-col gap-[4] max-w-[200]">
      <h4 className="text-white text-lg">{title}</h4>
      {links.map((link, i) => (
        <li key={i}>
          <FooterLink href={link.href} label={link.label} />
        </li>
      ))}
    </div>
  );
}
