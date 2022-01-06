import {introspect} from '@bujhmt/dev-js';
import Module from './decorators/module.decorator';

@Module({queue: ['page?']})
class Anthill {
    own: string = 'cock';
}

const test = new Anthill();

console.log(introspect(test));
console.log(Object.getOwnPropertyNames(test));
