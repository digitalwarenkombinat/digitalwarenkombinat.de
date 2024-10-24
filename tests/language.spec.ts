import { expect, test } from '@playwright/test'

test.use({
  locale: 'de-DE',
  timezoneId: 'Europe/Berlin',
})

test('has German title', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle(/Start | Digitalwarenkombinat/)

  await expect(
    page.getByRole('heading', { name: 'Wir sind das Digitalwarenkombinat' }),
  ).toBeVisible()
  await expect(page).toHaveScreenshot()
})

test('has English title after language change', async ({ page }) => {
  await page.goto('/')
  await page.locator('#header span').click()
  await expect(page).toHaveScreenshot()
  await page.getByRole('link', { name: 'English' }).click()
  await expect(
    page.getByRole('heading', { name: 'We are Digitalwarenkombinat' }),
  ).toBeVisible()
  await expect(page).toHaveScreenshot()
})
