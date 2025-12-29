import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'KREO - Dashboard de Indicadores Macroeconômicos',
  description: 'Análise Imobiliária Inteligente',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
