export const metadata = {
  title: 'Bizu do Cadete - Gerador de Contas',
  description: 'Painel administrativo para gerenciar contas',
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
