import type { Icon } from '../interfaces';

export const RepeatIcon = ({ size = 48, fill = 'currentColor', className, onClick }: Icon) => {
    return (
        <span className={className ? className : ''} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 -960 960 960" width={size}>
                <path fill={fill} d="M274-60.608 101.174-234.565 274-407.957 330.522-351l-77.609 77.609h447.261v-160.87h79.217v240.087H252.913l77.609 76.044L274-60.609Zm-92.826-461.174v-240.653h526.913l-77.044-75.478L687-895.435l173.391 173.392L687-548.087l-55.957-57.522 77.044-77.608H260.391v161.435h-79.217Z" />
            </svg>
        </span>
    )
}
