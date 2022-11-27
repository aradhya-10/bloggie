import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              name
              bio
              id
              image {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            categories {
              name
              slug
            }
          }
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.postsConnection.edges;
};

export const getRecentPosts = async () => {
	const query = gql`
		query GetPostDetails(){
			posts(
				orderBy: createdAt_ASC
				last: 3
			){
				title
				featuredImage {
					url
				}
				createdAt
				slug
			}
		}
	`;
	const result = await request(graphqlAPI, query);
  	return result.posts;
};

export const getSimilarPosts = async () => {
	const query = gql`
		query getpostdetails($slug: String!, $categories: [Strings!]){
			posts(
				where: { slug_not: $slug, AND:{ categories_some:{ slug_in: $categories}}}
				last: 3
			){
				title
				featuredTmage {
					url
				}
				createdAt
				slug
			}
		}
	`;
	const result = await request(graphqlAPI, query);
  	return result.posts;
};

export const getCategories = async () => {
	const query = gql`
		query Getcategories{
			categories {
				name
				slug
			}
		}
	`;
	const result = await request(graphqlAPI, query);
  	return result.categories;
};