"use client";

import ClickSpark from "../../components/reactbits/ClickSpark";

export default function BlogPage() {
  return (
    <>
      <ClickSpark
        sparkColor="#2b7fff"
        sparkSize={12}
        sparkRadius={16}
        sparkCount={8}
        duration={400}
      >
        <div className="main-container">
          <div className="container-blog max-w-7xl mx-auto px-6 lg:px-20 pb-12 pt-20">
            {/*  */}
            <div className="container mx-auto my-6 max-w-5xl">
              <div className="text-center">
                <h2 className="text-3xl/normal md:text-4xl/normal font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400">
                  Blog
                </h2>
                <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
                  Interested in working together? Fill out the form below and
                  I`ll get back to you as soon as possible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </ClickSpark>
    </>
  );
}
