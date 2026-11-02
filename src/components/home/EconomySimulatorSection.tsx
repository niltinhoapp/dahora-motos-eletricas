import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calculator, TrendingDown, Zap, Fuel, Info } from 'lucide-react';
import { formatCurrency } from '../../lib/utils';

export function EconomySimulatorSection() {
  // Input parameters state
  const [kmPerDay, setKmPerDay] = useState(30);
  const [daysPerMonth, setDaysPerMonth] = useState(22);
  const [gasKmPerLiter, setGasKmPerLiter] = useState(30);
  const [gasPricePerLiter, setGasPricePerLiter] = useState(6.20);
  const [electricKwhPerKm, setElectricKwhPerKm] = useState(0.025);
  const [kwhRate, setKwhRate] = useState(0.85);

  // Calculations
  const results = useMemo(() => {
    const monthlyKm = kmPerDay * daysPerMonth;
    const annualKm = monthlyKm * 12;

    // Gas cost
    const monthlyGasLiters = monthlyKm / (gasKmPerLiter || 1);
    const monthlyGasCost = monthlyGasLiters * gasPricePerLiter;
    const annualGasCost = monthlyGasCost * 12;
    const gasCostPerKm = monthlyGasCost / (monthlyKm || 1);

    // Electric cost
    const monthlyKwh = monthlyKm * electricKwhPerKm;
    const monthlyElectricCost = monthlyKwh * kwhRate;
    const annualElectricCost = monthlyElectricCost * 12;
    const electricCostPerKm = monthlyElectricCost / (monthlyKm || 1);

    // Economy
    const monthlySavings = monthlyGasCost - monthlyElectricCost;
    const annualSavings = annualGasCost - annualElectricCost;
    const percentageSavings =
      monthlyGasCost > 0
        ? Math.round((monthlySavings / monthlyGasCost) * 100)
        : 0;

    return {
      monthlyKm,
      annualKm,
      monthlyGasCost,
      annualGasCost,
      gasCostPerKm,
      monthlyElectricCost,
      annualElectricCost,
      electricCostPerKm,
      monthlySavings,
      annualSavings,
      percentageSavings,
    };
  }, [
    kmPerDay,
    daysPerMonth,
    gasKmPerLiter,
    gasPricePerLiter,
    electricKwhPerKm,
    kwhRate,
  ]);

  return (
    <section className="section-padding bg-dahora-ice border-b border-dahora-border" id="simulador">
      <div className="container-dahora">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest text-dahora-emerald mb-2">
            <Calculator className="w-3.5 h-3.5" />
            <span>CALCULADORA DE ECONOMIA REAL</span>
          </div>
          <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-dahora-text">
            Descubra quanto você pode economizar
          </h2>
          <p className="text-sm text-dahora-gray mt-2">
            Ajuste os parâmetros abaixo de acordo com sua rotina e veja a diferença de custo entre gasolina e eletricidade.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Box (Inputs) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-dahora-border p-6 sm:p-8 shadow-card space-y-6">
            <h3 className="font-display font-bold text-lg text-dahora-text border-b border-gray-100 pb-3 flex items-center gap-2">
              <span>Suas Premissas de Deslocamento</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {/* Km per day */}
              <div>
                <label className="block text-xs font-semibold text-dahora-text mb-1.5">
                  Quilômetros por dia: <span className="text-dahora-emerald font-bold">{kmPerDay} km</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="150"
                  step="5"
                  value={kmPerDay}
                  onChange={(e) => setKmPerDay(Number(e.target.value))}
                  className="w-full accent-dahora-emerald cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                  <span>5 km</span>
                  <span>150 km</span>
                </div>
              </div>

              {/* Days per month */}
              <div>
                <label className="block text-xs font-semibold text-dahora-text mb-1.5">
                  Dias de uso no mês: <span className="text-dahora-emerald font-bold">{daysPerMonth} dias</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="31"
                  step="1"
                  value={daysPerMonth}
                  onChange={(e) => setDaysPerMonth(Number(e.target.value))}
                  className="w-full accent-dahora-emerald cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-400 mt-1">
                  <span>5 dias</span>
                  <span>31 dias</span>
                </div>
              </div>

              {/* Gas Consumption */}
              <div>
                <label className="block text-xs font-semibold text-dahora-text mb-1.5">
                  Consumo moto a combustão (km/L)
                </label>
                <input
                  type="number"
                  min="10"
                  max="60"
                  value={gasKmPerLiter}
                  onChange={(e) => setGasKmPerLiter(Number(e.target.value))}
                  className="input-field text-sm"
                />
              </div>

              {/* Gas Price */}
              <div>
                <label className="block text-xs font-semibold text-dahora-text mb-1.5">
                  Preço do litro da gasolina (R$)
                </label>
                <input
                  type="number"
                  step="0.10"
                  min="3.00"
                  max="12.00"
                  value={gasPricePerLiter}
                  onChange={(e) => setGasPricePerLiter(Number(e.target.value))}
                  className="input-field text-sm"
                />
              </div>

              {/* Electric Consumption */}
              <div>
                <label className="block text-xs font-semibold text-dahora-text mb-1.5 flex items-center justify-between">
                  <span>Consumo elétrico estimado</span>
                  <span className="text-[10px] text-gray-400">kWh/km</span>
                </label>
                <input
                  type="number"
                  step="0.005"
                  min="0.010"
                  max="0.080"
                  value={electricKwhPerKm}
                  onChange={(e) => setElectricKwhPerKm(Number(e.target.value))}
                  className="input-field text-sm"
                />
                <span className="text-[10px] text-gray-400 mt-0.5 block">
                  Média de veículos elétricos leves: ~0.025 kWh/km
                </span>
              </div>

              {/* Electric Tariff */}
              <div>
                <label className="block text-xs font-semibold text-dahora-text mb-1.5 flex items-center justify-between">
                  <span>Tarifa de energia elétrica</span>
                  <span className="text-[10px] text-gray-400">R$/kWh</span>
                </label>
                <input
                  type="number"
                  step="0.05"
                  min="0.40"
                  max="2.00"
                  value={kwhRate}
                  onChange={(e) => setKwhRate(Number(e.target.value))}
                  className="input-field text-sm"
                />
                <span className="text-[10px] text-gray-400 mt-0.5 block">
                  Média residencial com impostos: ~R$ 0,85
                </span>
              </div>
            </div>

            {/* Travel stats */}
            <div className="bg-gray-50 rounded-2xl p-4 flex flex-wrap justify-between gap-4 text-xs text-dahora-gray">
              <div>
                <span className="block font-medium">Distância mensal estimada:</span>
                <strong className="text-dahora-text text-sm">{results.monthlyKm} km</strong>
              </div>
              <div>
                <span className="block font-medium">Distância anual estimada:</span>
                <strong className="text-dahora-text text-sm">{results.annualKm.toLocaleString('pt-BR')} km</strong>
              </div>
            </div>
          </div>

          {/* Results Summary Box */}
          <div className="lg:col-span-5 bg-dahora-midnight text-white rounded-3xl border border-dahora-border-dark p-6 sm:p-8 shadow-premium space-y-6">
            <div className="flex items-center justify-between border-b border-dahora-border-dark pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-dahora-emerald">
                Resultado da Simulação
              </span>
              <span className="text-xs bg-dahora-emerald/20 text-dahora-emerald px-2.5 py-0.5 rounded-full font-bold">
                ~{results.percentageSavings}% de economia
              </span>
            </div>

            {/* Big Savings Highlight */}
            <div className="space-y-1">
              <span className="text-xs text-gray-400 font-medium">Economia anual estimada no bolso:</span>
              <div className="text-3xl sm:text-4xl font-extrabold text-dahora-emerald tracking-tight tabular-nums">
                {formatCurrency(results.annualSavings)}
              </div>
              <p className="text-xs text-gray-400">
                Aproximadamente {formatCurrency(results.monthlySavings)} por mês a menos em combustível.
              </p>
            </div>

            {/* Side by side comparison */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-dahora-border-dark">
              {/* Gas card */}
              <div className="bg-dahora-surface-dark p-4 rounded-2xl border border-dahora-border-dark space-y-2">
                <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                  <Fuel className="w-3.5 h-3.5 text-red-400" />
                  <span>Gasolina</span>
                </div>
                <div className="text-base font-bold text-white tabular-nums">
                  {formatCurrency(results.monthlyGasCost)}
                  <span className="text-[10px] text-gray-400 block font-normal">/mês</span>
                </div>
                <div className="text-[11px] text-gray-400">
                  {formatCurrency(results.gasCostPerKm)} / km
                </div>
              </div>

              {/* Electric card */}
              <div className="bg-dahora-surface-dark p-4 rounded-2xl border border-dahora-emerald/30 space-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-8 h-8 bg-dahora-emerald/10 rounded-bl-xl flex items-center justify-center">
                  <Zap className="w-4 h-4 text-dahora-emerald" />
                </div>
                <div className="flex items-center gap-1.5 text-dahora-cyan text-xs">
                  <Zap className="w-3.5 h-3.5 text-dahora-cyan" />
                  <span>Elétrico</span>
                </div>
                <div className="text-base font-bold text-dahora-emerald tabular-nums">
                  {formatCurrency(results.monthlyElectricCost)}
                  <span className="text-[10px] text-gray-400 block font-normal">/mês</span>
                </div>
                <div className="text-[11px] text-dahora-emerald-light">
                  {formatCurrency(results.electricCostPerKm)} / km
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="flex items-start gap-2 text-[11px] text-gray-400 bg-white/5 p-3 rounded-xl">
              <Info className="w-4 h-4 text-dahora-cyan shrink-0 mt-0.5" />
              <span>
                Os resultados são estimativas informativas baseadas nos parâmetros fornecidos. O custo real pode variar de acordo com o veículo, peso do condutor, relevo, estilo de condução e tarifa da concessionária de energia.
              </span>
            </div>

            {/* CTA Button */}
            <Link
              to="/veiculos"
              className="btn-primary w-full py-3.5 text-sm flex items-center justify-center gap-2 shadow-glow-emerald"
            >
              <span>ENCONTRAR MEU VEÍCULO</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
