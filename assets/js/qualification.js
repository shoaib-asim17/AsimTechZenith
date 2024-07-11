const qualifications = [
    {
        title: "Computer Science Engineering",
        year: 2025,
        description: "Mastering web development, software engineering and data structure.",
        institute: {
            name: "Muffakham Jah College Of Engineering And Technologies",
            shortName: "MJCET",
            duration: "Nov 2021 - Present"
        }
    },
    {
        title: "Full Stack Web Development",
        year: 2024,
        description: "Complete web development course which included HTML to JavaScript, React, Node/Expressjs, MongoDB etc.",
        institute: {
            name: "Programming Hero",
            shortName: "PHero",
            duration: "Nov 2021 - Present"
        }
    },
    {
        title: "Intermediate",
        year: 2021,
        description: "Studied MPC.",
        institute: {
            name: "Narayana Junior College",
            shortName: "NJC",
            duration: "June 2019 - Aug 2021"
        }
    },
    {
        title: "Secondary School Certificate",
        year: 2019,
        description: "Completed my Secondary School Certificate (SSC) with a GPA of 9.7, emphasizing foundational academic excellence and dedication to learning.",
        institute: {
            name: "Jeevadan High School",
            shortName: "JHS",
            duration: "Jun2 2009 - March 2019"
        }
    },
];

const parent = document.getElementById('qualification');

const html = qualifications.map(quali =>
    `<li class="mb-10 ml-4">
        <div class="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700">
        </div>
        <div class="flex items-center">
            <time class="mb-1 mr-3 px-3 py-2 rounded-md leading-none text-gray-100 bg-blue-500 dark:bg-gray-600">${quali.year}</time>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-gray-200">${quali.title}
                <a href="https://web.programming-hero.com/" target="_blank" class="ml-3">
                    <i class="fa-solid fa-arrow-up-right-from-square fa-2xs"></i>
                </a>
            </h3>
        </div>
        <p class="mb-3 text-base font-normal text-gray-800 dark:text-gray-400">${quali.description}</p>
        <p class="text-base font-light text-gray-800 dark:text-gray-400">
        <span title=${quali.institute.name}>${quali.institute.shortName}</span> &bull; ${quali.institute.duration}
        </p>
    </li>`);

parent.innerHTML = html.join(" ");

