import { Logo } from "./logo"

export const LoadingPage = () => {

  return (
    <div className="absolute inset-0 flex justify-center items-center bg-background z-50">
      <Logo width={160} height={160} />
    </div>
  )
}