import {Browser as PuppeteerBrowser, Page as PuppeteerPage} from 'puppeteer';

export namespace Prospector {
    type Page<TPage = PuppeteerPage> = TPage;
    type Browser<TBrowser = PuppeteerBrowser> = TBrowser;

    export abstract class Module {
        protected readonly page: Page;
        protected readonly browser: Browser;

        protected abstract onModuleInit(): void | Promise<void>;
    }
}
