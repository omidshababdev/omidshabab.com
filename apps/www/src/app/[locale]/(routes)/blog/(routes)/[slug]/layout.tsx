import { Post } from "@/types";
import axios from "axios";
import { Metadata } from "next";

// export const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
//      const res = await axios.get(`${process.env.API_BASE_URL}/posts/${params.slug}`);
//      const post: Post = res.data;

//      return {
//           title: post.title.toLowerCase(),
//           description: JSON.parse(post.desc).content[0]?.content[0]?.text || 'Post description',
//      };
// };

// export async function generateStaticParams() {
//      const res = await axios.get(`${process.env.API_BASE_URL}/posts`);
//      const posts: Post[] = res.data;

//      return posts.map(post => ({
//           params: {
//                slug: post.slug
//           }
//      }));
// }

export default function layout({
     children
}: {
     children: React.ReactNode
}) {
     return children
}
