import FooterColumn from "@/shared/FooterColumn";
import FooterLink from "@/shared/ui/FooterLink";

export default function Footer() {
  return (
    <footer className="w-full bg-black">
      <div className="max-w-[1280px] mx-auto px-5 flex justify-center py-6 gap-[100]">
        <FooterColumn title="Контакты" links={[
          <FooterLink href="#" label="pisya@gmail.ru" />
        ]} />
        <FooterColumn title="Ссылки" links={[
          <FooterLink href="#" label="кто это читает вообще" />,
          <FooterLink href="#" label="я гей" />
        ]} />
        <FooterColumn title="Политика конф-ти" links={[
          <FooterLink href="#" label="Перейти" />
        ]} />
      </div>
    </footer>
  );
}
