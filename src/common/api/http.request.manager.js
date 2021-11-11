import axios from "axios";
import instances from "../../resources/instances.json";

class HttpRequestManager {
    static makeRequest(verb, uri, data = "", isAuthValid = true) {
        let instance = null;
        let url = '';
        switch (isAuthValid) {
            case false:
                instance = axios.create(instances.invalidCredentials);
            case true:
                instance = axios.create(instances.validCredentials);
            default:
                url = `${instance.defaults.baseUrl}${uri}`;
                break;
        }

        switch (verb) {
            case "GET":
                return instance.get(url, instance.defaults.auth);
            case "POST":
                return instance.post(url, data, instance.defaults.auth);
            case "PUT":
                return instance.put(url, data, instance.defaults.auth);
            case "DELETE":
                return instance.delete(url, instance.defaults.auth);
        }
    }
}

export default HttpRequestManager;
