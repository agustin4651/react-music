import { Icon } from '../interfaces/';

export const ShuflleIcon = ({ size = 48, fill = 'currentColor', className, onClick }: Icon) => {
    return (
        <span className={className ? className : ''} onClick={onClick}>
            <svg xmlns="http://www.w3.org/2000/svg" height={size} viewBox="0 -960 960 960" width={size}>
                <path fill={fill} d="M575.043-141.174v-74.913h114.522L521.174-383.478l52.783-52.218L744.348-267.87v-115.956h75.043v242.652H575.043Zm-382.217 0-51.652-53.783 550.391-549.391H575.043v-75.043h244.348v243.348h-75.043V-691.13L192.826-141.174Zm195.478-379.869-247.13-244.566 52.652-53.782 248.261 245.13-53.783 53.218Z" />
            </svg>
        </span>
    )
}
