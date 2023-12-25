import type { Icon } from '../interfaces';

export const SkipPreviousIcon = ({ size = 48, fill = 'currentColor', className, onClick }: Icon) => {
    return (
        <span className={className ? className : ''} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 -960 960 960" width={size}>
                <path fill={fill} d="M187.434-207.434v-545.132h83.175v545.132h-83.175Zm585.132 0L377.217-480l395.349-272.566v545.132ZM689.391-480Zm0 113.782v-227.564L524.87-480l164.521 113.782Z"/>
            </svg>
        </span>
    )
}
