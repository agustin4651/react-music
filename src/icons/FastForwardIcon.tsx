import type { Icon } from '../interfaces';

export const FastForwardIcon = ({ size = 48, fill = 'currentColor', className, onClick }: Icon) => {
  return (
    <span className={className ? className : ''} onClick={onClick}>
        <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 -960 960 960" width={size}>
            <path fill={fill} d="M70.826-215.261v-529.478L454.196-480 70.826-215.261Zm436.978 0v-529.478L891.174-480l-383.37 264.739ZM148.37-480Zm436.739 0ZM148.37-362.63 317.543-480 148.37-597.37v234.74Zm436.739 0L754.761-480 585.109-597.37v234.74Z"/>
        </svg>
    </span>
  )
}
