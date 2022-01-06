import {Page} from 'puppeteer';
import {Constructable} from '../interfaces/constructable.interface';

export interface ModuleParams {
    queue: string[],
}

abstract class Tools {
    protected abstract page: Page;
}

export default function Module({queue}: ModuleParams) {
    return <TFunction extends Function>(Constructor: Constructable<TFunction>) => {
        return class extends Constructor {
            constructor(...args) {
                super(...args);
            }
        };
    };
}
