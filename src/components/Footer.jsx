export default function Footer() {
  return (
    <footer className="bg-black py-8 border-t border-zinc-800">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-cyan-400">Rajkumar Rajput</h2>

        <p className="text-gray-400 mt-3">
          MERN Stack Developer | React.js | Node.js | AWS Certified
        </p>

        <p className="mt-6 text-sm text-gray-500">
          © {new Date().getFullYear()} Rajkumar Rajput. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
