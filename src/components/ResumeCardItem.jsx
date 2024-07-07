/* eslint-disable react/prop-types */
import { Notebook } from "lucide-react"
import { Link } from "react-router-dom"

const ResumeCardItem = ({resume}) => {
  return (
    <Link to={`/dashboard/resume/${resume.id}/edit`}>
        <div className="p-14 mt-10 bg-secondary flex items-center justify-center h-[280px] border border-primary rounded-md hover:scale-[1.01] transition-all hover:shadow-md shadow-primary ">
            <Notebook/>
        </div>
        <h2 className="text-center my-1 ">{resume.title}</h2>
    </Link>
  )
}

export default ResumeCardItem