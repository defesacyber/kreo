'use client';

import React, { useState } from 'react';
import { ChevronRight, BarChart3, TrendingUp, MapPin, Users, Shield } from 'lucide-react';

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-black/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center font-bold">K</div>
            <span className="text-xl font-bold">KREO</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-400 hover:text-white transition">Funcionalidades</a>
            <a href="#pricing" className="text-gray-400 hover:text-white transition">Planos</a>
            <a href="#about" className="text-gray-400 hover:text-white transition">Sobre</a>
          </div>
          <button className="bg-gradient-to-r from-orange-500 to-cyan-500 px-6 py-2 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition">Começar Agora</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-cyan-500/10 border border-cyan-500/30 rounded-full px-4 py-2 mb-6">
          <span className="text-cyan-400 text-sm font-semibold">🚀 Plataforma #1 em Viabilidade Imobiliária</span>
        </div>
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-cyan-200 to-blue-300 bg-clip-text text-transparent mb-6">Análise de Viabilidade Imobiliária Inteligente</h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-10">Tome decisões estratégicas com análises precisas de VGV, ROI, TIR e cenários de mercado. Potencialize seus empreendimentos com inteligência artificial.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition flex items-center justify-center gap-2">
            Iniciar Análise Gratuita <ChevronRight size={20} />
          </button>
          <button className="border border-gray-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-900 transition">Ver Demonstração</button>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
          <div className="text-gray-400">Projetos Analisados</div>
        </div>
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-cyan-500 mb-2">R$ 2.5B</div>
          <div className="text-gray-400">VGV Avaliado</div>
        </div>
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-blue-500 mb-2">98%</div>
          <div className="text-gray-400">Precisão</div>
        </div>
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 text-center">
          <div className="text-3xl font-bold text-green-500 mb-2">150+</div>
          <div className="text-gray-400">Empresas</div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-16">Tudo que você precisa para decisões estratégicas</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {[
            { icon: BarChart3, title: 'Análise de Viabilidade', desc: 'Ferramentas profissionais para análise completa de viabilidade econômica de empreendimentos imobiliários' },
            { icon: TrendingUp, title: 'Relatórios Inteligentes', desc: 'Gere relatórios detalhados com gráficos, projeções e recomendações baseadas em IA' },
            { icon: Shield, title: 'Análise de Riscos', desc: 'Identifique potenciais riscos em seus projetos com análise preditiva' },
            { icon: MapPin, title: 'Pesquisa Qualitativa', desc: 'Análise qualitativa de localização e potencial de mercado' },
          ].map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div key={i} className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-xl p-8 hover:border-cyan-500/50 transition">
                <Icon size={40} className="text-orange-500 mb-4" />
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-6">Pronto para começar?</h2>
        <p className="text-xl text-gray-400 mb-10">Faça uma auditoria completa do seu projeto. Você apresentará à auditoria e o plano para deploy no Vercel.</p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="seu@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-cyan-500 transition"
          />
          <button className="bg-gradient-to-r from-orange-500 to-cyan-500 px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition">Começar Agora - Grátis</button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-900/50 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Produto</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Dashboard</a></li>
                <li><a href="#" className="hover:text-white transition">Análise</a></li>
                <li><a href="#" className="hover:text-white transition">Relatórios</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Carreiras</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Suporte</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition">Documentação</a></li>
                <li><a href="#" className="hover:text-white transition">Status</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Privacidade</a></li>
                <li><a href="#" className="hover:text-white transition">Termos</a></li>
                <li><a href="#" className="hover:text-white transition">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex justify-between items-center">
            <p className="text-gray-500">© 2024 KREO. Todos os direitos reservados.</p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition">Twitter</a>
              <a href="#" className="text-gray-400 hover:text-white transition">LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white transition">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
