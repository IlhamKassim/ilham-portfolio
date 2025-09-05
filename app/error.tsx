'use client'

export default function Error({
  error,
}: {
  error: Error & { digest?: string }
}) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-2xl font-bold text-foreground">
          Something went wrong!
        </h1>
        <p className="mb-4 text-muted-foreground">
          We encountered an error while loading this page.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="rounded-md bg-primary px-4 py-2 text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Try again
        </button>
      </div>
    </div>
  )
}
