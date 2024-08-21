import style from "./DemoOptions.module.css";

interface Props {
	onClick?: any;
}
export const DemoOptions = ({ onClick }: Props) => {
	return (
		<div className={style.demoOptions__container}>
			<div className={style.demoOptions__button} onClick={() => onClick("1")}>
				1
			</div>
			<div className={style.demoOptions__button} onClick={() => onClick("2")}>
				2
			</div>
			<div className={style.demoOptions__button} onClick={() => onClick("3")}>
				3
			</div>
		</div>
	);
};
