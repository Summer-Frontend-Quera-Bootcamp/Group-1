import Icons from '../../icons/Icons';
import { BoardHeader } from '../BoardHeader';
import { JSX, useState } from 'react';
import NewTask from '../NewTask';

interface MyComponentProps {
	message: string;
	style: string;
	count: number;
}
interface Card {
	image: string;
}

const Board = () => {
	return (
		<>
			<div className='mr-7 container flex items-center gap-4'>
				<Column />
			</div>
		</>
	);
};

function Column() {
	return (
		<div className='flex flex-col'>
			<BoardHeader />
			<div className='flex gap-4'>
				<div className='column'>
					<CardLittle
						count={2}
						style='2px solid #FD7E14'
						message='Open'
					/>
					<Card image='' />
					<Card image='https://www.figma.com/file/wmiqD5uj1ECZwjDA6W4ls9/Front-End-Bootcamp-UI-Design-v2?type=design&node-id=2-1093&mode=dev' />
					<button className='flex p-[8px] px-3 py-2  flex-col justify-center items-center gap-10 self-stretch rounded-[8px] border-2 border-brand-primary my-6 mx-auto w-full'>
						<div className='flex text-xs text-brand-primary font-extrabold capitalize justify-center items-center'>
							<span className='flex justify-center items-center h-4 w-4'>
								{Icons.addBox('#208D8E')}
							</span>{' '}
							ساختن تسک جدید
						</div>
					</button>
				</div>
				<div>
					<CardLittle
						count={0}
						style='2px solid #4C6EF5'
						message='In Progress'
					/>
				</div>
				<div>
					<CardLittle
						count={4}
						style='2px solid #FAB005'
						message='Pending'
					/>
					<div className='flex flex-col gap-3'>
						<Card image='' />
						<Card image='https://www.figma.com/file/wmiqD5uj1ECZwjDA6W4ls9/Front-End-Bootcamp-UI-Design-v2?type=design&node-id=2-1093&mode=dev' />
						<Card image='' />
						<Card image='' />
					</div>
				</div>
				<div>
					<CardLittle
						count={1}
						style='2px solid #FD7E14'
						message='To Do'
					/>
					<Card image='' />
				</div>
			</div>
		</div>
	);
	const [openNewTask, setOpenNewTask] = useState<boolean>(false);

	const handleClick = () => {
		setOpenNewTask(true);
	};

	return (
		<div className='flex flex-col'>
			<BoardHeader />
			<div className='flex gap-4'>
				<div className='column'>
					<CardLittle
						count={2}
						style='2px solid #FD7E14'
						message='Open'
					/>
					<Card image='' />
					<Card image='https://www.figma.com/file/wmiqD5uj1ECZwjDA6W4ls9/Front-End-Bootcamp-UI-Design-v2?type=design&node-id=2-1093&mode=dev' />
					<button
						onClick={handleClick}
						className='flex p-[8px] px-3 py-2  flex-col justify-center items-center gap-10 self-stretch rounded-[8px] border-2 border-brand-primary my-6 mx-auto w-full'
					>
						<div className='cursor-pointer flex text-xs text-teal-500 font-extrabold capitalize justify-center items-center'>
							<span className='flex justify-center items-center h-4 w-4'>
								{Icons.addBox('#208D8E')}
							</span>{' '}
							ساختن تسک جدید
						</div>
					</button>
				</div>
				<div>
					<CardLittle
						count={0}
						style='2px solid #4C6EF5'
						message='In Progress'
					/>
				</div>
				<div>
					<CardLittle
						count={4}
						style='2px solid #FAB005'
						message='Pending'
					/>
					<div className='flex flex-col gap-3'>
						<Card image='' />
						<Card image='https://www.figma.com/file/wmiqD5uj1ECZwjDA6W4ls9/Front-End-Bootcamp-UI-Design-v2?type=design&node-id=2-1093&mode=dev' />
						<Card image='' />
						<Card image='' />
					</div>
				</div>
				<div>
					<CardLittle
						count={1}
						style='2px solid #FD7E14'
						message='To Do'
					/>
					<Card image='' />
				</div>
			</div>
			{openNewTask && (
				<div className='bg-black-primary/40 backdrop-blur-sm flex flex-row items-center justify-center fixed top-0 left-0 h-screen w-screen overflow-hidden'>
					<NewTask setNewTask={setOpenNewTask} />
				</div>
			)}
		</div>
	);
}

function CardLittle(props: MyComponentProps) {
	return (
		<div
			className='flex p-3 my-4 justify-between items-center w-64 rounded-3xl border-t-2 shadow-lg'
			style={{ borderTop: props.style }}
		>
			{props.message}
			<span className='flex flex-col justify-center py-0.5 px-1 rounded-[100px]'>
				{props.count}
			</span>
		</div>
	);
}

function Card(props: Card): JSX.Element {
	return (
		<div className='flex p-4 flex-col items-start gap-4 rounded-3xl shadow-[0px_7px_6px_-3px_rgba(0,0,0,0.30)]'>
			<img
				className='rounded'
				src={props.image}
				alt=''
			/>
			<div className='flex text-right gap-3 flex-col items-start'>
				<h6 className='text-xs'>پروژه اول</h6>
				<h6 className='text-xs font-normal'>این یک تیتر برای این تسک است.</h6>
			</div>
			<div className='flex text-right justify-between gap-3'>
				<div className=' text-xs flex'>
					<span className='flex justify-center items-center w-4 h-4'>
						{Icons.flag('#FA5252')}
					</span>
					۵ مهر - فردا
				</div>
				<div className='text-xs flex justify-center text-gray-200 items-center'>
					{Icons.checkRectangle('#BDC0C6')} ۲ / ۱۲
				</div>
			</div>
			<div className='flex gap-3'>
				<span className='flex justify-center items-center rounded-3xl text-xs bg-blue-400 p-2'>
					درس
				</span>

				<span className='flex justify-center items-center text-grape-400 bg-grape-100 rounded-3xl text-xs p-2 '>
					پروژه
				</span>
			</div>
		</div>
	);
}
export default Board;
