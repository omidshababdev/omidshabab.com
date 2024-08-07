import BlogCard from "../cards/BlogCard";
import { useEffect, useState } from "react";
import { Post } from "@/types";
import axios from "axios";
import { baseApiUrl } from "@/config/routes";
import { useLocale } from "next-intl";

const BlogSection = () => {
     const [posts, setPosts] = useState<Post[] | null>(null);

     const locale = useLocale()

     useEffect(() => {
          const fetchPost = async () => {
               try {
                    const response = await axios.get(`${baseApiUrl}/posts?count=3&locale=${locale}`);
                    setPosts(response.data);
               } catch (error) {
                    console.error('Error fetching the post:', error);
               }
          };

          fetchPost();
     }, [locale]);

     return (
          <>
               <BlogCard text={posts?.[0]?.title} href={`/blog/${posts?.[0]?.slug ?? ''}`} className="md:col-span-6" cta />

               <BlogCard text={posts?.[1]?.title} href={`/blog/${posts?.[1]?.slug ?? ''}`} className="md:col-span-3" />

               <BlogCard text={posts?.[2]?.title} href={`/blog/${posts?.[2]?.slug ?? ''}`} className="md:col-span-3" />
          </>
     );
}

export default BlogSection;