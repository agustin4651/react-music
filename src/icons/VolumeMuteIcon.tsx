import type { Icon } from '../interfaces'

export const VolumeMuteIcon = ({ size = 48, fill = 'currentColor', className, onClick }: Icon) => {
    return (
        <span className={className ? className : ''} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 -960 960 960" width={size}>
                <path fill={fill} d="M258-337v-287h173l233-231v750L431-337H258Zm91-91h122l101 96v-295l-101 95H349v104Zm111-52Z" />
            </svg>
        </span>
    )
}
