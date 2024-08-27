import BlogDetailsPage from "./pages/BlogDetails";
import LandingPagePage from "./pages/LandingPage";
import BloggerDetailsPage from "./pages/BloggerDetails";
import ContactUsPage from "./pages/ContactUs";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LandingPagePage/>
      {/* <BlogDetailsPage/> */}
      {/* <BloggerDetailsPage/> */}
      {/* <ContactUsPage/> */}
    </main>
  );
}
