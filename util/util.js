export default class Util {
    constructor() {
        this.code = null;
        this.message = null;
        this.type = null;
        this.data = null;
    }
  
    setSuccess(statusCode, code, message, type, data, traceId) {
        this.statusCode = statusCode;
        this.code = code;
        this.message = message;
        this.type = type;
        this.data = data;
    }
  
    setError(statusCode, code, message, data, traceId) {
        this.statusCode = statusCode;
        this.code = code;
        this.message = message;
        this.type = 'error';
        this.data = data;
    }
  
    send(res) {
        const result = {
            code: this.code,
            message: this.message,
            type: this.type,
            data: this.data ? this.data : {},
        };
        return res.status(this.statusCode).json(result);
    }
  }