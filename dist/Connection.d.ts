import { ConnectConfig } from 'ssh2';
/**
 * @prop {number} [endPort] - endPort is identical to port and can be used for clarity.
 * @prop {number} [port] - port is the port of the SSH server. Recommend using endPort for clarity
 */
declare type Options = {
    bastionHost?: string;
    endPort?: number;
    endHost: string;
    agentSocket?: string;
    skipAutoPrivateKey?: boolean;
    noReadline?: boolean;
} & ConnectConfig;
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
