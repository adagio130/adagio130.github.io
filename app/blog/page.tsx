import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Murmur',
  description: 'Read Hank\'s blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">Murmur</h1>
      <BlogPosts />
    </section>
  )
}
