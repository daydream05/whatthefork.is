import Link from '@/components/link'
import styles from './footer.module.css'

const Footer = ({ slug }) => {
  return (
    <>
      <footer className={styles.footer}>
        <div>
          <Link href="https://justjavascript.com" external gray>
            justjavascript
          </Link>
          <Link href="https://overreacted.io" external gray>
            overreacted
          </Link>
        </div>
        <Link href="/feed.xml" external gray>
          rss
        </Link>
      </footer>
      <footer className={styles.footer}>
        <div />
        <Link href={`https://whatthefuck.is/${slug ?? ''}`} external gray>
          curse mirror
        </Link>
        <div />
      </footer>
    </>
  )
}

export default Footer
