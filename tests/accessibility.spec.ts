import { expect, test } from '@playwright/test'
import AxeBuilder from '@axe-core/playwright'

test.describe('home', () => {
  test('should not have any automatically detectable accessibility issues', async ({
    page,
  }) => {
    await page.goto('/')

    const accessibilityScanResults = await new AxeBuilder({ page })
      .disableRules('color-contrast')
      .analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })
})
