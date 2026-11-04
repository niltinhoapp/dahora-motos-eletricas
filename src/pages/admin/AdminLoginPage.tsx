import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Zap, Lock, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';
import { useAdminAuth } from '../../contexts/AdminAuthContext';

export function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAdminAuth();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(password)) {
      navigate('/admin');
    } else {
      setError('Senha de acesso incorreta.');
    }
  };

  return (
    <div className="min-h-screen bg-dahora-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-dahora-surface-dark border border-dahora-border-dark p-8 rounded-3xl shadow-2xl space-y-6">
        {/* Logo */}
        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-dahora-emerald to-dahora-cyan flex items-center justify-center text-dahora-black mx-auto shadow-glow-emerald">
            <Zap className="w-6 h-6 fill-dahora-black" />
          </div>
          <h1 className="font-display font-extrabold text-xl text-white">
            Acesso Administrativo
          </h1>
          <p className="text-xs text-gray-400">
            Da Hora Motos Elétricas — Gestão de Veículos e Pedidos
          </p>
        </div>

        {error && (
          <div className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 rounded-xl text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label htmlFor="admin-password" className="block text-xs font-semibold text-gray-300 mb-1.5 flex items-center gap-1.5 cursor-pointer">
              <Lock className="w-3.5 h-3.5 text-dahora-emerald" />
              <span>Senha de Segurança</span>
            </label>
            <input
              id="admin-password"
              name="adminPassword"
              type="password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError('');
              }}
              placeholder="Digite a senha administrativa"
              aria-label="Senha de segurança administrativa"
              className="w-full px-4 py-3 rounded-xl bg-dahora-midnight border border-dahora-border-dark text-white text-sm focus:border-dahora-cyan focus:outline-none"
            />
            <p className="text-[11px] text-gray-500 mt-1">
              Senha padrão de inicialização: <code className="text-dahora-cyan font-mono">admin123</code>
            </p>
          </div>

          <button
            type="submit"
            className="btn-primary w-full py-3 text-xs flex items-center justify-center gap-2 shadow-glow-emerald"
          >
            <span>ENTRAR NO PAINEL</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-4 border-t border-dahora-border-dark text-center">
          <Link to="/" className="text-xs text-gray-500 hover:text-gray-300">
            &larr; Voltar para a loja pública
          </Link>
        </div>
      </div>
    </div>
  );
}
