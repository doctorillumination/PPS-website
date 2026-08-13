import { Site } from "../Site";

export default async function AnyPage({ params }: { params: Promise<{ slug?: string[] }> }) {
  const { slug = [] } = await params;
  return <Site pathname={`/${slug.join("/")}`} />;
}
