import { Dot } from "lucide-react";

function EducationCard({
    course,
    status_tag,
    school,
    description,
    duration,
    grade_info,
    highlights,
}) {
    return (
        <article className="w-full">
            <div className="education-card-border-gradient">
                <div className="p-6 text-left rounded-lg card-hover bg-[#0a0b2e]">
                    <div className="flex mb-3">
                        <span
                            className={`px-3 py-1 text-xs md:text-sm font-semibold text-white rounded-full bg-gradient-to-r ${status_tag.color_theme}`}
                        >
                            {status_tag.status}
                        </span>
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-white font-mont">
                        {course}
                    </h3>
                    <h4 className="text-[#06b6d4] mb-3 font-semibold">
                        {school}
                    </h4>
                    <p className="mb-4 text-sm text-gray-300">{description}</p>
                    <div className="flex items-center mb-2">
                        <svg
                            className="w-4 h-4 mr-2 text-[#3b82f6]"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <span className="text-sm text-gray-300">
                            {duration}
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                        {grade_info.map(function (grade, index) {
                            return (
                                <span
                                    key={index}
                                    className={`text-gray-300 px-2 py-1 text-xs md:text-sm border rounded-full ${grade.color_theme}`}
                                >
                                    {grade.text}
                                </span>
                            );
                        })}
                    </div>
                    <div>
                        <h5 className="flex items-center mb-2 text-sm font-medium text-white">
                            <svg
                                className="w-4 h-4 mr-2 text-yellow-500"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            Highlights & Activities
                        </h5>
                        <div className="space-y-2">
                            {highlights.map(function (highlight, index) {
                                return (
                                    <div
                                        key={index}
                                        className="flex items-start gap-2"
                                    >
                                        <svg
                                            version="1.1"
                                            id="Layer_1"
                                            fill="currentColor"
                                            xmlns="http://www.w3.org/2000/svg"
                                            xmlns:xlink="http://www.w3.org/1999/xlink"
                                            x="0px"
                                            y="0px"
                                            viewBox="0 0 122.88 122.88"
                                            enable-background="new 0 0 122.88 122.88"
                                            xml:space="preserve"
                                            className="h-[0.4em] text-[#3b82f6] self-center"
                                        >
                                            <g>
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M61.438,0c33.93,0,61.441,27.512,61.441,61.441 c0,33.929-27.512,61.438-61.441,61.438C27.512,122.88,0,95.37,0,61.441C0,27.512,27.512,0,61.438,0L61.438,0z"
                                                />
                                            </g>
                                        </svg>
                                        <span className="text-xs md:text-sm text-gray-300">
                                            {highlight}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
}

export default EducationCard;
