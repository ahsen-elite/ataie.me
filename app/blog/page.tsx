import { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarIcon } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Abbas Ataie",
  description: "Articles and insights on DevOps, AI, and software development by Abbas Ataie.",
};

// Sample blog posts for the placeholder
const blogPosts = [
  {
    id: "post-1",
    title: "Optimizing Kubernetes Resource Allocation",
    description: "Learn how to properly allocate resources in Kubernetes to improve performance and reduce costs.",
    date: "May 15, 2025",
    readTime: "8 min read",
    category: "DevOps",
  },
  {
    id: "post-2",
    title: "Building AI-powered Developer Tools",
    description: "Discover how to leverage AI to create tools that streamline the software development process.",
    date: "April 22, 2025",
    readTime: "12 min read",
    category: "AI",
  },
  {
    id: "post-3",
    title: "Microservices vs Monoliths: Making the Right Choice",
    description: "An in-depth analysis of when to choose microservices and when a monolith makes more sense.",
    date: "March 10, 2025",
    readTime: "10 min read",
    category: "Architecture",
  },
  {
    id: "post-4",
    title: "Securing Your CI/CD Pipeline",
    description: "Best practices for implementing security measures throughout your continuous integration and delivery process.",
    date: "February 28, 2025",
    readTime: "9 min read",
    category: "Security",
  },
];

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6">
      <div className="mb-12 space-y-4">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="text-xl text-muted-foreground">
          Sharing insights and knowledge on DevOps, AI, and software development.
        </p>
      </div>

      {/* Featured Article Placeholder */}
      <div className="mb-12 rounded-lg border bg-card p-6 shadow-sm">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
            Featured
          </span>
          <span>June 1, 2025</span>
          <span>•</span>
          <span>15 min read</span>
        </div>
        <h2 className="mt-4 text-2xl font-bold md:text-3xl">The Future of DevOps: AI-Driven Infrastructure Management</h2>
        <p className="mt-2 text-lg text-muted-foreground">
          Exploring how artificial intelligence is transforming infrastructure management and the role of DevOps engineers in this new landscape.
        </p>
        <Button className="mt-6" variant="default">
          Read Article
        </Button>
      </div>

      {/* Blog Posts Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <Card key={post.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                  {post.category}
                </span>
              </div>
              <CardTitle className="mt-2">{post.title}</CardTitle>
              <CardDescription>{post.description}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow">
              <div className="flex items-center text-sm text-muted-foreground">
                <CalendarIcon className="mr-1 h-3 w-3" />
                <span>{post.date}</span>
                <span className="mx-1">•</span>
                <span>{post.readTime}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full">Read More</Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center justify-center space-y-4 text-center">
        <h3 className="text-2xl font-bold">Subscribe to My Newsletter</h3>
        <p className="max-w-md text-muted-foreground">
          Get the latest articles and insights on DevOps, AI, and software development delivered to your inbox.
        </p>
        <div className="flex w-full max-w-md flex-col gap-2 sm:flex-row">
          <input
            type="email"
            placeholder="Your email address"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          />
          <Button type="submit">Subscribe</Button>
        </div>
      </div>
    </div>
  );
}