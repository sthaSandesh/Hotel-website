import { ActiveLink, usePath } from 'raviger';

export function NavLink(props) {
    const { label, link,} = props;
    const path = usePath();

    return (
        <li>
            <ActiveLink
                href={link}
                className="cursor-pointer text-gray-600 hover:text-purple-500"
                exactActiveClass="cursor-pointer text-purple-500 hover:text-purple-500/60"
            >
                {label}
            </ActiveLink>
        </li>
    );
}