import joinClassNames from '../../lib/joinClassNames';

interface ButtonProps {
    children: React.ReactNode;
    onClick?: () => void;
    href?: string;
    className?: string;
    type?: 'link-button';
}

export default function Button(props: ButtonProps) {

    const defaultClass = 'px-4 py-3 border-2'

    switch (props.type) {
        case 'link-button':
          return <a className={joinClassNames(defaultClass, props.className!)} href={props.href} >{props.children}</a>
          break;
        default:
            return (
              <button
                className={joinClassNames(defaultClass, props.className!,)}
                onClick={props.onClick}
              >
                {props.children}
              </button>
            );
    }

}