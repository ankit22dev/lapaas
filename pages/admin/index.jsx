import Image from 'next/image'

// icons
import PlusIcon from "../../public/svgs/admin/plus.svg";
import PencilIcon from "../../public/svgs/admin/pencil.svg";
import TrashIcon from "../../public/svgs/admin/trash.svg";
import ChevronLeftIcon from "../../public/svgs/admin/chevron-left.svg";
import ChevronRightIcon from "../../public/svgs/admin/chevron-right.svg";

import LayersIcon from "../../public/svgs/admin/layers.svg";
import DraftIcon from "../../public/svgs/admin/draft.svg";
import InvisibleIcon from "../../public/svgs/admin/invisible.svg";
import RejectedIcon from "../../public/svgs/admin/rejected.svg";
import MailIcon from "../../public/svgs/admin/mail.svg";

const status = [
    { name: "Published", icon: LayersIcon },
    { name: "Draft", icon: DraftIcon },
    { name: "Hidden", icon: InvisibleIcon },
    { name: "Rejected", icon: RejectedIcon },
    { name: "Under Review", icon: MailIcon },
];

const blogs = [
    {
        name: "Blog 1",
        createdAt: "12/01/22",
        category: "Web Design",
        description:"Lorem ispum ...",
        comment: 20,
        likes: 7000,
        shared: 321,
        views: 793,
        imageUrl: "https://source.unsplash.com/random",
    },
    {
        name: "Blog 1",
        createdAt: "15/02/22",
        description:"Lorem ispum ...",
        category: "Gaming",
        comment: 45,
        likes: 70,
        shared: 31,
        views: 400,
        imageUrl: "https://source.unsplash.com/random",
    },
];

const index = () => {
    return (
        <main className="flex-1 pb-8">
            <div className="flex items-center justify-between py-7 px-10">
                <div>
                    <h1 className="text-2xl font-semibold leading-relaxed text-gray-800">Blogs</h1>
                    <p className="text-sm font-medium text-gray-500">
                        Let&apos;s grow to your business! Create your product and upload here
                    </p>
                </div>
                <button
                    className="inline-flex gap-x-2 items-center py-2.5 px-6 text-white bg-indigo-600 rounded-xl hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1"
                >
                    <Image src={PlusIcon} alt='PlusIcon' className="w-6 h-6 fill-current" />
                    <span className="text-sm font-semibold tracking-wide">Create Item</span>
                </button>
            </div>

            <ul className="flex gap-x-24 items-center px-4 border-y border-gray-200">
                {
                    status.map((item, i) => {
                        return (
                            <li key={i}>
                                <button
                                    className="flex gap-x-2 items-center py-5 px-6 text-gray-500 hover:text-indigo-600 relative group"
                                >
                                    <Image src={item.icon} alt={item.name} className="w-6 h-6 fill-current" />
                                    <span className="font-medium">{item.name} </span>
                                    <span
                                        className="absolute w-full h-0.5 left-3 bg-indigo-600 rounded bottom-0 scale-x-0 group-hover:scale-x-100 transition-transform ease-in-out"
                                    />
                                </button>
                            </li>
                        )
                    })
                }

            </ul>

            <table className="w-full border-b border-gray-200">
                <thead>
                    <tr className="text-sm font-medium text-gray-700 border-b border-gray-200 text-left">
                        <td className="py-4 px-2">No</td>
                        <td className="py-4 px-2">Blog Name</td>
                        <td className="py-4 px-2">Post Date</td>
                        <td className="py-4 px-2">Category</td>
                        <td className="py-4 px-2">Commet</td>
                        <td className="py-4 px-2">Like</td>
                        <td className="py-4 px-2">Shared</td>
                        <td className="py-4 px-2">Views</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        blogs.map((product, i) => {
                            return (
                                <tr key={i} className="hover:bg-gray-100 transition-colors group text-left min-h-11">
                                    <td className="font-medium p-2">{i + 1}</td>
                                    <td className="flex gap-x-4 items-center py-2">
                                        <Image
                                            width={50}
                                            height={50}
                                            src={product.imageUrl}
                                            alt="name"
                                            className="w-40 aspect-[3/2] rounded-lg object-cover object-top border border-gray-200"
                                        />
                                        <div>
                                            <a href="#" className="text-base font-semibold text-gray-700">
                                                {product.name}
                                            </a>
                                            <div className="font-medium text-gray-400 text-xs">{product.description}</div>
                                        </div>
                                    </td>
                                    <td className='font-medium'>
                                        <span className="inline-block text-sm w-20 group-hover:hidden p-2">
                                            {product.createdAt}
                                        </span>
                                        <div
                                            className="hidden group-hover:flex justify-center items-center group-hover:w-20 group-hover:items-center group-hover:text-gray-500 group-hover:gap-x-2"
                                        >
                                            <button className="p-1 hover:rounded-md hover:bg-gray-200 flex justify-center items-center">
                                                <Image src={PencilIcon} alt='PencilIcon' className="w-6 h-6 fill-current" />
                                            </button>
                                            <button className="p-1 hover:rounded-md hover:bg-gray-200 flex justify-center items-center">
                                                <Image src={TrashIcon} alt='TrashIcon' className="w-6 h-6 fill-current" />
                                            </button>
                                        </div>
                                    </td>
                                    <td className="font-medium text-sm p-2">{product.category}</td>
                                    <td className="font-medium text-sm p-2">{product.comment} </td>
                                    <td className="font-medium text-sm p-2">{product.likes}</td>
                                    <td className="font-medium text-sm p-2">{product.shared}</td>
                                    <td className="font-medium text-sm p-2">{product.views}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>

            <div className="flex gap-x-2 justify-center pt-8">
                <button className="flex justify-center items-center w-8 h-8">
                    <Image src={ChevronLeftIcon} alt='PencilIcon' className="w-6 h-6 to-gray-800 stroke-current hover:text-indigo-600" />
                </button>
                {[1, 2, 3, 4, 5, 6].map((value, i) => <button key={i}
                    className={`${i === 1 ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-indigo-600'} flex items-center justify-center w-8 h-8 font-medium rounded-full`}
                >
                    {value}
                </button>)}
                <button className="flex justify-center items-center w-8 h-8">
                    <Image src={ChevronRightIcon} alt='PencilIcon' className="w-6 h-6 to-gray-800 stroke-current hover:text-indigo-600" />
                </button>
            </div>
        </main >
    )
}
index.layout = "admin";

export default index