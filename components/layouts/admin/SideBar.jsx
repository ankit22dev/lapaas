import OverviewIcon from "../../../public/svgs/admin/overview.svg";
import ShoppingBagIcon from "../../../public/svgs/admin/shopping-bag.svg";
import GraphIcon from "../../../public/svgs/admin/graph.svg";
import CalendarIcon from "../../../public/svgs/admin/calendar.svg";
import WalletIcon from "../../../public/svgs/admin/wallet.svg";
import FileIcon from "../../../public/svgs/admin/file.svg";
import ChatIcon from "../../../public/svgs/admin/chat.svg";
import GroupChatIcon from "../../../public/svgs/admin/group-chat.svg";
import SettingsIcon from "../../../public/svgs/admin/settings.svg";
import LogoutIcon from "../../../public/svgs/admin/logout.svg";

import Image from "next/image";

const sidebar = [
    [
        { name: "Overview", icon: OverviewIcon },
        { name: "Blogs", icon: ShoppingBagIcon },
        { name: "Analytics", icon: GraphIcon },
        { name: "Schedule", icon: CalendarIcon },
        { name: "Payout", icon: WalletIcon },
        { name: "Statements", icon: FileIcon },
    ],
    [
        { name: "Help", icon: ChatIcon },
        { name: "Community", icon: GroupChatIcon },
        { name: "Settings", icon: SettingsIcon },
        { name: "Logout", icon: LogoutIcon },
    ],
];

import React from 'react'

const SideBar = () => {
    return (
        <aside className="py-6 px-10 w-64 border-r border-gray-200">
            <h1>LOGO</h1>
            {sidebar.map((group, i) => {
                return (
                    <ul key={i}>
                        {group.map((item, j) => {
                            return (
                                <li key={j}>
                                    <a
                                        href="#"
                                        className="flex gap-x-4 items-center py-2 text-gray-500 hover:text-indigo-600 group"
                                    >
                                        <span
                                            className="absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out"
                                        />
                                        <Image src={item.icon} alt={item.name} className="w-6 h-6 fill-current" />
                                        <span>{item.name}</span>
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                )
            })}
            {/* <ul v-for="group in sidebar" :key=group.i className="flex flex-col gap-y-6 pt-20">
          <li v-for="item in group" :key=item.id>
            <a
              href="#"
              className="flex gap-x-4 items-center py-2 text-gray-500 hover:text-indigo-600 group"
            >
              <span
                className="absolute w-1.5 h-8 bg-indigo-600 rounded-r-full left-0 scale-y-0 -translate-x-full group-hover:scale-y-100 group-hover:translate-x-0 transition-transform ease-in-out"
              />
              <Component :is="item.icon" className="w-6 h-6 fill-current" />
              <span>{{ item.name }}</span>
            </a>
          </li>
        </ul> */}
        </aside>
    )
}

export default SideBar