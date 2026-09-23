export interface AppProps {
  title?: string;
}

export function App({ title = 'alphatest-12345-frontend' }: AppProps) {
  return (
    <main>
      <h1>{title}</h1>
    </main>
  );
}