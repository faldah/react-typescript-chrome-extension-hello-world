import * as React from "react";

interface IProps {
    name: string;
}

// first argument represents props, second argument represents state .
export class App extends React.Component<IProps, {}> {
    render(): JSX.Element {
        return <h1>Hello {this.props.name}</h1>;
    }
}
