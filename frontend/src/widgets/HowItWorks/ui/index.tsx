import Card from "@/widgets/Card";

export default function HowItWorks() {
  return (
    <section className="min-h-[400] flex flex-col items-center text-center">
      <h1 className="mb-[40] text-3xl font-bold">Как это работает?</h1>
      <div className="flex flex-col md:flex-row justify-between items-center gap-[24]">
        <Card
          title="Найди наставника"
          description="Выбирай опытного наставника по интересующему навыку и изучай новый материал"
        />
        <Card
          title="Купи обучение за токены или обучай других"
          description="Потрать токены, чтобы получить знания, или заработай их, обучая новичков"
        />
        <Card
          title="Получай или трать токены внутри платформы"
          description="Заработанные токены можно тратить на новые курсы или обменивать внутри платформы"
        />
      </div>
    </section>
  );
}
