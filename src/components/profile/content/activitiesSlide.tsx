"use client"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ActivityItem } from "../item/activityItem"
import { FullPost } from "@/types/post"
import { User } from "@/types/user"
import { useEffect, useState } from "react"

type Props = {
  user: User
  data: FullPost[]
}

export function ActivitiesSlide({ user, data }: Props) {
  const [visibleCount, setVisibleCount] = useState(2)

  useEffect(() => {
    function handleResize() {
      setVisibleCount(window.innerWidth < 768 ? 1 : 2)
    }
    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {data.map((post, index) => (
          <CarouselItem
            key={index}
            className={visibleCount === 1 ? "basis-full" : "md:basis-1/2"}
          >
            <Card className="border-0 shadow-none py-0 w-fit">
              <CardContent className="p-0">
                <ActivityItem user={user} post={post} />
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="-left-6" />
      <CarouselNext className="-right-6" />
    </Carousel>
  )
}