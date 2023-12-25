import type { Icon } from '../interfaces';

export const FastRewindIcon = ({ size = 48, fill = 'currentColor', className, onClick }: Icon) => {
    return (
        <span className={className ? className : ''} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 -960 960 960" width={size}>
                <path fill={fill} d="M888.174-215.261 504.804-480l383.37-264.739v529.478Zm-431.978 0L72.826-480l383.37-264.739v529.478ZM378.891-480Zm431.979 0ZM378.891-362.63v-234.74L209.478-480l169.413 117.37Zm431.979 0v-234.74L641.457-480 810.87-362.63Z" />
            </svg>
        </span>
    )
}
