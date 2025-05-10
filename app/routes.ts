import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("/", "routes/AppWrapper.tsx", [
    // child routes
    index("routes/home.tsx"),
    route("about", "routes/about.tsx"),
    route("services", "routes/services.tsx"),
    // route("blog", "routes/blog.tsx"),
    // route("blog/:blogId", "routes/blogDets.tsx"),
    route("contact", "routes/contactUs.tsx"),
  ]),
] satisfies RouteConfig;
