import Icons from '../../icons/Icons';
import {JSX, useState} from "react";

interface IShareProject {
	setShareProject: (value: boolean) => void,
	showShareProject: boolean,
}

const ShareProject: React.FC<IShareProject> = ({setShareProject, showShareProject}): JSX.Element => {
	const [animation, setAnimation] = useState<string>("animate__animated animate__fadeInDownBig")

	const handleClose = async () => {
		setAnimation("animate__animated animate__fadeOutUpBig")
		await setTimeout(() => {
			setShareProject(false)
		},200)
	}
	return showShareProject ? (
		<div
			dir='ltr'
			className={`${animation} w-[470px] h-[300px] p-5 bg-white rounded-xl flex-col justify-start items-center gap-10 inline-flex`}
		>
			<div className='w-[430px] justify-between items-center inline-flex'>
				<div className='w-6 h-6 opacity-0 justify-center items-center flex'>
					<div className='w-6 h-6 relative'></div>
				</div>
				<div className="text-center text-stone-900 text-xl font-extrabold font-['IranYekan Regular'] capitalize leading-loose">
					به اشتراک‌گذاری پروژه‌
				</div>
				<div className='w-6 h-6 justify-center items-center flex'>
					<div onClick={() => handleClose()} className='w-6 h-6 relative cursor-pointer'>{Icons.close()}</div>
				</div>
			</div>
			<div className='self-stretch h-[236px] flex-col justify-start items-start gap-6 flex'>
				<div className='w-[430px] h-10 relative bg-gray-100 rounded-lg'>
					<button className='pl-[30px] pr-[29px] pt-2.5 pb-1.5 left-0 top-0 bottom-0 rounded-l-lg absolute bg-brand-primary justify-center items-center inline-flex'>
						<div className="text-center text-white text-sm font-normal font-['IranYekan Regular'] capitalize">
							ارسال
						</div>
					</button>
					<input
						placeholder='دعوت با ایمیل'
						className="bg-gray-100 text-gray-400 outline-none right-[7px] left-[90.53px] top-0 bottom-0 absolute text-right text-sm font-normal font-['IranYekan Regular'] capitalize"
					/>
				</div>
				<div className='self-stretch justify-between items-center inline-flex'>
					<button className='px-3 pt-[3px] pb-0.5 bg-white rounded-md border border-gray-200 justify-center items-center gap-2.5 flex'>
						<div className="text-right text-stone-900 text-xs font-normal font-['IranYekan Regular'] capitalize">
							کپی لینک
						</div>
					</button>
					<div className='justify-start items-center gap-2 flex'>
						<div className="text-right text-stone-900 text-sm font-normal font-['IranYekan Regular'] capitalize">
							لینک خصوصی
						</div>
						<div className='w-5 h-5 justify-center items-center flex'>
							<div className='w-5 h-5 relative'>{Icons.link()}</div>
						</div>
					</div>
				</div>
				<div className='self-stretch h-[122px] flex-col justify-start items-end gap-4 flex'>
					<div className="text-center text-gray-500 text-sm font-normal font-['IranYekan Regular'] capitalize">
						اشتراک‌گذاشته شده با
					</div>
					<div className='self-stretch h-[82px] flex-col justify-start items-start gap-2 flex'>
						<div className='self-stretch justify-between items-center inline-flex'>
							<div className='px-2 pt-[5px] pb-1 bg-white rounded-md border border-gray-200 justify-center items-center gap-2.5 flex'>
								<div className="text-right text-stone-900 text-xs font-normal font-['IranYekan Regular'] capitalize">
									دسترسی کامل
								</div>
							</div>
							<div className='justify-start items-center gap-3 flex'>
								<div className='px-2 py-1 bg-blue-100 rounded-md justify-center items-center gap-2.5 flex'>
									<div className="text-right text-blue-500 text-xs font-normal font-['IranYekan Regular'] capitalize">
										workspace owner
									</div>
								</div>
								<div className='justify-start items-center gap-[7px] flex'>
									<div className="text-right text-stone-900 text-sm font-normal font-['IranYekan Regular'] capitalize">
										من
									</div>
									<div className='h-[37px] px-2 pt-[9px] pb-[7px] rounded-[100px] justify-center items-center flex'>
										<div className="opacity-0 text-right text-stone-900 text-xs font-normal font-['IranYekan Regular'] capitalize">
											NM
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* <div className='self-stretch justify-between items-center inline-flex'>
							<div className='px-2 pt-[5px] pb-1 bg-white rounded-md border border-gray-200 justify-center items-center gap-2.5 flex'>
								<div className='w-[18px] h-[18px] justify-center items-center flex'>
									<div className='w-[18px] h-[18px] relative flex items-center'>
										{Icons.chevronDown()}
									</div>
								</div>
								<div className="text-right text-stone-900 text-xs font-normal font-['IranYekan Regular'] capitalize">
									دسترسی کامل
								</div>
							</div>
							<div className='justify-end items-center gap-3 flex'>
								<div className='justify-start items-center gap-[7px] flex'>
									<div className="text-right text-stone-900 text-sm font-normal font-['IranYekan Regular'] capitalize">
										sararahimi@gmail.com
									</div>
									<div className='h-[37px] px-2 pt-[9px] pb-[7px] bg-red-400 rounded-[100px] justify-center items-center flex'>
										<div className="text-right text-stone-900 text-xs font-normal font-['IranYekan Regular'] capitalize">
											SR
										</div>
									</div>
								</div>
							</div>
						</div> */}
					</div>
				</div>
			</div>
		</div>
	) : (<></>);
};

export default ShareProject;
