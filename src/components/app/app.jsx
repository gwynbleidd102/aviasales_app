import Main from '../main'
import ErrorBoundary from '../error-boundary'
import Logo from '../../assets/images/Logo.svg'

import styles from './app.module.scss'

function App() {
  return (
    <ErrorBoundary>
      <div className={styles.app}>
        <header className={styles.app__logo}>
          <img src={Logo} alt="Логотип сайта Aviasales" />
        </header>
        <Main />
      </div>
    </ErrorBoundary>
  )
}

export default App
