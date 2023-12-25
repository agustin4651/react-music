import type { Icon } from '../interfaces';

export const MenuIcon = ({ size = 48, fill = 'currentColor', className, onClick }: Icon) => {
    return (
        <span className={className ? className : ''} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 -960 960 960" width={size}>
                <path fill={fill} d="M99-205v-92h763v92H99Zm0-229v-91h763v91H99Zm0-229v-92h763v92H99Z" />
            </svg>
        </span>
    )
}
