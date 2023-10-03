// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { greet } from '@trucos/utils'
import NxWelcome from './nx-welcome';

export function App() {
  const greeting = greet('Mr. Potato');
  return (
    <div>
      {greeting}
      <NxWelcome title="mi-react-app" />
    </div>
  );
}

export default App;
