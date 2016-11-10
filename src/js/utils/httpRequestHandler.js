const rootUrl = 'https://assembl2.coeus.ca/api/v1/';

class RequestHandler {
  static request(obj){
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
      let url = rootUrl + obj.url;
      xhr.open(obj.method, url);
      if (obj.headers) {
        Object.keys(obj.headers).forEach(key => {
          xhr.setRequestHeader(key, obj.headers[key]);
        });
      }
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(JSON.parse(xhr.response));
        } else {
          reject(xhr.statusText);
        }
      };
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send(obj.body);
    });
  }
}

export default RequestHandler;