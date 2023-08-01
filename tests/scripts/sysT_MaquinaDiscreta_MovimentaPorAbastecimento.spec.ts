import { test, expect } from '@playwright/test';

test('arrancar', async ({ page }) => {
  await page.goto('http://ktmesapp03/TS/Account/LogOn.aspx?');
  await page.getByLabel('Login').fill('kt0023');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Gom56919');
  await page.getByLabel('Password').press('Enter');
  await page.getByRole('link', { name: 'Avito Silva (KZT) ' }).click();
  await page.goto('http://ktmesapp03/TS/pages/root/?c=ETS.Settings.Main');
  await page.getByRole('link', { name: 'Avito Silva (KZT) ' }).click();
  await page.getByRole('link', { name: 'Sites' }).click();
  await page.getByRole('link', { name: 'PSR PSR' }).click();
  await page.locator('#contentPage_ctl01').click();
  await page.locator('#contentPage_ctl01').click();
  await page.locator('#contentPage_ctl04').click();
  await page.getByRole('link', { name: 'Arrancar/Parar Trabalho #ND# Arrancar/Parar ordem de fabrico em bancas' }).click();
  await page.getByRole('link', { name: ' Trac 09 Sem Automação' }).click();
  await page.getByRole('link', { name: ' PSGEP9991 COZ CHE RL BP 12 14 1º 4º SB DEV_COZ CHE PSR.100017615' }).click();
  await page.getByLabel('Equipa').selectOption('Teste');
 await page.getByText('Iniciar Trabalho').click();
});

test('parar', async({ page }) => {
  await page.goto('http://ktmesapp03/TS/Account/LogOn.aspx?');
  await page.getByLabel('Login').fill('kt0023');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Gom56919');
  await page.getByLabel('Password').press('Enter');
  await page.getByRole('link', { name: 'Avito Silva (KZT) ' }).click();
  await page.getByRole('link', { name: 'Sites' }).click();
  await page.getByRole('link', { name: 'PSR PSR' }).click();
  await page.locator('#contentPage_ctl01').click();
  await page.locator('#contentPage_ctl01').click();
  await page.locator('#contentPage_ctl04').click();
  await page.getByRole('link', { name: 'Arrancar/Parar Trabalho #ND# Arrancar/Parar ordem de fabrico em bancas' }).click();
  await page.getByText('Trac 09(Teste)').click();
  await page.getByText('Parar Trabalho', { exact: true }).click();
});