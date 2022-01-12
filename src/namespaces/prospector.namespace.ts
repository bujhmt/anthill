// eslint-disable-next-line max-classes-per-file
import {Browser, Page} from '../core/types';

export namespace Prospector {
    abstract class ProspectorEntity {
        constructor(
            public readonly browser: Browser,
            public readonly page: Page,
        ) {}
    }

    export abstract class Module extends ProspectorEntity {
        protected abstract onModuleInit(): void | Promise<void>;
    }

    export abstract class Worker extends ProspectorEntity {

    }
}
