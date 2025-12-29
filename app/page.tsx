export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <nav className="border-b border-slate-700 bg-slate-900/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center font-bold">K</div>
            <span className="text-xl font-bold">KREO</span>
          </div>
          <button className="bg-gradient-to-r from-orange-500 to-cyan-500 px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition">Começar Agora</button>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-6 py-32 text-center">
        <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent mb-6">Análise de Viabilidade Imobiliária</h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">Tome decisões estratégicas com análises precisas de VGV, ROI, TIR e cenários de mercado.</p>
        <button className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition">Iniciar Análise Gratuita</button>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
          <div className="text-gray-400">Projetos Analisados</div>
        </div>
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-cyan-500 mb-2">R$ 2.5B</div>
          <div className="text-gray-400">VGV Avaliado</div>
        </div>
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-blue-500 mb-2">98%</div>
          <div className="text-gray-400">Precisão</div>
        </div>
        <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-green-500 mb-2">150+</div>
          <div className="text-gray-400">Empresas</div>
        </div>
      </section>

      <footer className="border-t border-slate-700 bg-slate-900/50 py-12">
        <div className="max-w-7xl mx-auto px-6 text-center text-gray-400">
          <p>© 2024 KREO. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
