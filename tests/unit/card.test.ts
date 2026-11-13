import { expect, test } from "vitest";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
import { CourseCard } from "@/components/course-card";
test("props определяют заголовок и состояние карточки", () => {
  const html = renderToStaticMarkup(
    createElement(CourseCard, {
      title: "Мой экран",
      caption: "Описание",
      available: false,
    }),
  );
  expect(html).toContain("Мой экран");
  expect(html).toContain("Мест нет");
  expect(html).not.toContain("Есть места");
});
