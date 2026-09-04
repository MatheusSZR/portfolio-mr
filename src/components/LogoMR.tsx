export function LogoMR() {
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
      <div className="w-10 h-10 border border-[#2A2A2E] bg-[#0A0A0C] flex items-center justify-center relative overflow-hidden transition-colors group-hover:border-[#EDEDED]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/10 via-transparent to-[#3B82F6]/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        <span className="font-mono text-sm font-bold tracking-tighter text-[#EDEDED] z-10">
          M<span className="text-[#10B981]">/</span>R
        </span>
      </div>
      <div className="flex flex-col">
        <span className="font-mono text-[10px] tracking-widest text-[#666666] uppercase">System Identity</span>
        <span className="font-mono text-xs text-[#A0A0A0]">v2.6 // Core</span>
      </div>
    </div>
  );
}