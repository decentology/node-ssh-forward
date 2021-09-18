/// <reference types="node" />
interface Options {
    username?: string;
    password?: string;
    privateKey?: string | Buffer;
    agentForward?: boolean;
    bastionHost?: string;
    passphrase?: string;
    endPort?: number;
    endHost: string;
    agentSocket?: string;
    skipAutoPrivateKey?: boolean;
    noReadline?: boolean;
}
interface ForwardingOptions {
    fromPort: number;
    toPort: number;
    toHost?: string;
}
declare class SSHConnection {
    private options;
    private debug;
    private server;
    private connections;
    private isWindows;
    constructor(options: Options);
    shutdown(): Promise<void>;
    tty(): Promise<void>;
    executeCommand(command: any): Promise<void>;
    private shell;
    private establish;
    private connectViaBastion;
    private connect;
    private getPassphrase;
    forward(options: ForwardingOptions): Promise<unknown>;
}
export { SSHConnection, Options };
