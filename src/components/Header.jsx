import { navigationItems } from "../utils/constants";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
    return (
        <header
            className="fixed border-b border-slate-200 top-0 w-full z-50 bg-white/60 backdrop-blur-md "
        >
            <div className="px-24 py-8">
                <div className="flex items-center justify-between">
                    <nav className="hidden lg:flex space-x-6 text-lg text-primary font-jetbrains font-medium">
                        {navigationItems.map((item, index) => {
                            return item.isSection ? (
                                <HashLink
                                    smooth
                                    key={index}
                                    to={`${item.path}#${item.name}`}
                                    className="font-[450] relative group inlin-flex"
                                >
                                    {item.name}
                                    <span className="pointer-events-none absolute left-0 -bottom-1 h-0.5 w-full rounded-full origin-left scale-x-0 bg-accent transition-transform duration-250 ease-out group-hover:scale-x-100" />
                                </HashLink>
                            ) : (
                                <Link
                                    key={index}
                                    to={item.path}
                                    className="font-[450] relative group inline-flex"
                                >
                                    {item.name}
                                    <span className="pointer-events-none absolute left-0 -bottom-1 h-0.5 w-full rounded-full origin-left scale-x-0 bg-accent transition-transform duration-250 ease-out group-hover:scale-x-100" />
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
