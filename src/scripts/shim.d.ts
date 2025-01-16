///<reference types="styled-jsx" />
declare module "*.worker.js" {
    const worker: () => Worker;

    export default worker;
}
