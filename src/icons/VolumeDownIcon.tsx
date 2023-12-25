import type { Icon } from '../interfaces'

export const VolumeDownIcon = ({ size = 48, fill = 'currentColor', className, onClick }: Icon) => {
    return (
        <span className={className ? className : ''} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 -960 960 960" width={size}>
            <path fill={fill} d="M173-337v-287h173l233-231v750L346-337H173Zm466 33v-353q55 18 92 67.5T768-480q0 60-37 108t-92 68ZM487-627l-101 95H265v104h121l101 96v-295ZM373-480Z"/>
            </svg>
        </span>
    )
}
