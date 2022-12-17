import Http from 'http';

async function InjectHttpInterceptor() {
    const oldEmit = Http.Server.prototype.emit;

    Http.Server.prototype.emit = function (...args) {
        const [type, _, response] = args;

        if (type === 'request') {
            response.setHeader('X-Instrumented-By', 'Luan');
        }
        
        return oldEmit.apply(this, args);
    }
}

export { InjectHttpInterceptor };
