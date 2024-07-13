export default function Page() {
  return (
    <div className="p-4 space-y-8">
      <div className="space-y-2">
        <div className="text-lg font-bold">Routing</div>
        <ul className="list-disc list-inside">
          <li>App Router vs Pages Router</li>
          <li>By default, components inside app are React Server Components.</li>
          <li>Routing system in Next.js</li>
          <li>File conventions</li>
          <li>Component hierarchy: layout, template, error, loading, not-found, page</li>
          <li>Page and Layouts</li>
          <li>Linking and Navigating</li>
          <li>Route Groups</li>
          <li>Dynamic Routes</li>
        </ul>
      </div>

      <div className="space-y-2">
        <div className="text-lg font-bold">App Router vs Pages Router</div>
        <ul className="list-disc list-inside">
          <li>By default, components inside app are React Server Components.</li>
        </ul>
      </div>
    </div>
  );
}