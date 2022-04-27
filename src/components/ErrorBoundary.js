import { Component } from "react";

class ErrorBoundary extends Component{

    constructor(){
        super();
        this.state = { hasError: false };
    }

    componentDidCatch(error){
        // log the error or send to the server
        console.log(error);

        this.setState({ hasError: true });
    }

    render(){
        if (this.state.hasError){
            return <h2>SOMETHING WENT WRONG!</h2>
        }
        return this.props.children;
    }
}


export default ErrorBoundary;