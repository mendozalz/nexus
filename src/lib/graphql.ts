/**
 * Cliente GraphQL para consultar posts desde WordPress
 * @module graphql
 */

/**
 * Enumeración para los códigos de idioma
 */
export enum LanguageCodeEnum {
  EN = "EN",
  ES = "ES",
}

/**
 * Interfaz para las imágenes destacadas
 */
interface FeaturedImage {
  node: {
    altText: string;
    mediaItemUrl: string;
  };
}

/**
 * Interfaz para el avatar del autor
 */
interface Avatar {
  url: string;
}

/**
 * Interfaz para el autor del post
 */
interface Author {
  node: {
    name: string;
    avatar: Avatar;
  };
}

/**
 * Interfaz para las categorías
 */
interface Category {
  name: string;
}

/**
 * Interfaz para los posts de WordPress
 */
export interface Post {
  id: string;
  guid: string;
  uri: string;
  slug: string;
  title: string;
  link: string;
  modified: string;
  author: Author | null;
  categories: {
    nodes: Category[];
  } | null;
  featuredImage: FeaturedImage | null;
  content: string;
}

/**
 * Interfaz para la respuesta de la consulta de posts
 */
interface PostQueryResponse {
  data: {
    posts: {
      nodes: Post[];
    };
  };
}

/**
 * Función para obtener los posts filtrados por idioma
 * @param language - Código de idioma (EN o ES)
 * @returns Promesa que resuelve a un array de posts
 */
export async function fetchPosts(language: LanguageCodeEnum): Promise<Post[]> {
  // Obtener la URL de la API de WordPress desde las variables de entorno
  // const apiUrl = import.meta.env.PUBLIC_WORDPRESS_API_URL;
  const apiUrl = "https://nexuspcgroup.com/graphql";

  // Construir la consulta GraphQL
  const query = `
    query PostQuery($language: String!) {
      posts(where: {categoryName: $language}) {
        nodes {
      id
      guid
      uri
      slug
      title
      link
      modified
      author {
        node {
          avatar {
            url
          }
          name
        }
      }
      categories {
        nodes {
          name
        }
      }
      featuredImage {
        node {
          altText
          mediaItemUrl
        }
      }
      content
    }
      }
    }
  `;

  try {
    // Realizar la consulta GraphQL
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables: {
          language,
        },
      }),
    });

    // Verificar si la respuesta es exitosa
    if (!response.ok) {
      throw new Error(
        `Error al realizar la consulta GraphQL: ${response.statusText}`,
      );
    }

    // Parsear la respuesta como JSON
    const result = (await response.json()) as PostQueryResponse;

    // Retornar los nodos de posts
    return result.data.posts.nodes;
  } catch (error) {
    console.error("Error al obtener posts:", error);
    return [];
  }
}
