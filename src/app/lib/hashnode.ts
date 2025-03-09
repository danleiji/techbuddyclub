const HASHNODE_API_URL = 'https://gql.hashnode.com';

export async function fetchBlogPosts() {
  try {
    const response = await fetch(HASHNODE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': process.env.HASHNODE_ACCESS_TOKEN || '',
      },
      body: JSON.stringify({
        query: `
          query Publication($host: String!) {
            publication(host: $host) {
              posts(first: 10) {
                edges {
                  node {
                    id
                    title
                    brief
                    slug
                    coverImage {
                      url
                    }
                    publishedAt
                    readTimeInMinutes
                    tags {
                      name
                    }
                  }
                }
              }
            }
          }
        `,
        variables: {
          host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_ID,
        },
      }),
    });

    const data = await response.json();
    const posts = data?.data?.publication?.posts?.edges?.map((edge: any) => ({
      id: edge.node.id,
      title: edge.node.title,
      brief: edge.node.brief,
      slug: edge.node.slug,
      coverImage: edge.node.coverImage?.url,
      dateAdded: edge.node.publishedAt,
      readTime: edge.node.readTimeInMinutes,
      tags: edge.node.tags.map((tag: any) => tag.name),
    })) || [];
    
    return posts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

export async function fetchBlogPost(slug: string) {
  try {
    const response = await fetch(HASHNODE_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': process.env.HASHNODE_ACCESS_TOKEN || '',
      },
      body: JSON.stringify({
        query: `
          query Post($slug: String!, $host: String!) {
            publication(host: $host) {
              post(slug: $slug) {
                id
                title
                content
                coverImage {
                  url
                }
                publishedAt
                readTimeInMinutes
                tags {
                  name
                }
              }
            }
          }
        `,
        variables: {
          slug,
          host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_ID,
        },
      }),
    });

    const data = await response.json();
    const post = data?.data?.publication?.post;
    
    if (!post) return null;

    return {
      ...post,
      coverImage: post.coverImage?.url,
      dateAdded: post.publishedAt,
      readTime: post.readTimeInMinutes,
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
} 