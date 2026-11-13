import { test, expect } from "@playwright/test";
test("стартовый экран и запрос к серверу доступны без ключей", async ({
  page,
}) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { name: "Мой цифровой продукт" }),
  ).toBeVisible();
  await page.getByRole("link", { name: "Проверить серверный маршрут" }).click();
  await expect(page.locator("body")).toContainText('"ok":true');
});
