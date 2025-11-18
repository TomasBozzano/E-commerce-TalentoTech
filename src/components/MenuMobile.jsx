import { LinkButtonIcon } from "./LinkButtonIcon";

export const MenuMobile = ({ auth, navAdminItems, navItems, countProducts, onClick }) => {
    const items = (auth === 'admin' ? navAdminItems : navItems) ?? [];

    return (
        <>
            <ul className="flex flex-col space-y-4 justify-center items-start">
                {items.map((item) => {
                    const Icon = item.svg;
                    return (
                        <li key={item.name}>
                            <LinkButtonIcon
                                path={item.path}
                                nameSvg={Icon ? <Icon className="inline-block h-4 w-6 mr-1" /> : null}
                                nameButton={item.name}
                                count={countProducts}
                                onClick={onClick}
                            />
                        </li>
                    );
                })}
            </ul>
        </>
    )
}
