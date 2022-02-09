import * as RssParser from 'rss-parser';
import { Feed, FeedOptions } from 'feed';

const SITE_URL = 'https://furunov.github.io/rss-feed';

export class FeedGenerator {
  generateFeed(feedItems: RssParser.Item[], maxFeedDescriptionLength: number, maxFeedContentLength: number) {
    const outputFeed = new Feed({
      title: '企業テックブログRSS',
      description: '企業のテックブログの更新をまとめたRSSフィード',
      language: 'ja',
      id: `${SITE_URL}/`,
      link: `${SITE_URL}/`,
      feedLinks: {
        rss: `${SITE_URL}/feed/rss.xml`,
        atom: `${SITE_URL}/feed/atom.xml`,
        json: `${SITE_URL}/feed/feed.json`,
      },
      image: `${SITE_URL}/images/icon.png`,
      favicon: `${SITE_URL}/images/favicon.ico`,
      copyright: 'yamadashy/tech-blog-rss-feed',
      generator: 'yamadashy/tech-blog-rss-feed',
      updated: new Date(),
    } as FeedOptions);

    for (const feedItem of feedItems) {
      console.log('[feed-item]', feedItem.isoDate, feedItem.title);

      const feedItemId = feedItem.guid || feedItem.link;
      const feedItemContent = (feedItem.summary || feedItem.contentSnippet || '').replace(/(\n|\t+|\s+)/g, ' ');

      outputFeed.addItem({
        id: feedItemId,
        guid: feedItemId,
        title: feedItem.title,
        description: this.truncateText(feedItemContent, maxFeedDescriptionLength, '...'),
        content: this.truncateText(feedItemContent, maxFeedContentLength, '...'),
        link: feedItem.link,
        category: (feedItem.categories || []).map((category) => {
          return {
            name: category,
          };
        }),
        author: feedItem.creator
          ? [
              {
                name: feedItem.creator,
              },
            ]
          : null,
        published: feedItem.isoDate ? new Date(feedItem.isoDate) : null,
        date: feedItem.isoDate ? new Date(feedItem.isoDate) : null,
      });
    }

    return outputFeed;
  }

  truncateText(text: string, maxLength: number, postFix: string): string {
    return text.length > maxLength ? text.substring(0, maxLength) + postFix : text;
  }
}
