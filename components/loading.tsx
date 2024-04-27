import { CgSpinner } from "react-icons/cg";

export const LoadingSpinner = () => {
    return (
        <div className="flex justify-center">
            <CgSpinner className="animate-spin w-10 h-10" />
        </div>
    )
}