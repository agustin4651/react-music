import type { Icon } from '../interfaces';

export const VolumeUpIcon = ({ size = 48, fill = 'currentColor', className, onClick }: Icon) => {
    return (
        <span className={className ? className : ''} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 -960 960 960" width={size}>
                <path fill={fill} d="M582-127v-72.204Q677-228 736.5-305T796-481q0-99-59.5-176.5T582-763.796V-836q124.229 30.749 203.114 129.374Q864-608 864-481t-78.386 226.126Q707.229-155.749 582-127ZM96-337v-287h173l233-231v750L269-337H96Zm466 33v-353q58 21 93.5 68.578 35.5 47.579 35.5 108.49Q691-419 655.5-371.5T562-304ZM410-627l-101 95H188v104h121l101 96v-295Zm-85 147Z" />
            </svg>
        </span>
    )
}
