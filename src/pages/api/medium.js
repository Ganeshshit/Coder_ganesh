import Parser from 'rss-parser';

const parser = new Parser({
  customFields: {
    item: [
      ['content:encoded', 'content'],
      ['dc:creator', 'creator']
    ]
  }
});

// Default image to use when no image is found in the article
const DEFAULT_IMAGE = '/images/profile/devloper.png';

export default async function handler(_, res) {
  try {
    // Replace with your Medium username
    const mediumUsername = '@shitganesh4'; // Update this with your actual Medium username
    const feed = await parser.parseURL(`https://medium.com/feed/${mediumUsername}`);

    // Process the feed items to extract images and format data
    const processedItems = feed.items.map(item => {
      // Extract the first image from the content if available
      let imgSrc = DEFAULT_IMAGE;

      if (item.content) {
        const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
        if (imgMatch && imgMatch[1]) {
          // Process Medium image URLs to get a consistent size
          let imageUrl = imgMatch[1];

          // If it's a Medium image URL, ensure we're using a consistent size
          if (imageUrl.includes('medium.com')) {
            // Remove any size parameters and add our own
            imageUrl = imageUrl.split('?')[0];

            // Some Medium images use /max/xxx/ format
            if (imageUrl.includes('/max/')) {
              imageUrl = imageUrl.replace(/\/max\/\d+\//, '/max/800/');
            }
          }

          imgSrc = imageUrl;
        }
      }

      // Create a summary from the content
      let summary = '';
      if (item.content) {
        // Remove HTML tags and get first 150 characters
        summary = item.content
          .replace(/<[^>]+>/g, '')
          .substring(0, 150)
          .trim() + '...';
      }

      return {
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        creator: item.creator,
        summary: summary,
        imgSrc: imgSrc,
        guid: item.guid
      };
    });

    res.status(200).json(processedItems);
  } catch (error) {
    console.error('Error fetching Medium feed:', error);
    res.status(500).json({ error: 'Failed to fetch Medium feed' });
  }
}
