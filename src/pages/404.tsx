import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen hero">
      <div className="text-center hero-content">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">404</h1>
          <p className="py-6">
            Oops, looks like this page does not exist. Please check the URL or
            click the button below to be redirected to the homepage.
          </p>
          <Link href="/" className="btn btn-primary">
            Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
