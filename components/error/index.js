import Head from 'next/head'

import Page from '@components/page'
import Link from '@components/link'
import styles from './error.module.css'

const Error = ({ status }) => {
  return (
    <Page title={status || 'Error'} showSlug={false}>
      <Head>
        <title>{[status]}</title>
      </Head>

      {status === 404 ? (
        <>
          <h1>404</h1>
          <p>Someone forked up.</p>
          <Link underline href="/">Go Home</Link>
        </>
      ) : (
        <section className={styles.section}>
          <span>{status || 'пиздец'}</span>
          <p>For fork’s sake.</p>
        </section>
      )}
    </Page>
  )
}

export default Error
