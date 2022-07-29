import SideBar from "./SideBar"

const index = ({ children }) => {
    return (
        <div className="w-full min-h-screen font-sans text-gray-900 bg-gray-50 flex admin-layout">
            <SideBar />
            {children}
        </div>
    )
}

export default index