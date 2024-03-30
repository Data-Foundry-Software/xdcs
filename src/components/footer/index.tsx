import React from 'react'

import styles from './styles.module.scss'
import Image from 'next/image'
import Link from 'next/link'

type Props = {}

const Footer = (props: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.socialContainer}>
        <div className={styles.social}>
          <Link href={'https://twitter.com/xinfin_official'}>
            <Image width={32} height={32} src={'/assets/social/twitter.svg'} alt='' />
          </Link>
        </div>

        <div className={styles.social}>
          <Link href={'https://www.instagram.com/xinfin_xdc_network/'}>
            <Image width={32} height={32} src={'/assets/social/insta.svg'} alt='' />
          </Link>
        </div>

        <div className={styles.social}>
          <Link href={'https://t.me/xinfintalk'}>
            <Image width={32} height={32} src={'/assets/social/telegram.svg'} alt='' />
          </Link>
        </div>
      </div>

      <div className={styles.optionsContainer}>
        <Link href={'/privacypolicy'}>
          <div className={styles.option}>
            Privacy Policy
          </div>
        </Link>

        <Link href={'/contact'}>
          <div className={styles.option}>
            Contact Us
          </div>
        </Link>
      </div>

      <div className={styles.rights}>
        ©2023 by X Digital Capital Solutions
      </div>
    </div>
  )
}

export default Footer