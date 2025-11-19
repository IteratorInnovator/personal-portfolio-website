import { Turnstile } from "@marsidev/react-turnstile";

const CLOUDFLARE_TURNSTILE_SITE_KEY = import.meta.env
    .VITE_CLOUDFLARE_TURNSTILE_SITE_KEY;

const TurnstileWidget = (props) => {
    return <Turnstile siteKey={CLOUDFLARE_TURNSTILE_SITE_KEY} {...props} />;
};

export default TurnstileWidget;
