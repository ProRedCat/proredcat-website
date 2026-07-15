/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    if (process.env.VERCEL_ENV === "production") {
      return []
    }

    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "X-Robots-Tag",
            value: "noindex, nofollow, noarchive",
          },
        ],
      },
    ]
  },
}

export default nextConfig
