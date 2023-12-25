import type { Icon } from '../interfaces'

export const VolumeOffIcon = ({ size = 48, fill = 'currentColor', className, onClick }: Icon) => {
    return (
        <span className={className ? className : ''} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 -960 960 960" width={size}>
                <path fill={fill} d="M820-37 683-174q-24 16-51 28t-58 19v-72q15-5 31-9.5t29-16.5L494-367v262L263-337H89v-287h155L30-844l47-47L868-86l-48 49Zm-23-244-48-50q20-34 30-71.423T789-481q0-101.322-59.5-180.661T574-764v-72q124 31 204 129.5T858-481q0 55-16 105.5T797-281ZM671-409l-97-99v-142q50 25 80.5 70.5T685-480q0 19-3.5 36.5T671-409ZM494-590 364-724l130-131v265Zm-92 263v-134l-69-71H180v104h120l102 101Zm-34-169Z" />
            </svg>
        </span>
    )
}
