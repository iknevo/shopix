import { Button } from "@/components/ui/button"
import { Flag } from "lucide-react"
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center px-8 text-center">
      <div>
        <Flag className="mx-auto h-20 w-20" />
        <h1 className="mt-10 text-4xl leading-snug font-extrabold tracking-tight md:text-5xl">
          Error 404 <br /> It looks like something went wrong.
        </h1>
        <Button asChild className="mt-9">
          <Link to="/">Back Home</Link>
        </Button>
      </div>
    </div>
  )
}
