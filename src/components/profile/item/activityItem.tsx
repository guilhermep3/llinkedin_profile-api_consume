"use client"
import { FullPost } from "@/types/post"
import { User } from "@/types/user"
import { Ellipsis, Globe, MessageSquareMore, Repeat, Send, ThumbsUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

type props = {
  user: User
  post: FullPost;
}
export const ActivityItem = ({ user, post }: props) => {
  const hasImage = post.post_media.length > 0;
  const image = post.post_media[0];
  const [contentLength, setContentLength] = useState(300);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    if (hasImage && imageRef.current) {
      const handleImageLoad = () => {
        const height = imageRef.current?.height || 0;

        if (height <= 200) {
          setContentLength(300);
        } else if (height <= 300) {
          setContentLength(200);
        } else {
          setContentLength(100);
        }
      };

      if (imageRef.current.complete) {
        handleImageLoad();
      } else {
        imageRef.current.addEventListener('load', handleImageLoad);

        return () => imageRef.current?.removeEventListener('load', handleImageLoad);
      }
    }
  }, [hasImage, image]);

  const hasToExpand = post.content.length > contentLength;
  const textShown = post.content.slice(0, contentLength);

  return (
    <div className="w-full max-w-[360px] h-[580px] border rounded-md flex flex-col">
      <div className="flex justify-between gap-3 p-3 pb-0">
        <div className="flex gap-3">
          <div className="rounded-full overflow-hidden w-14 h-14">
            <Image
              src={`/user/${user.avatar ?? 'empty_avatar.png'}`}
              alt="imagem"
              width={56} height={56}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p className="font-bold">{user.name}</p>
              {user.username === "username" &&
                <p className="text-xs text-foreground/80">Você</p>
              }
            </div>
            <div>
              <p className="text-sm text-foreground/70">{user.bio?.slice(0, 30)}</p>
              <div className="flex items-center gap-2 text-xs">
                <p className="text-foreground/70">
                  {new Date(post.created_at).toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'short',
                    year: 'numeric',
                  })}
                </p>
                <Globe className="w-4 h-4 text-foreground/70" />
              </div>
            </div>
          </div>
        </div>
        <div><Ellipsis /></div>
      </div>
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-col justify-start text-start p-3 text-sm text-foreground/90">
          <p>{textShown}{post.content.length > contentLength && "..."}</p>
          {hasToExpand &&
            <Link href={`#`} className="font-semibold cursor-pointer">
              Ver mais
            </Link>
          }
        </div>
        {hasImage &&
          <div className="w-full h-full">
            <Image
              src={`/${image.media_url ?? 'empty_image.png'}`}
              ref={imageRef}
              alt="imagem"
              width={360} height={360}
              className="w-full h-full max-h-[360px] object-cover"
            />
          </div>
        }
        <div className="flex items-center gap-2 p-3 mt-auto text-sm">
          <div className="flex items-center gap-1">
            <div className="w-fit bg-primary p-1 rounded-full text-white" title="curtidas">
              <ThumbsUp className="w-3 h-3 fill-white/50" />
            </div>
            {post.post_likes.length}
          </div>
          <div className="text-foreground/90">
            {post.post_comments.length} {post.post_comments.length > 1 ? 'comentários' : 'comentário'}
          </div>
          <div className="text-foreground/90">{post.post_shares.length} compartilhamentos</div>
        </div>
      </div>
      <div className="grid grid-cols-4 border-t">
        <div className="flex justify-center cursor-pointer hover:bg-muted py-3">
          <ThumbsUp className="w-5 h-5" />
        </div>
        <div className="flex justify-center cursor-pointer hover:bg-muted py-3">
          <MessageSquareMore className="w-5 h-5" />
        </div>
        <div className="flex justify-center cursor-pointer hover:bg-muted py-3">
          <Repeat className="w-5 h-5" />
        </div>
        <div className="flex justify-center cursor-pointer hover:bg-muted py-3">
          <Send className="w-5 h-5" />
        </div>
      </div>
    </div>
  )
}