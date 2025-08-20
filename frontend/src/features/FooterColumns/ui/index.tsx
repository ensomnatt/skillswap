import FooterColumn from "@/shared/ui/FooterColumn";
import { FOOTER_COLUMNS } from "../consts";

export default function FooterColumns() {
  return (
    <div className="max-w-[1280px] mx-auto px-5 py-6 flex flex-col md:flex-row md:justify-center md:gap-50 gap-10">
      {FOOTER_COLUMNS.map((col, i) => (
        <FooterColumn key={i} title={col.title} links={col.links} />
      ))}
    </div>
  );
}
