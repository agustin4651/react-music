import type { Icon } from '../interfaces';

export const SkipNextIcon = ({ size = 48, fill = 'currentColor', className, onClick }: Icon) => {
    return (
        <span className={className ? className : ''} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 -960 960 960" width={size}>
                <path fill={fill} d="M689.391-207.434v-545.132h83.175v545.132h-83.175Zm-501.957 0v-545.132L582.783-480 187.434-207.434ZM270.609-480Zm0 113.782L435.13-480 270.609-593.782v227.564Z"/>
            </svg>
        </span>
    )
}
