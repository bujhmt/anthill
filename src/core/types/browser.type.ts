import {Browser as PuppeteerBrowser} from 'puppeteer';

export type Browser<TBrowser extends PuppeteerBrowser = PuppeteerBrowser> = TBrowser;
