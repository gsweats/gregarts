import { siteConfig } from './lib/site-config'


// https://mylashes.notion.site/Next-js-Notion-Starter-Kit-Template-cf579cbe774d4d1d973fbd1ee524f128

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: 'fffee79cbcd64e9d88927bd8f46d366c',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'GregArts',
  domain: 'art.stevens.pro',
  author: 'Greg Stevens',

  // open graph metadata (optional)
  description: 'Finding the Artist within myself. Thanks to Mr. Robert Sinclair for his daily texts of motivation and inspiration.',

  // social usernames (optional)
  twitter: 'DalyleDevOpsInc',
  github: 'GregSweats',
  // linkedin: 'fisch2',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`
  youtube: 'channel/UCEOR5OVIgWpsRVZcoyz8i0Q', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`
  // instagram: 'mobileyumilashes',

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  // default: isPreviewImageSupportEnabled: true,
  // Disabaled due to slow page performance 2022-08-25
  isPreviewImageSupportEnabled: false,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'default'
/*
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '1630dff4601448b09cadeea0770db615'
    },
    {
      title: 'Services',
      pageId: '6e89af819ef743488355d6e7516d1b09'
    },
    {
      title: 'Contact',
      pageId: '34f850c26deb4e9098666ff06e99e1f3'
    }
  ] */
})
