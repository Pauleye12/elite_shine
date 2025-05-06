import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("/", "routes/AppWrapper.tsx", [
    // child routes
    index("routes/Home.tsx"),
    // route("about", "routes/about.tsx"),
    // route("initiatives", "routes/initiatives.tsx"),
    // route("blog", "routes/blog.tsx"),
    // route("blog/:blogId", "routes/blogDets.tsx"),
    // route("contact", "routes/contact.tsx"),
  ]),
] satisfies RouteConfig;
