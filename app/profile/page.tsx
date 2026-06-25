import { auth, signOut } from "@/auth"
import { redirect } from "next/navigation"
import Image from "next/image"

export default async function ProfilePage() {
  const session = await auth()
  if (!session) redirect("/")

  const { user } = session

  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 dark:bg-black">
      <main className="flex flex-col items-center gap-6 text-center px-4">
        {user?.image && (
          <Image
            src={user.image}
            alt={user.name ?? "Profile photo"}
            width={80}
            height={80}
            className="rounded-full"
          />
        )}
        <div className="flex flex-col gap-1">
          {user?.name && (
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              {user.name}
            </h1>
          )}
          {user?.email && (
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              {user.email}
            </p>
          )}
        </div>
        <form
          action={async () => {
            "use server"
            await signOut({ redirectTo: "/" })
          }}
        >
          <button
            type="submit"
            className="flex h-10 items-center justify-center rounded-full border border-zinc-200 px-6 text-sm font-medium text-zinc-700 transition-colors hover:bg-zinc-100 dark:border-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-900"
          >
            Sign out
          </button>
        </form>
      </main>
    </div>
  )
}
