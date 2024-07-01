import BlogCard from "../cards/BlogCard";

const BlogSection = () => {
     return (
          <>
               <BlogCard className="md:col-span-6" cta />

               <BlogCard className="md:col-span-3" />

               <BlogCard className="md:col-span-3" />
          </>
     );
}

export default BlogSection;