import React from 'react'
import Community from './items/Community'
import Governance from './items/Governance'
import About from './items/About'
import Ecosystem from './items/Ecosystem'
import Dropdown from './Dropdown'
import MainItem from './MainItem'
import { useTranslation } from 'gatsby-plugin-react-i18next'

const Navigation = () => {
  const { t } = useTranslation('component.navigation')
  return (
    <nav>
      <ul className="text-lg tracking-wide lg:flex">
        <Dropdown title={t('About')} link="/key-concepts/">
          <About />
        </Dropdown>
        <MainItem link="https://docs.vega.xyz/" text={t('Docs')} />
        <Dropdown title={t('Governance')} link="/governance/">
          <Governance />
        </Dropdown>
        <Dropdown title={t('Community')} link="/community/">
          <Community />
        </Dropdown>
        <Dropdown title={t('Ecosystem')} link="/apps/">
          <Ecosystem />
        </Dropdown>
      </ul>
    </nav>
  )
}

export default Navigation
