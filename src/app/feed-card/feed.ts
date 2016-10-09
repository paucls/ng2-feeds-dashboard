import { FeedInfo } from './feed-info'
import { FeedItem } from './feed-item'

export interface Feed {
  status: string,
  feed: FeedInfo,
  items: Array<FeedItem>,
  errorMessage?: string
}
