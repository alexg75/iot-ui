export default async function turn(alias: string, operation: string) {
    console.log(alias + "," + operation);

    var url = "http://rp-lights:8080/api/alias/"+alias+"/operation/"+operation;
    console.log("url: " + url);
    const request: RequestInfo = new Request(url, {
        // We need to set the `method` to `POST` and assign the headers
        method: 'POST',
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
    })

    try {
        let response = await fetch(request)
    } catch (e) {
        console.error(e);
    }
}

 