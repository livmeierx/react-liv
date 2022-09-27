import React from "react";

function Resume() {
    return (
        <section class="container">
            <h2 className="top-title">Resume</h2>
            <hr></hr>

            <div>
                <div class="mt-5">
                    <h2 className="top-title">Liv Meier</h2>

                    <p class="mt-5">
                        <a href="https://www.linkedin.com/in/livmeier1">
                            <img
                            src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                            alt="LinkedIn icon"
                            />
                        </a>
                    </p>

                    <a
                    href="https://github.com/livmeierx/liv-react/blob/feature/pages/docs/liv_meier_resume.pages"
                    class="link"
                    >
                        Download Resume
                    </a>
                </div>
            </div>

            <div class="justify-content-center mt-5">
                <div>
                    <h2 className="top-title">Profeciencies</h2>
                    <ul>
                        <li>
                        HTML, CSS, Bootstrap, HandleBars, JavaScript, jQuery, React.js, IndexedDB,<br />
                        Node.js, Express.js, SQL, Sequelize, MongoDB, Mongoose, NoSQL, APIs
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Resume;