import { Card } from "@/components/ui/card"
import { books } from "@/lib/content"
import type { Book } from "@/lib/content"

export default function ReadingList() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Reading List 📚</h1>
      
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Currently Reading</h2>
        <div className="grid gap-6">
          {books.currentlyReading.map((book) => (
            <BookCard key={book.title} {...book} />
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Recently Finished</h2>
        <div className="grid gap-6">
          {books.recentlyFinished.map((book) => (
            <BookCard key={book.title} {...book} />
          ))}
        </div>
      </section>
    </div>
  )
}

function BookCard({ title, author, description, link }: Book) {
  return (
    <Card className="p-6">
      <h3 className="text-xl font-medium mb-1">{title}</h3>
      <p className="text-muted-foreground text-sm mb-3">by {author}</p>
      <p className="text-muted-foreground">{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-primary hover:underline mt-2 inline-block"
        >
          Learn more →
        </a>
      )}
    </Card>
  )
}