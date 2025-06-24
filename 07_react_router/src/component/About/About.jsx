import React from 'react'

export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://blog.researcher.life/wp-content/uploads/2023/08/pexels-kampus-production-6248980-scaled.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            Code & Projects (Aaryan-029)
                        </h2>
                        <p className="mt-6 text-gray-600">
                            I’m a passionate frontend developer focused on learning and building modern web applications using
                             React and JavaScript. My GitHub profile showcases the projects I’ve worked on, 
                            from simple apps to larger UI-based projects as I continue to grow as a developer.



                        </p>
                        <p className="mt-4 text-gray-600">
                          I enjoy experimenting with new tools and frameworks, improving my code every day, 
                          and contributing to open-source when possible. Follow along to see my learning 
                          journey and the work I create along the way.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

