import * as React from 'react'

import * as types from '@/lib/types'

import { PageHead } from './PageHead'
import Link from 'next/link';
import styles from './styles.module.css'

export const Page404: React.FC<types.PageProps> = ({ site }) => {
  const title = site?.name || 'Notion Page Not Found'

  return (
    <>
      <PageHead site={site} title={title} />

      <div className={styles.container}>
        <main className={styles.main}>
          <h1>Page Not Found</h1>

          {/* {error ? (
            <p>{error.message}</p>
          ) : (
            pageId && (
              <p>
                Make sure that Notion page &quot;{pageId}&quot; is publicly
                accessible.
              </p>
            )
          )} */}


          <div>
            <Link className="notion-link" href="/">
              <a>Go to Home Page</a>
            </Link>
          </div>


          <img
            src='/404.png'
            alt='404 Not Found'
            className={styles.errorImage}
          />
        </main>
      </div>
    </>
  )
}
