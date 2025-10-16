import { RemoteServiceProperties, HOST_KEY, PORT_KEY } from './Properties';

export namespace ServiceUtilsModule {
    export class RemoteServiceUtils {              
        private remoteProperties = {host: '', port:''}
        constructor() {                                 
            this.remoteProperties = require('./remote-properties.json');
        }

        getHost(): string {
            let host = this.remoteProperties.host;
            if (host == HOST_KEY) {
                host = "rp-lights";
            }
            return host;
        }

        getPort(): number {
            let port = this.remoteProperties.port;
            if (port == PORT_KEY) {
                port = "8080";
            }            
            return Number(port);
        }
    }       
}