import { Certificate } from "@/types/certificate";
import { Education } from "@/types/education";
import { Experience } from "@/types/experience";
import { FullPost, Post, PostComment, PostLike, PostMedia, PostShare } from "@/types/post";
import { User, UserSkill } from "@/types/user";
import axios from "axios";
import { useEffect, useState } from "react";

export function useProfileData(username: string) {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [allUsers, setAllUsers] = useState<User[] | null>(null);
  const [posts, setPosts] = useState<FullPost[] | null>(null);
  const [data, setData] = useState({
    experiences: [] as Experience[],
    educations: [] as Education[],
    certificates: [] as Certificate[],
    skills: [] as UserSkill[],
  });

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const [
          resUsers, resCertificates, resEducations, resExperiences,
          resPosts, resComments, resLikes, resShares, resMedia,
          resUserSkills
        ] = await Promise.all([
          axios.get("/data/users.json"),
          axios.get("/data/certificates.json"),
          axios.get("/data/educations.json"),
          axios.get("/data/experiences.json"),
          axios.get("/data/posts.json"),
          axios.get("/data/post_comments.json"),
          axios.get("/data/post_likes.json"),
          axios.get("/data/post_shares.json"),
          axios.get("/data/post_media.json"),
          axios.get("/data/user_skills.json"),
        ]);

        const foundUser = resUsers.data.find((u: User) => u.username === username);
        const foundPosts = resPosts.data.find((p: Post) => p.owner_id === foundUser?.id);

        if (!foundUser) setUser(null);
        if (!foundPosts) setPosts(null);
        setAllUsers(resUsers.data);

        console.log("resUsers.data: ", resUsers.data)
        console.log("foundUser: ", foundUser)

        if (foundUser) {
          setUser(foundUser);

          setData({
            experiences: resExperiences.data.filter((e: Experience) => e.user_id === foundUser.id),
            educations: resEducations.data.filter((e: Education) => e.user_id === foundUser.id),
            certificates: resCertificates.data.filter((c: Certificate) => c.user_id === foundUser.id),
            skills: resUserSkills.data.filter((s: UserSkill) => s.user_id === foundUser.id),
          });

          if (foundPosts) {
            const userPosts = resPosts.data.filter((p: Post) => p.owner_id === foundUser.id)
              .map((post: Post) => ({
                ...post,
                post_comments: resComments.data.filter((c: PostComment) => c.post_id === post.id),
                post_likes: resLikes.data.filter((c: PostLike) => c.post_id === post.id),
                post_shares: resShares.data.filter((c: PostShare) => c.post_id === post.id),
                post_media: resMedia.data.filter((c: PostMedia) => c.post_id === post.id),
              }))

            setPosts(userPosts);
          }
        }

      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [username]);

  return { user, allUsers, posts, ...data, isLoading };
}
