import type { Icon } from '../interfaces';

export const FullscreenIcon = ({ size = 48, fill = 'currentColor', className, onClick }: Icon) => {
    return (
        <span className={className ? className : ''} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 -960 960 960" width={size}>
                <path fill={fill} d="M99-99v-235h91v144h144v91H99Zm528 0v-91h144v-144h91v235H627ZM99-627v-235h235v91H190v144H99Zm672 0v-144H627v-91h235v235h-91Z" />
            </svg>
        </span>
    )
}
