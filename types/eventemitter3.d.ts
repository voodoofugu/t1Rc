declare module "eventemitter3" {
  export default class EventEmitter<
    EventTypes extends Record<string, any> = Record<string, any>
  > {
    constructor();
    on<Event extends keyof EventTypes>(
      event: Event,
      fn: (value: EventTypes[Event], ...args: any[]) => void,
      context?: any
    ): this;
    off<Event extends keyof EventTypes>(
      event: Event,
      fn?: (value: EventTypes[Event], ...args: any[]) => void,
      context?: any,
      once?: boolean
    ): this;
    emit<Event extends keyof EventTypes>(
      event: Event,
      value: EventTypes[Event],
      ...args: any[]
    ): boolean;
    once<Event extends keyof EventTypes>(
      event: Event,
      fn: (value: EventTypes[Event], ...args: any[]) => void,
      context?: any
    ): this;
    removeAllListeners(event?: keyof EventTypes): this;
  }
}
