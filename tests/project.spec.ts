import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test.describe('Project pages', () => {
  test('has features projects', async ({ page }) => {
    await page.getByRole('link', { name: 'GLAMorous Europe GLAMorous' }).click()
    await expect(page).toHaveURL(/.*glamorous-europe/)
    await expect(
      page.getByRole('img', { name: 'GLAMorous Europe bringt' }),
    ).toBeVisible()
    await expect(page.getByText('Weitere Projekte Spook Tours')).toBeVisible()

    await page
      .getByRole('link', { name: 'Spook Tours Spook Tours sind' })
      .click()
    await expect(page).toHaveURL(/.*spook-tours/)
    await expect(
      page.getByRole('heading', { name: 'Spook Tours' }),
    ).toBeVisible()
    await expect(
      page.getByRole('link', { name: 'GLAMorous Europe GLAMorous' }),
    ).toBeVisible()

    await page.getByRole('link', { name: 'GLAMorous Europe GLAMorous' }).click()
    await expect(page).toHaveURL(/.*glamorous-europe/)
    await expect(
      page.getByRole('heading', { name: 'GLAMorous Europe' }),
    ).toBeVisible()
  })

  test('has projects in navigation', async ({ page }) => {
    await page.locator('#header span').click()
    await page.getByRole('link', { name: 'Projekte', exact: true }).click()
    await expect(page).toHaveURL(/.*projects/)
    await expect(
      page.getByRole('link', { name: 'GLAMorous Europe GLAMorous' }),
    ).toBeVisible()
    await page
      .getByRole('link', { name: 'GLAMorous Europe', exact: true })
      .click()
    await expect(page).toHaveURL(/.*glamorous-europe/)
    await expect(
      page.getByRole('img', { name: 'GLAMorous Europe bringt' }),
    ).toBeVisible()
  })

  test('has all projects link on homepage', async ({ page }) => {
    await page.getByRole('link', { name: 'Zu allen Projekten' }).click()
    await expect(page).toHaveURL(/.*projects/)
    await expect(
      page.getByRole('link', { name: 'GLAMorous Europe GLAMorous' }),
    ).toBeVisible()
    await page
      .getByRole('link', { name: 'GLAMorous Europe', exact: true })
      .click()
    await expect(page).toHaveURL(/.*glamorous-europe/)
    await expect(
      page.getByRole('img', { name: 'GLAMorous Europe bringt' }),
    ).toBeVisible()
  })
})
