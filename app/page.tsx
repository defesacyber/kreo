import React from 'react';

export default function Home() {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>KREO - Análise de Viabilidade Imobiliária</title>
        <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; background: #0f172a; color: #fff; }
          .container { max-width: 1200px; margin: 0 auto; padding: 20px; }
          header { padding: 20px 0; border-bottom: 1px solid #1e293b; margin-bottom: 40px; }
          header h1 { font-size: 28px; margin-bottom: 20px; }
          h2 { font-size: 36px; margin: 40px 0 20px; text-align: center; }
          p { font-size: 16px; line-height: 1.6; color: #cbd5e1; margin-bottom: 20px; }
          .grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 30px 0; }
          .card { background: #1e293b; border: 1px solid #334155; border-radius: 8px; padding: 20px; }
          .card h3 { font-size: 20px; margin-bottom: 10px; color: #22d3ee; }
          .stats { text-align: center; margin: 40px 0; }
          .stat-item { display: inline-block; margin: 0 30px; }
          .stat-number { font-size: 32px; font-weight: bold; color: #f97316; }
          .stat-label { color: #94a3b8; margin-top: 5px; }
          .cta { background: linear-gradient(135deg, #f97316, #06b6d4); color: white; padding: 15px 40px; border: none; border-radius: 6px; cursor: pointer; font-size: 16px; font-weight: bold; margin: 20px 0; }
          .cta:hover { opacity: 0.9; }
          footer { text-align: center; padding: 40px 0; border-top: 1px solid #1e293b; margin-top: 40px; color: #64748b; }
        `}</style>
      </head>
      <body>
        <div className="container">
          <header>
            <h1>🚀 KREO - Análise de Viabilidade Imobiliária</h1>
            <p>Plataforma #1 em Viabilidade Imobiliária</p>
          </header>

          <section>
            <h2>Tome decisões estratégicas</h2>
            <p style={{ textAlign: 'center', fontSize: '18px', marginBottom: '40px' }}>
              Análises precisas de VGV, ROI, TIR e cenários de mercado. Potencialize seus empreendimentos com inteligência artificial.
            </p>
            <div style={{ textAlign: 'center' }}>
              <button className="cta">Iniciar Análise Gratuita</button>
            </div>
          </section>

          <section className="stats">
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label">Projetos Analisados</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">R$ 2.5B</div>
              <div className="stat-label">VGV Avaliado</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">98%</div>
              <div className="stat-label">Precisão</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">150+</div>
              <div className="stat-label">Empresas</div>
            </div>
          </section>

          <section>
            <h2>Funcionalidades</h2>
            <div className="grid">
              <div className="card">
                <h3>📋 Análise de Viabilidade</h3>
                <p>Ferramentas profissionais para análise completa de viabilidade econômica de empreendimentos imobiliários</p>
              </div>
              <div className="card">
                <h3>📨 Relatórios Inteligentes</h3>
                <p>Gere relatórios detalhados com gráficos, projeções e recomendações baseadas em IA</p>
              </div>
              <div className="card">
                <h3>⚠️ Análise de Riscos</h3>
                <p>Identifique potenciais riscos em seus projetos com análise preditiva</p>
              </div>
              <div className="card">
                <h3>📏 Pesquisa Qualitativa</h3>
                <p>Análise qualitativa de localização e potencial de mercado</p>
              </div>
            </div>
          </section>

          <footer>
            <p>© 2024 KREO. Todos os direitos reservados.</p>
            <p>Deploy: Vercel | Framework: Next.js 15</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
