import {introspect} from '@bujhmt/dev-js';
import Module from './decorators/module.decorator';
import {Prospector} from './namespaces';

@Module({
    modules: [],
    workers: [],
})
class MyProspector extends Prospector.Module {
    protected onModuleInit(): void | Promise<void> {
        return undefined;
    }
}

console.log();
