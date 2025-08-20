import FooterColumn from "@/shared/ui/FooterColumn";
import { footerColumns } from "../consts";

export default function FooterColumns() {
  return (
    <div className="max-w-[1280px] mx-auto px-5 flex justify-center py-6 gap-[200]">
      {footerColumns.map((col, i) => (
        <FooterColumn key={i} title={col.title} links={col.links} />
      ))}
    </div>
  );
}
