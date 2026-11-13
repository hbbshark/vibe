import { CourseCard } from "@/components/course-card";
import { Button } from "@/components/ui/button";
export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-12">
      <p className="text-caption font-semibold text-primary">
        ТЕХНИЧЕСКАЯ ГРАМОТНОСТЬ · СТАРТОВЫЙ ПРОЕКТ
      </p>
      <h1 className="mt-5 text-display font-semibold">Мой цифровой продукт</h1>
      <p className="mt-5 max-w-2xl text-body text-secondary">
        Проект запущен. Здесь появится ваш продукт: начните с идеи, прочитайте
        структуру и измените заголовок руками.
      </p>
      <section
        className="mt-10 grid gap-5 sm:grid-cols-2"
        aria-label="Примеры компонентов"
      >
        <CourseCard
          title="Компонент с props"
          caption="Найдите title, caption, available и compact в исходнике."
        />
        <CourseCard
          title="Другой вариант"
          caption="Вариант карточки без доступных мест."
          available={false}
          compact
        />
      </section>
      <div className="mt-8">
        <Button asChild>
          <a href="/api/health">Проверить серверный маршрут</a>
        </Button>
      </div>
      <p className="mt-8 text-caption text-secondary">
        Для первого запуска база и ключ модели не нужны. PRODUCT.md, CLAUDE.md и
        DECISIONS.md заполняются на занятиях.
      </p>
    </main>
  );
}
