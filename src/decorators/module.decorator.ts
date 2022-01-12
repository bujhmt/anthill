import 'reflect-metadata';
import {Constructable} from '../core/types';
import {Prospector} from '../namespaces';

export interface ModuleParams {
    modules?: Prospector.Module[],
    workers?: Prospector.Worker[],
}

export default function Module(params: ModuleParams) {
    return <TFunction extends Function>(Constructor: Constructable<TFunction>) => {
        return class extends Constructor {
            constructor(...args) {
                super(...args);
            }
        };
    };
}
