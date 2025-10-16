import { ServiceUtilsModule } from "../utils/RemoteServiceUtils";

export class RemoteService {
    private host: string = "rp-lights";
    private port: number = 8080;
    private remoteServiceUtils = new ServiceUtilsModule.RemoteServiceUtils();
    constructor() {
        this.host = this.remoteServiceUtils.getHost();
        this.port = this.remoteServiceUtils.getPort();
    }
    
    turn(alias: string, operation: string) { 
        console.log(alias + "," + operation);

        var url = "http://"+this.host+":"+this.port+"/api/alias/"+alias+"/operation/"+operation;
        console.log("url: " + url);
        const request: RequestInfo = new Request(url, {
            // We need to set the `method` to `POST` and assign the headers
            method: 'POST',
            headers: {
                "Access-Control-Allow-Origin": "*"
            },
        })

        fetch(request);
    }
}
 