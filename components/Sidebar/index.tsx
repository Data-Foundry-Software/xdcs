import { useRouter } from 'next/router'
import React, { useContext, useRef } from 'react'
import { SidebarContext } from '../../contexts/Sidebar'
import styles from './styles.module.scss'

const Sidebar: React.FC = () => {
  const route = useRouter()
  const { closeSidebar } = useContext(SidebarContext)

  const animateNavItem01 = useRef<HTMLDivElement>(null)
  const animateNavItem02 = useRef<HTMLDivElement>(null)
  const animateNavItem03 = useRef<HTMLDivElement>(null)

  const animate = (type: string, ref: React.RefObject<HTMLDivElement>) => {
    switch (type) {
      case 'JOIN':
        if (ref.current && !window.matchMedia('(max-width: 900px)').matches) {
          ref.current.style.width = '100%'
        }
        break

      case 'LEAVE':
        if (ref.current && !window.matchMedia('(max-width: 900px)').matches) {
          ref.current.style.width = '0px'
        }
        break
    }
  }

  return (
    <aside className={styles.sidebar} id="sidebar">
      <div className={styles.content} id="sidebarContent">
        <div className={styles.closeButton}>
          <img
            src="/images/close.svg"
            alt="Close"
            onClick={() => {
              closeSidebar()
            }}
          />
        </div>

        <div className={styles.menu}>
          <div
            className={styles.item}
            onMouseEnter={() => animate('JOIN', animateNavItem01)}
            onMouseLeave={() => animate('LEAVE', animateNavItem01)}
            onClick={() => {
              window.open('/buydcent', '_self')
            }}
          >
            <span>D&apos;cent Wallet</span>
            <div className={styles.animated} ref={animateNavItem01} />
          </div>
          <div
            className={styles.item}
            onMouseEnter={() => animate('JOIN', animateNavItem02)}
            onMouseLeave={() => animate('LEAVE', animateNavItem02)}
            onClick={() => {
              window.open('/contact', '_self')
            }}
          >
            <span>Contact Us</span>
            <div className={styles.animated} ref={animateNavItem02} />
          </div>
        </div>

        <div className={styles.buttonWrapper}>
          {/* <div
            className={styles.button}
            id="sidebarButton"
            onMouseEnter={() => {
              const button = document.getElementById('sidebarButton')!

              button.style.backgroundColor = 'rgba(65, 175, 255, 1)'
            }}
            onMouseLeave={() => {
              const button = document.getElementById('sidebarButton')!

              button.style.backgroundColor = 'transparent'
            }}
            onClick={() =>
              window.open('/contact', '_self')
            }
          >
            Request our services
          </div> */}
        </div>

        <div className={styles.footer}>
          <div className={styles.icons}>
            <img src="/images/discord.svg" alt="Discord" />
            <img
              src="/images/twitter.svg"
              alt="Twitter"
              onClick={() => {
                window
                  ? window.open('https://twitter.com/XDCSolutionsLLC')
                  : null
              }}
            />
            <img
              src="/images/telegram.svg"
              alt="Telegram"
              onClick={() => {
                window
                  ? window.open(
                      'https://t.me/+z36uMSBnhtMwYmZh'
                    )
                  : null
              }}
            />
          </div>
          <div className={styles.links}>
            <span onClick={() => {
              window.open('/policy', '_self')
            }}>Privacy policy</span>
          </div>
          <div className={styles.copy}>© 2024 X Digital Capital Solutions</div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
