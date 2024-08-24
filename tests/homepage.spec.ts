import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test.use({
  locale: 'de-DE',
  timezoneId: 'Europe/Berlin',
})

test.describe('Homepage areas', () => {
  test('has header', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Wir sind das Digitalwarenkombinat' }),
    ).toBeVisible()

    await expect(page.getByRole('link', { name: 'Schreib uns!' })).toBeVisible()

    await expect(
      page.getByRole('img', { name: 'Digitalwarenkombinat' }),
    ).toBeVisible()
  })

  test('has projects', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Was tun wir? Unsere Projekte' }),
    ).toBeVisible()
    await expect(
      page.getByRole('link', { name: 'GLAMorous Europe GLAMorous' }),
    ).toBeVisible()
  })

  // test('has shop', async ({ page }) => {
  //   await expect(
  //     page.getByRole('heading', { name: 'Welche Produkte kann man hier' }),
  //   ).toBeVisible()
  //   await expect(
  //     page.getByRole('link', { name: 'Postkarten GLAM Postkarten' }),
  //   ).toBeVisible()
  // })

  test('has blog', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Was gibt es Neues? Unser Blog' }),
    ).toBeVisible()
    await expect(
      page.locator('section').filter({ hasText: 'Wir sind nominiert für den' }),
    ).toBeVisible()
  })

  test('has references', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'Was sagen andere über uns?' }),
    ).toBeVisible()
    await expect(
      page.getByText('Philippe Genêt, Projektkoordinator Coding da Vinci'),
    ).toBeVisible()
  })

  test('has footer', async ({ page }) => {
    await expect(
      page.getByRole('contentinfo').getByLabel('instagram'),
    ).toBeVisible()
  })
})
