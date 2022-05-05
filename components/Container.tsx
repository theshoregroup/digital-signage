import joinClassNames from '../lib/joinClassNames';

interface Props {
    children: React.ReactNode | React.ReactNode[];
    className?: string;
}

export default function Container({ children, className }: Props) {
    return (
        <div className={joinClassNames('container p-2 border-2 h-full w-full overflow-hidden', className ? className : '')}>
            {children}
        </div>
    )
}