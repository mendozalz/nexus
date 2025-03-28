import { useState, useEffect } from "react";
import { LanguageCodeEnum, fetchPosts, type Post } from "../../lib/graphql";
import { BlogPosts } from "../ui/BlogPosts";

interface BlogPostsLoaderProps {
  /**
   * Idioma de los posts a cargar
   */
  language: LanguageCodeEnum;
  /**
   * Número de posts a mostrar
   * @default 6
   */
  postCount?: number;
}

/**
 * Componente que carga posts en tiempo real y los pasa al componente BlogPosts
 * @component
 */
export function BlogPostsLoader({ 
  language, 
  postCount = 6 
}: BlogPostsLoaderProps) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Obtener posts usando la función fetchPosts existente
        const fetchedPosts = await fetchPosts(language);
        
        // Limitar la cantidad de posts según el parámetro postCount
        setPosts(fetchedPosts.slice(0, postCount));
      } catch (err) {
        console.error("Error al cargar posts:", err);
        setError(
          err instanceof Error
            ? err.message
            : "Error desconocido al cargar posts"
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, [language, postCount]);

  // Renderizamos el componente BlogPosts original con los datos cargados
  return (
    <BlogPosts 
      posts={posts} 
      isLoading={isLoading} 
      error={error} 
    />
  );
}

export default BlogPostsLoader;
