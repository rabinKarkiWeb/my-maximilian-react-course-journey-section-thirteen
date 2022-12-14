import {Component} from "react";
class ErrorBoundary extends Component {
  constructor(props) {
	super(props);
	this.state = { hasError: false };
  }

  componentDidCatch(error) {
	// Display fallback UI
	this.setState({ hasError: true });
  }

  render() {
	if (this.state.hasError) {
	  // You can render any custom fallback UI
	  return <h1 style={{color:"white"}}>Something went wrong.</h1>;
	}
	return this.props.children;
  }
}
export default ErrorBoundary;