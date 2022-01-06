export type Constructable<T extends Function, I = any, O extends Object = any> = T & { new(...args: I[]): O };
