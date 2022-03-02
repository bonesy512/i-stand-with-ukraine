import Gitlab from '@geist-ui/react-icons/twitter'

export default {
  projectLink: 'https://twitter.com/shoestring512',
  projectLinkIcon: <Twitter />,
  docsRepositoryBase: 'https://github.com/shuding/nextra/blob/master',
  titleSuffix: ' – #OpRussia',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null,
  darkMode: true,
  footer: true,
  footerText: `The Unlicense ${new Date().getFullYear()} © Bonesy512.`,
  footerEditLink: `Support The Ukraine Army`,
  logo: (
    <>
      <svg>...</svg>
      <span>Russian State Corruption Exposed</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="FRO: Exposing Corrupt Russian Oligarchs" />
      <meta name="og:title" content="Fuck Russian Oligarchs" />
    </>
  ),
}
