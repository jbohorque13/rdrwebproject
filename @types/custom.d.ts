declare module '*.png';
declare module '*.mp4';
declare module '*.woff';
declare module '*.woff2';
declare module '*.eot';
declare module '*.svg';
declare module "*.svg" {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<
    SVGSVGElement
  > & { title?: string }>;

  const src: string;
  export default src;
}