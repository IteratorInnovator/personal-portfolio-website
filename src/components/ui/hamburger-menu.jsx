import { useIsOpen } from "../../ui";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function HamburgerMenu() {

    const { close } = useIsOpen();

    const navigationItems = [
        { name: "About", path: "/", isSection: true },
        { name: "Education", path: "/", isSection: true },
        { name: "Experience", path: "/", isSection: true },
        { name: "Skills", path: "/", isSection: true },
        { name: "Projects", path: "/projects", isSection: false },
        { name: "Certifications", path: "/certifications", isSection: false },
        { name: "Contact", path: "/contact", isSection: false },
    ];

    return (
        <div >
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40"
                onClick={close}
            />
            
            {/* Menu Panel */}
            <div className="fixed top-0 right-0 h-full w-72 bg-background/95 backdrop-blur-md border-l border-gray-700 z-40 transform transition-transform duration-300">
                <div className="flex flex-col p-6 pt-20">
                    <Link
                        to="/"
                        className="font-mont text-white text-xl font-semibold mb-8 block"
                        onClick={close}
                    >
                        Ng Kok Jing
                    </Link>

                    {/* Mobile Navigation Items */}
                    <nav className="flex flex-col">
                        {navigationItems.map((item, index) =>
                            item.isSection ? (
                                <HashLink
                                    smooth
                                    key={index}
                                    onClick={close}
                                    to={`${item.path}#${item.name}`}
                                    className="text-mont text-slate-400 font-[450] hover:text-white text-left text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 capitalize py-3 border-b border-gray-700 last:border-b-0"
                                >
                                    {item.name}
                                </HashLink>
                            ) : (
                                <Link
                                    key={item.name}
                                    to={item.path}
                                    onClick={close}
                                    className="text-mont text-slate-400 font-[450] hover:text-white text-left text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 capitalize py-3 border-b border-gray-700 last:border-b-0"
                                >
                                    {item.name}
                                </Link>
                            )
                        )}
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default HamburgerMenu;
