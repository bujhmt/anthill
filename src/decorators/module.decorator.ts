import {Constructable} from '../core/interfaces/constructable.interface';

export interface ModuleParams {
    queue: string[],
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
