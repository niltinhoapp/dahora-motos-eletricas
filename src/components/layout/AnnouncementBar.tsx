import { useState } from 'react';
import { X, Sparkles } from 'lucide-react';
import { defaultStoreSettings } from '../../data/demo';

export function AnnouncementBar() {
  const [dismissed, setDismissed] = useState(false);
  const barConfig = defaultStoreSettings.announcementBar;

  if (dismissed || !barConfig || !barConfig.isActive) {
    return null;
  }

  return (
    <div className="bg-dahora-black text-white text-xs border-b border-dahora-border-dark relative z-50 min-h-[36px] flex items-center">
      <div className="container-dahora py-2 px-4 flex items-center justify-between">
        <div className="flex-1 flex items-center justify-center gap-2 text-center font-medium tracking-wide">
          <Sparkles className="w-3.5 h-3.5 text-dahora-emerald shrink-0 animate-pulse" />
          <span className="text-gray-200">
            {barConfig.text}
          </span>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="text-gray-400 hover:text-white p-1 rounded-md transition-colors focus-visible:outline-dahora-cyan"
          aria-label="Fechar barra de avisos"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
