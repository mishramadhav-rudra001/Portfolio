import React from 'react';
import { CheckCircle2, AlertCircle, Info, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const { message, type = 'success' } = toast;

  return (
    <div className="fixed bottom-6 right-6 z-[100] max-w-sm animate-slideUp">
      <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-xl shadow-2xl ${
        type === 'success'
          ? 'bg-[#0f172a]/90 border-emerald-500/40 text-emerald-300'
          : type === 'error'
          ? 'bg-[#0f172a]/90 border-rose-500/40 text-rose-300'
          : 'bg-[#0f172a]/90 border-blue-500/40 text-blue-300'
      }`}>
        {type === 'success' && <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />}
        {type === 'error' && <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />}
        {type === 'info' && <Info className="w-4 h-4 shrink-0 text-blue-400" />}
        
        <p className="text-xs font-medium text-slate-200">{message}</p>

        <button
          onClick={onClose}
          className="ml-auto p-1 text-slate-400 hover:text-white rounded-md transition-colors"
          aria-label="Dismiss toast"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
