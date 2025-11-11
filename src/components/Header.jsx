import { navigationItems } from "../utils/constants";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 text-white backdrop-blur-md`}
        >
            <div className="px-8 pt-6 pb-4 text-primary">
                <div className="flex items-center justify-between">

                    <nav className="hidden lg:flex space-x-8">
                        {navigationItems.map((item, index) => {
                            return item.isSection ? (
                                <HashLink
                                    smooth
                                    key={index}
                                    to={`${item.path}#${item.name}`}
                                    className="font-[450] transition-all animate-link-hover"
                                >
                                    {item.name}
                                </HashLink>
                            ) : (
                                <Link
                                    key={index}
                                    to={item.path}
                                    className="font-[450] transition-all animate-link-hover"
                                >
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
