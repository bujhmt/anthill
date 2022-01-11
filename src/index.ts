import Module from './decorators/module.decorator';
import {Prospector} from './namespaces';

@Module({queue: ['page?']})
class MyProspector extends Prospector.Module {

    protected onModuleInit(): void | Promise<void> {
        return undefined;
    }
}
