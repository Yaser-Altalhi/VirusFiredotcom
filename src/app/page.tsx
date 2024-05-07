
export const runtime = "edge";

export default function Dashboard() {
  return (
    
    <div className=" w-full h-screen flex items-center justify-center bg-blue-100">
     <link rel="icon" href="logo.svل" />
      <div className="bg-white shadow-lg rounded-lg max-w-md w-full p-8">
        <h1 className="text-2xl font-bold text-left">Welcome to VirusFire</h1>
        <br />
        <p>
          Thank you for visiting us. We are excited to announce that our new
          website is coming soon! We are working hard to create a fantastic
          online experience for you. Stay tuned for our launch. We can&apos;t
          wait to welcome you back to explore all that we have to offer.
          <br />
          <br />
            Stay Connected!
            <br />
        </p>
        <br />
        For updates and news, be sure to follow us on our social media
        platforms.
        <br />
        <br />
        We look forward to sharing our journey with you.
        <form className="space-y-6 mt-8">

          <a
            href="https://twitter.com/virusfiredotcom"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
          >
            Follow us on X
          </a>
          <a
            href="mailto:contactus@virusfire.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Send an email
          </a>
        </form>
      </div>
    </div>
  );
}
