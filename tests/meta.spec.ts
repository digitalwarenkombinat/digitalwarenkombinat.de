import { test, expect } from '@playwright/test'

test.use({
  locale: 'de-DE',
  timezoneId: 'Europe/Berlin',
})

test('has title', async ({ page }) => {
  await page.goto('/')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Start | Digitalwarenkombinat/)

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole('heading', { name: 'Wir sind das Digitalwarenkombinat' }),
  ).toBeVisible()
})

test('has English title after language change', async ({ page }) => {
  await page.goto('/')
  await page.locator('#header span').click()
  await page.getByRole('link', { name: 'English' }).click()
  await expect(
    page.getByRole('heading', { name: 'We are Digitalwarenkombinat' }),
  ).toBeVisible()
})
