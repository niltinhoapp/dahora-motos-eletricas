import React, { Component, type ErrorInfo, type ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
  errorInfo?: ErrorInfo;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error caught by ErrorBoundary:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#060911] text-white flex items-center justify-center p-6">
          <div className="max-w-lg w-full bg-[#090E1A] border border-red-500/30 rounded-3xl p-8 text-center space-y-6 shadow-2xl">
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 flex items-center justify-center mx-auto">
              <AlertTriangle className="w-8 h-8" />
            </div>
            <div>
              <h1 className="font-display font-extrabold text-2xl text-white">
                Ops! Ocorreu um problema ao carregar a página
              </h1>
              <p className="text-sm text-gray-400 mt-2">
                O aplicativo encontrou um erro inesperado durante a inicialização.
              </p>
            </div>

            {this.state.error && (
              <div className="text-left bg-black/50 border border-white/10 rounded-xl p-4 text-xs font-mono text-red-300 overflow-x-auto">
                <p className="font-bold text-red-400">{this.state.error.name}: {this.state.error.message}</p>
                {this.state.error.stack && (
                  <pre className="mt-2 text-[11px] text-gray-400 whitespace-pre-wrap">{this.state.error.stack}</pre>
                )}
              </div>
            )}

            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center gap-2 bg-[#10B981] hover:bg-[#059669] text-[#060911] font-bold px-6 py-3 rounded-xl transition-colors text-sm"
            >
              <RefreshCw className="w-4 h-4" />
              <span>Recarregar Página</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
