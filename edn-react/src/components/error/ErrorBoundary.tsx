import { Component, ErrorInfo, ReactNode } from "react";
import ErrorPage from "../../pages/Error";

type ErrorBoundaryProps = {
  children: ReactNode;
  setAppError: (error: Error) => void;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error | null;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log("THIS IS WORKING");
    console.error(error, errorInfo);
    this.setState({ hasError: true });
    this.props.setAppError(error);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage error={this.state.error!} />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
