import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test.describe('Blog pages', () => {
  test('has all blog posts link on homepage', async ({ page }) => {
    await page.getByRole('link', { name: 'Alle Posts anzeigen' }).click()
    await expect(
      page.getByRole('heading', { name: 'Was gibt es Neues? Unser Blog' }),
    ).toBeVisible()
    await expect(page).toHaveURL(/.*blog/)

    await page
      .getByRole('link', { name: 'Wie geht`s weiter mit' })
      .nth(1)
      .click()
    await page.getByRole('link', { name: '#Wikidata' }).first().click()
    await expect(page).toHaveURL(/.*wikidata/)
    await expect(page.getByRole('heading', { name: 'Wikidata' })).toBeVisible()
    await expect(
      page.locator('a').filter({ hasText: 'Wie geht`s weiter mit' }),
    ).toBeVisible()
    await expect(
      page.locator('a').filter({ hasText: 'GLAMorous Europe ist seit' }),
    ).toBeVisible()

    await page
      .getByRole('link', { name: 'GLAMorous Europe ist seit' })
      .nth(1)
      .click()
    await expect(page).toHaveURL(/.*glamorous-europe-ist-seit-heute-live/)
    await expect(
      page.getByRole('heading', { name: 'Unser Blog GLAMorous Europe' }),
    ).toBeVisible()
  })
})
