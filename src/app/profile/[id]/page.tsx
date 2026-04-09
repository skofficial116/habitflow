

export default async function UserProfile({ params }: any) {
    const { id } = await params
    return (
        <div className="flex flex-col py-5 items-center justify-center h-screen ">
            <h1>User Profile</h1>
            <hr />
            <p className="text-4xl ">Profile page <span className="text-blue-400 bg-orange-800 p-1 rounded">{id}</span></p>
        </div>
    )
}