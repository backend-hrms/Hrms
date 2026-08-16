declare namespace React { type ReactNode = any; }
declare namespace JSX { interface IntrinsicElements { [elemName: string]: any } }
declare module 'react/jsx-runtime' { export const jsx:any; export const jsxs:any; export const Fragment:any; }
declare module 'react' { export function useState<T>(initial:T):[T,(value:T)=>void]; }
declare module 'next/link' { const Link:(props:any)=>any; export default Link; }
declare module 'next/navigation' { export function redirect(path:string):never; }
declare module 'next' { export namespace MetadataRoute { type Manifest=any } }
declare module 'node:crypto' { const crypto:any; export default crypto; }
declare const process:{env:Record<string,string|undefined>};
declare const require:any;
