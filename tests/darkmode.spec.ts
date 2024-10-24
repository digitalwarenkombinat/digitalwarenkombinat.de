import { expect, test } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test.describe('Default dark mode', () => {
  test.use({
    colorScheme: 'dark',
  })
  test('has dark mode', async ({ page }) => {
    await expect(page.locator('html')).toHaveAttribute('class', 'dark')
  })

  test('has light mode after color change', async ({ page }) => {
    await page.locator('#header span').click()
    await page.getByLabel('theme toggle').click()
    await expect(page.locator('html')).toHaveAttribute('class', '')
    await expect(page).toHaveScreenshot()
  })
})

test.describe('Default light mode', () => {
  test.use({
    colorScheme: 'light',
  })
  test('has light mode', async ({ page }) => {
    expect(await page.locator('html').getAttribute('class')).toBeNull()
  })

  test('has dark mode after color change', async ({ page }) => {
    await page.locator('#header span').click()
    await page.getByLabel('theme toggle').click()
    await expect(page.locator('html')).toHaveAttribute('class', 'dark')
    await expect(page).toHaveScreenshot()
  })
})
