type TEventBus = "ws-main"

interface IObject {
    [key: string]: string;
}

export const Confirm: (title: string, text: string, confirmCB?: () => void, cancelCB?: () => void) => void;

/**
 * @param timeout - ms. 0: manual close；-1: always show; 6000: default
 */
export const Message: (text: string, timeout: number, type: "info" | "error", id?: string) => void;

export class EventBus {
    on(type: TEventBus, listener: (event: CustomEvent<any>) => void): void;

    once(type: TEventBus, listener: (event: CustomEvent<any>) => void): void;

    off(type: TEventBus, listener: (event: CustomEvent<any>) => void): void;

    emit(type: TEventBus, detail?: any): boolean;
}

export class App {
    plugins: Plugin[];
}

export abstract class Plugin {
    eventBus: EventBus;
    i18n: IObject;

    constructor(options: {
        app: App,
        id: string,
        name: string,
        i18n: IObject
    })

    onload(): void;

    onunload(): void;

    // registerCommand(command: IPluginCommand): void;

    // registerSettingRender(settingRender: SettingRender): void;

    loadStorage(filename: string): Promise<any>;

    writeStorage(filename: string, content: any): Promise<void>;
}