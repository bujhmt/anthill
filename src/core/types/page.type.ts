import {Page as PuppeteerPage} from 'puppeteer';

export type Page<TPage extends PuppeteerPage = PuppeteerPage> = TPage;
