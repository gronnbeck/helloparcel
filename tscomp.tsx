import * as React from 'react';


export interface HelloProps { name: string; }

export const HelloTypeScript = (props: HelloProps) => <div>Hello to {props.name} from TypeScript</div>;
